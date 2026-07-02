# Copilot Instructions for this repository

## What this is

This is the **`src`-equivalent folder** of a BootstrapDash "Purple Admin" static HTML/CSS/JS dashboard
template, served locally via DDEV (PHP/nginx-fpm, see `.ddev/config.yaml`). There is no backend
application code, no `package.json`, and no test suite in this folder — it is pure static markup,
Sass, and vanilla JS, built with Gulp.

## Build tooling caveat

`gulpfile.js` and `gulp-tasks/*.js` reference `../node_modules` and `../dist` — meaning this folder
is designed to sit as a sibling of a `package.json`/`node_modules` in a **parent** project directory
(per `docs/documentation.html`'s "Getting started" section). That parent scaffold is not present in
this checkout, so Gulp tasks (`gulp serve`, `gulp build`, `bundleVendors`, etc.) **will not run as-is**
until a parent `package.json` with the required devDependencies (gulp, browser-sync, gulp-sass, sass,
gulp-replace, gulp-inject, gulp-inject-partials, gulp-prettify, gulp-concat, del, merge-stream,
require-dir, jquery, bootstrap, chart.js, select2, etc.) is installed one level up. If asked to add
build tooling, recreate that parent `package.json` rather than moving these gulp tasks.

Key Gulp tasks (once dependencies exist):
- `gulp sass` — compiles `assets/scss/**/*.scss` → `assets/css/` with sourcemaps.
- `gulp serve` — runs `sass`, then serves `../dist` via browser-sync on port 3000, watching scss/js/html.
- `gulp build` — copies `assets/`, `index.html`, `pages/`, `docs/` into `../dist`, then rewrites asset
  paths for the flattened dist structure (`replacePaths` task).
- `gulp inject` — runs `injectPartial` (inlines `partials/_navbar.html`, `_sidebar.html`, `_footer.html`
  into pages between `<!-- partial:... -->` / `<!-- endpartial -->` markers via gulp-inject-partials),
  then `injectAssets` (injects vendor CSS/JS references between `<!-- inject:... -->` /
  `<!-- endinject -->` comments), then `html-beautify`, then `replacePath` (fixes up relative paths for
  the injected content).
- `gulp bundleVendors` — cleans `assets/vendors/` and repopulates it by copying specific files out of
  `../node_modules` (see `gulp-tasks/vendors.js` for the exact file list). Use this after adding/updating
  a 3rd-party JS/CSS package to the parent `node_modules`.

There is no lint or test command in this repo — don't invent one.

## Architecture / page composition

- `index.html` is the dashboard homepage; `pages/<category>/<name>.html` holds every other page
  (categories: `charts`, `forms`, `icons`, `samples`, `tables`, `ui-features`).
- Every top-level page repeats the same shell: navbar, sidebar, content, footer. In the **source of
  truth** these come from `partials/_navbar.html`, `partials/_sidebar.html`, `partials/_footer.html`,
  referenced via `<!-- partial:partials/_navbar.html -->...<!-- endpartial -->` comment markers and
  inlined into each page by `gulp inject`. When editing shared nav/sidebar/footer markup, **edit the
  partial file**, not the inlined copy inside an individual page — direct edits inside a page's
  `<!-- partial -->` block get overwritten the next time `gulp inject` runs.
- `pages/**/*.html` link to shared assets using relative paths one directory deeper than `index.html`
  (e.g. `../../assets/...`, `../../pages/...`, `../../index.html`) because they live two levels under
  the project root. Keep this depth convention when adding new pages under `pages/<category>/`.
- Vendor CSS/JS (`assets/vendors/**`) is generated output — treat it as build output copied from
  `node_modules`, not hand-edited source. Custom app code lives in `assets/js/*.js` and
  `assets/scss/**/*.scss`.
- `assets/js/dashboard.js` and `assets/js/dashboard-dark.js` are separate chart-config scripts for the
  light and dark theme variants of the demo dashboard charts — keep both in sync when changing the
  dashboard's chart data/config.
- `assets/scss/style.scss` is the Sass entry point that pulls in `_variables.scss`, `_layouts.scss`,
  `_navbar.scss`, `_sidebar.scss`, plus the `light/`, `shared/`, and `vertical/` partial directories.
  Compiled output goes to `assets/css/style.css` (never hand-edit compiled CSS).

## DDEV environment

`.ddev/config.yaml` defines a `php` project type (PHP 8.4, nginx-fpm, MariaDB) named `dashboard`.
Since this template is static HTML with no PHP application code, DDEV here is only serving the static
files — there's no framework-specific routing, migrations, or artisan/drush-style CLI to worry about.
