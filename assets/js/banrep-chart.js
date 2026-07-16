$(function () {
  /* Banrep page chart
   * ------------------
   * Bot traffic data loaded live from reports/banrep.xlsx via
   * api/xlsx-data.php (see assets/js/xlsx-chart.js).
   */
  'use strict';

  renderXlsxChart('banrepChart', 'banrep');
});
