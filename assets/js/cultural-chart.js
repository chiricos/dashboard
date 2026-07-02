$(function () {
  /* Cultural page chart
   * --------------------
   * Bot traffic data sourced from reports/cultural.xlsx
   */
  'use strict';

  var ctx = document.getElementById('culturalChart');
  if (!ctx) {
    return;
  }

  var culturalData = {
    labels: [
      '2026-06-16', '2026-06-17', '2026-06-18', '2026-06-19', '2026-06-20',
      '2026-06-21', '2026-06-22', '2026-06-23', '2026-06-24', '2026-06-25',
      '2026-06-26', '2026-06-27', '2026-06-28', '2026-06-29', '2026-06-30',
      '2026-07-01'
    ],
    datasets: [
      {
        label: 'GPTBot',
        data: [1313, 958, 1285, 1067, 666, 929, 803, 862, 1358, 1249, 631, 646, 1037, 860, 1488, 3932],
        borderColor: '#587ce4',
        backgroundColor: 'rgba(88, 124, 228, 0.1)',
        borderWidth: 2,
        fill: false,
        tension: 0.3
      },
      {
        label: 'OAI-SearchBot',
        data: [658, 481, 687, 611, 354, 417, 404, 578, 1006, 898, 699, 482, 904, 659, 697, 519],
        borderColor: '#ede190',
        backgroundColor: 'rgba(237, 225, 144, 0.1)',
        borderWidth: 2,
        fill: false,
        tension: 0.3
      },
      {
        label: 'PerplexityBot',
        data: [97, 78, 71, 70, 59, 50, 70, 70, 59, 86, 108, 52, 39, 64, 68, 115],
        borderColor: '#4bc0c0',
        backgroundColor: 'rgba(75, 192, 192, 0.1)',
        borderWidth: 2,
        fill: false,
        tension: 0.3
      },
      {
        label: 'AzureAI-SearchBot',
        data: [2, 8, 2, 24, 0, 8, 11, 2, 8, 2, 8, 3, 0, 0, 2, 4],
        borderColor: '#ff6384',
        backgroundColor: 'rgba(255, 99, 132, 0.1)',
        borderWidth: 2,
        fill: false,
        tension: 0.3
      },
      {
        label: 'DuckAssistBot',
        data: [382, 279, 2978, 1199, 448, 33, 13, 29, 36, 89, 189, 83, 51, 41, 20, 53],
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
    data: culturalData,
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
