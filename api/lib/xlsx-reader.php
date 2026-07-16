<?php
/**
 * Minimal, dependency-free XLSX reader.
 *
 * An .xlsx file is a zip archive containing XML parts. This reads the first
 * worksheet of a workbook plus its shared strings table and returns the data
 * as a plain PHP array of rows. No Composer/PhpSpreadsheet is required.
 */

/**
 * Converts a spreadsheet column reference (e.g. "C12") into a 0-based
 * column index (e.g. 2).
 */
function xlsx_column_index(string $cellRef): int
{
    $letters = preg_replace('/[0-9]+/', '', $cellRef);
    $index = 0;
    foreach (str_split($letters) as $char) {
        $index = $index * 26 + (ord(strtoupper($char)) - ord('A') + 1);
    }
    return $index - 1;
}

/**
 * Converts an Excel date serial number into a "Y-m-d" string.
 */
function xlsx_serial_to_date(float $serial): string
{
    $unixTimestamp = (int) round(($serial - 25569) * 86400);
    return gmdate('Y-m-d', $unixTimestamp);
}

/**
 * Reads the shared strings table (xl/sharedStrings.xml) into a plain array.
 */
function xlsx_read_shared_strings(ZipArchive $zip): array
{
    $xml = $zip->getFromName('xl/sharedStrings.xml');
    if ($xml === false) {
        return [];
    }

    $sharedStrings = [];
    $doc = simplexml_load_string($xml);
    foreach ($doc->si as $si) {
        if (isset($si->t)) {
            $sharedStrings[] = (string) $si->t;
            continue;
        }
        // Rich text runs (<r><t>...</t></r>) are concatenated.
        $text = '';
        foreach ($si->r as $run) {
            $text .= (string) $run->t;
        }
        $sharedStrings[] = $text;
    }

    return $sharedStrings;
}

/**
 * Reads the first worksheet of an .xlsx file and returns its rows as a list
 * of associative arrays keyed by the header row (row 1).
 *
 * The first column is treated as the row label (e.g. a date, possibly stored
 * as an Excel date serial number) and every other column is treated as a
 * numeric series.
 *
 * @return array{labels: string[], series: array<string, float[]>}
 */
function xlsx_read_report(string $path): array
{
    if (!is_file($path)) {
        throw new RuntimeException("Report file not found: {$path}");
    }

    $zip = new ZipArchive();
    if ($zip->open($path) !== true) {
        throw new RuntimeException("Unable to open xlsx file: {$path}");
    }

    $sharedStrings = xlsx_read_shared_strings($zip);
    $sheetXml = $zip->getFromName('xl/worksheets/sheet1.xml');
    $zip->close();

    if ($sheetXml === false) {
        throw new RuntimeException("Unable to read worksheet from: {$path}");
    }

    $doc = simplexml_load_string($sheetXml);
    $rows = [];
    foreach ($doc->sheetData->row as $row) {
        $cells = [];
        foreach ($row->c as $c) {
            $ref = (string) $c['r'];
            $type = (string) $c['t'];
            $raw = isset($c->v) ? (string) $c->v : '';

            if ($type === 's' && $raw !== '') {
                $value = $sharedStrings[(int) $raw] ?? '';
            } elseif ($type === 'inlineStr') {
                $value = (string) $c->is->t;
            } else {
                $value = $raw;
            }

            $cells[xlsx_column_index($ref)] = $value;
        }
        // Skip fully empty rows (e.g. trailing blank rows some spreadsheet
        // tools leave behind up to the sheet's declared dimension).
        if (empty($cells)) {
            continue;
        }
        ksort($cells);
        $rows[] = $cells;
    }

    if (count($rows) < 2) {
        return ['labels' => [], 'series' => []];
    }

    $header = array_shift($rows);
    $columnCount = count($header);

    $labels = [];
    $series = [];
    for ($col = 1; $col < $columnCount; $col++) {
        $series[$header[$col] ?? "col{$col}"] = [];
    }

    foreach ($rows as $row) {
        $labelRaw = $row[0] ?? '';
        // Dates may come through as an Excel serial number (numeric) or an
        // already-formatted text string, depending on how the sheet was built.
        $labels[] = is_numeric($labelRaw) ? xlsx_serial_to_date((float) $labelRaw) : (string) $labelRaw;

        for ($col = 1; $col < $columnCount; $col++) {
            $seriesName = $header[$col] ?? "col{$col}";
            $value = $row[$col] ?? 0;
            $series[$seriesName][] = is_numeric($value) ? $value + 0 : 0;
        }
    }

    return ['labels' => $labels, 'series' => $series];
}
