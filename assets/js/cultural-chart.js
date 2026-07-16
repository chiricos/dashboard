$(function () {
  /* Cultural page chart
   * --------------------
   * Bot traffic data loaded live from reports/cultural.xlsx via
   * api/xlsx-data.php (see assets/js/xlsx-chart.js).
   */
  'use strict';

  renderXlsxChart('culturalChart', 'cultural');
});
