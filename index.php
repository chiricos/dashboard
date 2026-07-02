<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Purple Admin</title>
    <!-- plugins:css -->
    <link rel="stylesheet" href="assets/vendors/mdi/css/materialdesignicons.min.css">
    <link rel="stylesheet" href="assets/vendors/ti-icons/css/themify-icons.css">
    <link rel="stylesheet" href="assets/vendors/css/vendor.bundle.base.css">
    <link rel="stylesheet" href="assets/vendors/font-awesome/css/font-awesome.min.css">
    <!-- endinject -->
    <!-- Plugin css for this page -->
    <link rel="stylesheet" href="assets/vendors/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css">
    <!-- End plugin css for this page -->
    <!-- inject:css -->
    <!-- endinject -->
    <!-- Layout styles -->
    <link rel="stylesheet" href="assets/css/style.css">
    <!-- End layout styles -->
    <link rel="shortcut icon" href="assets/images/favicon.png" />
  </head>
  <body>
    <div class="container-scroller">
      <div class="row p-0 m-0 proBanner" id="proBanner">
        <div class="col-md-12 p-0 m-0">
          <div class="card-body card-body-padding d-flex align-items-center justify-content-between">
            <div class="ps-lg-3">
              <div class="d-flex align-items-center justify-content-between">
                <p class="mb-0 font-weight-medium me-3 buy-now-text">Free 24/7 customer support, updates, and more with this template!</p>
                <a href="https://www.bootstrapdash.com/product/purple-bootstrap-admin-template/" target="_blank" class="btn me-2 buy-now-btn border-0">Buy Now</a>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <a href="https://www.bootstrapdash.com/product/purple-bootstrap-admin-template/"><i class="mdi mdi-home me-3 text-white"></i></a>
              <button id="bannerClose" class="btn border-0 p-0">
                <i class="mdi mdi-close text-white mr-0"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <?php include $_SERVER['DOCUMENT_ROOT'] . '/partials/navbar.php'; ?>
      <div class="container-fluid page-body-wrapper">
        <?php include $_SERVER['DOCUMENT_ROOT'] . '/partials/sidebar.php'; ?>
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="page-header">
              <h3 class="page-title">
                <span class="page-title-icon bg-gradient-primary text-white me-2">
                  <i class="mdi mdi-home"></i>
                </span> Dashboard
              </h3>
              <nav aria-label="breadcrumb">
                <ul class="breadcrumb">
                  <li class="breadcrumb-item active" aria-current="page">
                    <span></span>Overview <i class="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="row">
              <div class="col-md-3 stretch-card grid-margin">
                <div class="card bg-gradient-danger card-img-holder text-white">
                  <div class="card-body">
                    <img src="assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
                    <h4 class="font-weight-normal mb-3">Banrep <i class="mdi mdi-chart-line mdi-24px float-end"></i>
                    </h4>
                    <h2 class="mb-2">676,125</h2>
                    <h6 class="card-text">Eventos bot · 2026-06-03 a 2026-07-01</h6>
                    <a href="pages/charts/banrep.php" class="text-white">Ver detalle <i class="mdi mdi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-md-3 stretch-card grid-margin">
                <div class="card bg-gradient-info card-img-holder text-white">
                  <div class="card-body">
                    <img src="assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
                    <h4 class="font-weight-normal mb-3">Cultural <i class="mdi mdi-chart-line mdi-24px float-end"></i>
                    </h4>
                    <h2 class="mb-2">36,301</h2>
                    <h6 class="card-text">Eventos bot · 2026-06-16 a 2026-07-01</h6>
                    <a href="pages/charts/cultural.php" class="text-white">Ver detalle <i class="mdi mdi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-md-3 stretch-card grid-margin">
                <div class="card bg-gradient-success card-img-holder text-white">
                  <div class="card-body">
                    <img src="assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
                    <h4 class="font-weight-normal mb-3">Enciclopedia <i class="mdi mdi-chart-line mdi-24px float-end"></i>
                    </h4>
                    <h2 class="mb-2">97,051</h2>
                    <h6 class="card-text">Eventos bot · 2026-06-23 a 2026-07-01</h6>
                    <a href="pages/charts/enciclopedia.php" class="text-white">Ver detalle <i class="mdi mdi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-md-3 stretch-card grid-margin">
                <div class="card bg-gradient-warning card-img-holder text-white">
                  <div class="card-body">
                    <img src="assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
                    <h4 class="font-weight-normal mb-3">Investigación <i class="mdi mdi-chart-line mdi-24px float-end"></i>
                    </h4>
                    <h2 class="mb-2">—</h2>
                    <h6 class="card-text">Sin datos disponibles aún</h6>
                    <a href="pages/charts/investigacion.php" class="text-white">Ver detalle <i class="mdi mdi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 grid-margin">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Resumen de Reportes</h4>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th> Reporte </th>
                            <th> Bot principal </th>
                            <th> Total eventos </th>
                            <th> Periodo </th>
                            <th> Estado </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td> Banrep </td>
                            <td> GPTBot (505,894) </td>
                            <td> 676,125 </td>
                            <td> 2026-06-03 a 2026-07-01 </td>
                            <td>
                              <label class="badge badge-gradient-success">ACTUALIZADO</label>
                            </td>
                          </tr>
                          <tr>
                            <td> Cultural </td>
                            <td> GPTBot (19,084) </td>
                            <td> 36,301 </td>
                            <td> 2026-06-16 a 2026-07-01 </td>
                            <td>
                              <label class="badge badge-gradient-success">ACTUALIZADO</label>
                            </td>
                          </tr>
                          <tr>
                            <td> Enciclopedia </td>
                            <td> GPTBot (79,839) </td>
                            <td> 97,051 </td>
                            <td> 2026-06-23 a 2026-07-01 </td>
                            <td>
                              <label class="badge badge-gradient-success">ACTUALIZADO</label>
                            </td>
                          </tr>
                          <tr>
                            <td> Investigación </td>
                            <td> — </td>
                            <td> — </td>
                            <td> — </td>
                            <td>
                              <label class="badge badge-gradient-warning">PENDIENTE</label>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          
          </div>
          <!-- content-wrapper ends -->
          <?php include $_SERVER['DOCUMENT_ROOT'] . '/partials/footer.php'; ?>
        </div>
        <!-- main-panel ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
    <!-- container-scroller -->
    <!-- plugins:js -->
    <script src="assets/vendors/js/vendor.bundle.base.js"></script>
    <!-- endinject -->
    <!-- Plugin js for this page -->
    <script src="assets/vendors/chart.js/chart.umd.js"></script>
    <script src="assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js"></script>
    <!-- End plugin js for this page -->
    <!-- inject:js -->
    <script src="assets/js/off-canvas.js"></script>
    <script src="assets/js/misc.js"></script>
    <script src="assets/js/settings.js"></script>
    <script src="assets/js/todolist.js"></script>
    <script src="assets/js/jquery.cookie.js"></script>
    <!-- endinject -->
    <!-- Custom js for this page -->
    <script src="assets/js/dashboard.js"></script>
    <!-- End custom js for this page -->
  </body>
</html>