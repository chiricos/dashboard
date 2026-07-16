<?php
/**
 * Serves report data from reports/*.xlsx as JSON for the dashboard charts.
 *
 * Usage: /api/xlsx-data.php?report=banrep
 */

require_once __DIR__ . '/lib/xlsx-reader.php';

header('Content-Type: application/json; charset=utf-8');

// Whitelist of allowed reports mapped to their source file. Keeping this
// explicit avoids exposing arbitrary file paths through the query string.
$reports = [
    'banrep' => 'banrep.xlsx',
    'cultural' => 'cultural.xlsx',
    'enciclopedia' => 'enciclopedia.xlsx',
    'investigacion' => 'investiga.xlsx',
];

$report = $_GET['report'] ?? '';

if (!isset($reports[$report])) {
    http_response_code(400);
    echo json_encode(['error' => 'Unknown report. Valid values: ' . implode(', ', array_keys($reports))]);
    exit;
}

try {
    $path = __DIR__ . '/../reports/' . $reports[$report];
    $data = xlsx_read_report($path);
    echo json_encode($data);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
