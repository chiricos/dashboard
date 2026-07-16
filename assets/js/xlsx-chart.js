/**
 * Shared loader for the "bot traffic" line charts (Banrep, Cultural,
 * Enciclopedia, Investigación). Fetches data straight from the source
 * reports/*.xlsx file (via api/xlsx-data.php) instead of relying on
 * hardcoded arrays, so refreshing the Excel file is enough to update
 * the chart on next page load.
 */
(function (window) {
  'use strict';

  // Stable colors for known bots so charts stay visually consistent across
  // pages; unknown series fall back to the palette below, cycling if needed.
  var KNOWN_COLORS = {
    'GPTBot': { border: '#587ce4', background: 'rgba(88, 124, 228, 0.1)' },
    'OAI-SearchBot': { border: '#ede190', background: 'rgba(237, 225, 144, 0.1)' },
    'PerplexityBot': { border: '#4bc0c0', background: 'rgba(75, 192, 192, 0.1)' },
    'AzureAI-SearchBot': { border: '#ff6384', background: 'rgba(255, 99, 132, 0.1)' },
    'DuckAssistBot': { border: '#9966ff', background: 'rgba(153, 102, 255, 0.1)' },
    'ClaudeBot': { border: '#e6852f', background: 'rgba(230, 133, 47, 0.1)' },
    'ChatGPT-User': { border: '#8e5ae2', background: 'rgba(142, 90, 226, 0.1)' },
    'Google-Extended': { border: '#e2586b', background: 'rgba(226, 88, 107, 0.1)' }
  };

  var FALLBACK_PALETTE = [
    { border: '#20c997', background: 'rgba(32, 201, 151, 0.1)' },
    { border: '#fd7e14', background: 'rgba(253, 126, 20, 0.1)' },
    { border: '#6610f2', background: 'rgba(102, 16, 242, 0.1)' }
  ];

  function colorFor(seriesName, index) {
    return KNOWN_COLORS[seriesName] || FALLBACK_PALETTE[index % FALLBACK_PALETTE.length];
  }

  /**
   * Fetches the data for `reportName` from api/xlsx-data.php and renders a
   * line chart in the canvas `canvasId`.
   *
   * @param {string} canvasId
   * @param {string} reportName - key understood by api/xlsx-data.php
   * @param {string} apiBasePath - relative path prefix to the /api folder
   */
  function renderXlsxChart(canvasId, reportName, apiBasePath) {
    var ctx = document.getElementById(canvasId);
    if (!ctx) {
      return;
    }

    var basePath = apiBasePath || '../../api';

    fetch(basePath + '/xlsx-data.php?report=' + encodeURIComponent(reportName))
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Request failed with status ' + response.status);
        }
        return response.json();
      })
      .then(function (payload) {
        if (payload.error) {
          throw new Error(payload.error);
        }

        var datasets = Object.keys(payload.series).map(function (seriesName, index) {
          var colors = colorFor(seriesName, index);
          return {
            label: seriesName,
            data: payload.series[seriesName],
            borderColor: colors.border,
            backgroundColor: colors.background,
            borderWidth: 2,
            fill: false,
            tension: 0.3
          };
        });

        new Chart(ctx, {
          type: 'line',
          data: {
            labels: payload.labels,
            datasets: datasets
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
              mode: 'index',
              intersect: false
            },
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      })
      .catch(function (error) {
        console.error('Unable to load chart data for "' + reportName + '":', error);
      });
  }

  window.renderXlsxChart = renderXlsxChart;
})(window);
