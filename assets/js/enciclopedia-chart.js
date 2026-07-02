$(function () {
  /* Enciclopedia page chart
   * ------------------------
   * Bot traffic data sourced from reports/enciclopedia.xlsx
   */
  'use strict';

  var ctx = document.getElementById('enciclopediaChart');
  if (!ctx) {
    return;
  }

  var enciclopediaData = {
    labels: [
      '2026-06-23', '2026-06-24', '2026-06-25', '2026-06-26', '2026-06-27',
      '2026-06-28', '2026-06-29', '2026-06-30', '2026-07-01'
    ],
    datasets: [
      {
        label: 'GPTBot',
        data: [8339, 8223, 8401, 8451, 9593, 9492, 10307, 8946, 8087],
        borderColor: '#587ce4',
        backgroundColor: 'rgba(88, 124, 228, 0.1)',
        borderWidth: 2,
        fill: false,
        tension: 0.3
      },
      {
        label: 'OAI-SearchBot',
        data: [1485, 1459, 1138, 671, 622, 2715, 1152, 842, 864],
        borderColor: '#ede190',
        backgroundColor: 'rgba(237, 225, 144, 0.1)',
        borderWidth: 2,
        fill: false,
        tension: 0.3
      },
      {
        label: 'PerplexityBot',
        data: [301, 301, 224, 217, 180, 4083, 294, 303, 173],
        borderColor: '#4bc0c0',
        backgroundColor: 'rgba(75, 192, 192, 0.1)',
        borderWidth: 2,
        fill: false,
        tension: 0.3
      },
      {
        label: 'AzureAI-SearchBot',
        data: [2, 0, 2, 0, 0, 0, 0, 3, 0],
        borderColor: '#ff6384',
        backgroundColor: 'rgba(255, 99, 132, 0.1)',
        borderWidth: 2,
        fill: false,
        tension: 0.3
      },
      {
        label: 'DuckAssistBot',
        data: [17, 18, 15, 27, 16, 15, 22, 29, 22],
        borderColor: '#9966ff',
        backgroundColor: 'rgba(153, 102, 255, 0.1)',
        borderWidth: 2,
        fill: false,
        tension: 0.3
      }
    ]
  };

  new Chart(ctx, {
    type: 'line',
    data: enciclopediaData,
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
