$(document).ready(function () {
  // Selfrefractometer
  $('input[name="show-selfrefractometer"]').on('change', function () {
    (
      $(this).prop('checked') ?
      $('input[name="selfrefractometer-right-sphere"], input[name="selfrefractometer-right-cylinder"], input[name="selfrefractometer-right-axe"], input[name="selfrefractometer-left-sphere"], input[name="selfrefractometer-left-cylinder"], input[name="selfrefractometer-left-axe"]').attr('aria-required', "true").prop('required', true) :
      $('input[name="selfrefractometer-right-sphere"], input[name="selfrefractometer-right-cylinder"], input[name="selfrefractometer-right-axe"], input[name="selfrefractometer-left-sphere"], input[name="selfrefractometer-left-cylinder"], input[name="selfrefractometer-left-axe"]').attr('aria-required', "false").prop('required', false)
    )
  });

  // Lensometry
  $('input[name="show-lensometry"]').on('change', function () {
    (
      $(this).prop('checked') ?
      $('input[name="lensometry-right-sphere"], input[name="lensometry-right-cylinder"], input[name="lensometry-right-axe"], input[name="lensometry-right-add"], input[name="lensometry-right-dnp"], input[name="lensometry-left-sphere"], input[name="lensometry-left-cylinder"], input[name="lensometry-left-axe"], input[name="lensometry-left-add"], input[name="lensometry-left-dnp"]').attr('aria-required', 'true').prop('required', true) : 
      $('input[name="lensometry-right-sphere"], input[name="lensometry-right-cylinder"], input[name="lensometry-right-axe"], input[name="lensometry-right-add"], input[name="lensometry-right-dnp"], input[name="lensometry-left-sphere"], input[name="lensometry-left-cylinder"], input[name="lensometry-left-axe"], input[name="lensometry-left-add"], input[name="lensometry-left-dnp"]').attr('aria-required', 'false').prop('required', false)
    )
  });
});