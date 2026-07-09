$(function () {
  /* Investigación page chart
   * ------------------------
   * Bot traffic data sourced from reports/investiga.xlsx
   */
  'use strict';

  var ctx = document.getElementById('investigacionChart');
  if (!ctx) {
    return;
  }

  var investigacionData = {
    labels: [
      '2026-06-25', '2026-06-26', '2026-06-27', '2026-06-28', '2026-06-29',
      '2026-06-30', '2026-07-01', '2026-07-02', '2026-07-03', '2026-07-04',
      '2026-07-05', '2026-07-06', '2026-07-07', '2026-07-08', '2026-07-09'
    ],
    datasets: [
      {
        label: 'GPTBot',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 68, 76, 52, 203],
        borderColor: '#587ce4',
        backgroundColor: 'rgba(88, 124, 228, 0.1)',
        borderWidth: 2,
        fill: false,
        tension: 0.3
      },
      {
        label: 'OAI-SearchBot',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 143, 140, 131, 381],
        borderColor: '#ede190',
        backgroundColor: 'rgba(237, 225, 144, 0.1)',
        borderWidth: 2,
        fill: false,
        tension: 0.3
      },
      {
        label: 'PerplexityBot',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 10, 15, 14, 8],
        borderColor: '#4bc0c0',
        backgroundColor: 'rgba(75, 192, 192, 0.1)',
        borderWidth: 2,
        fill: false,
        tension: 0.3
      },
      {
        label: 'ClaudeBot',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 541, 525, 185, 241, 373],
        borderColor: '#e6852f',
        backgroundColor: 'rgba(230, 133, 47, 0.1)',
        borderWidth: 2,
        fill: false,
        tension: 0.3
      },
      {
        label: 'ChatGPT-User',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 336, 336, 276, 396, 248],
        borderColor: '#8e5ae2',
        backgroundColor: 'rgba(142, 90, 226, 0.1)',
        borderWidth: 2,
        fill: false,
        tension: 0.3
      },
      {
        label: 'Google-Extended',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: '#e2586b',
        backgroundColor: 'rgba(226, 88, 107, 0.1)',
        borderWidth: 2,
        fill: false,
        tension: 0.3
      }
    ]
  };

  new Chart(ctx, {
    type: 'line',
    data: investigacionData,
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
});
