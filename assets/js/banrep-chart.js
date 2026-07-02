$(function () {
  /* Banrep page chart
   * ------------------
   * Bot traffic data sourced from reports/banrep.xlsx
   */
  'use strict';

  var ctx = document.getElementById('banrepChart');
  if (!ctx) {
    return;
  }

  var banrepData = {
    labels: [
      '2026-06-03', '2026-06-04', '2026-06-05', '2026-06-06', '2026-06-07',
      '2026-06-08', '2026-06-09', '2026-06-10', '2026-06-11', '2026-06-12',
      '2026-06-13', '2026-06-14', '2026-06-15', '2026-06-16', '2026-06-17',
      '2026-06-18', '2026-06-19', '2026-06-20', '2026-06-21', '2026-06-22',
      '2026-06-23', '2026-06-24', '2026-06-25', '2026-06-26', '2026-06-27',
      '2026-06-28', '2026-06-29', '2026-06-30', '2026-07-01'
    ],
    datasets: [
      {
        label: 'GPTBot',
        data: [488, 770, 770, 923, 56, 102, 1415, 19890, 26704, 29937, 31036, 1595, 9020, 29765, 33115, 36890, 39235, 43204, 3556, 8490, 21937, 28919, 38219, 39241, 39955, 2225, 3896, 6462, 8079],
        borderColor: '#587ce4',
        backgroundColor: 'rgba(88, 124, 228, 0.1)',
        borderWidth: 2,
        fill: false,
        tension: 0.3
      },
      {
        label: 'OAI-SearchBot',
        data: [4033, 5525, 5525, 6233, 729, 1855, 3552, 4615, 5671, 7463, 8124, 601, 1240, 2924, 4607, 5640, 6626, 7594, 787, 2261, 4297, 6563, 7716, 8475, 9973, 1171, 2544, 3907, 5711],
        borderColor: '#ede190',
        backgroundColor: 'rgba(237, 225, 144, 0.1)',
        borderWidth: 2,
        fill: false,
        tension: 0.3
      },
      {
        label: 'PerplexityBot',
        data: [1662, 1893, 1893, 2083, 161, 372, 660, 1323, 1576, 1843, 2158, 205, 472, 895, 1142, 1347, 1699, 1930, 238, 527, 743, 953, 1250, 1511, 1711, 185, 1060, 1281, 1496],
        borderColor: '#4bc0c0',
        backgroundColor: 'rgba(75, 192, 192, 0.1)',
        borderWidth: 2,
        fill: false,
        tension: 0.3
      }
    ]
  };

  new Chart(ctx, {
    type: 'line',
    data: banrepData,
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
