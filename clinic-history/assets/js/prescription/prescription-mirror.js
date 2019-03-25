$(document).ready(() => {
  $('button[name="send-prescription"]').on('click', function (e) {
    e.preventDefault();
    $(this).prop('disabled', true);
    sendPrescription();
  });
});
function mirrorPrescription () {
  const data = getData();
  console.log(data);
  /**
   * Customer personal/medical information
   */
  $('input[name="customer-email-mirror"]').val(data.customerEmail);
  $('input[name="customer-name-mirror"]').val(data.customerName);
  $('input[name="customer-birthdate-mirror"]').val(data.customerBirthdate);
  $('input[name="customer-phone-mirror"]').val(data.customerPhonenumber);

  /**
   * Do you have any discomfort in the eyes?
   */
  $('input[name="visual-fatigue-mirror"]').prop('checked', data.visualFatigue);
  $('input[name="bad-distant-vision-mirror"]').prop('checked', data.badDistantVision);
  $('input[name="poor-near-vision-mirror"]').prop('checked', data.poorNearVision);
  $('input[name="sensitivity-to-sun-light-mirror"]').prop('checked', data.sensitivityToSunLight);
  $('input[name="sensitivity-to-artificial-light-mirror"]').prop('checked', data.sensitivityToArtificialLight);

  /**
   * Do you currently use lenses?
   */
  $("input[name='use-frame-mirror'][value='"+(data.useFrame == 1 ? true : false)+"']").prop('checked', true);
  $("input[name='use-contact-lenses-mirror'][value='"+(data.useContactLenses == 1 ? true : false)+"']").prop('checked', true);
  (data.useContactLenses == 1 ? $('.contact-select-mirror').show() : $('.contact-select-mirror').hide());
  $('input[name="contact-lenses-time-mirror"]').val(data.contactLensesTime);
  $('input[name="last-exam-select-mirror"]').val(data.lastExam2);
  
  /**
   * Do You suffer from any disease?
   */
  $("input[name='have-diabetes-mirror'][value='"+(data.haveDiabetes ? "true" : "false")+"']").prop('checked', true);
  $("input[name='treatment-mirror']").val(data.treatment);
  $("input[name='hypertension-mirror'][value='"+(data.haveHypertension ? "true" : "false")+"']").prop('checked', true);
  $("input[name='ocular-surgery-mirror'][value='"+data.ocularSurgery+"']").prop('checked', true);

  /**
   * Optometrist section
   */
  $("input[name='prescription-date-mirror']").val(data.prescriptionDate);
  $("input[name='optometrist-mirror']").val(data.optometrist);
  $("input[name='is-guarantee-mirror'][value='"+data.isGuarantee+"']").prop('checked', true);

  /**
   * Self-refractometer
   */
  ($('input[name="show-selfrefractometer"]').prop('checked') ? $('.autorrefractometro-mirror').show() : $('.autorrefractometro-mirror').hide())
  /**
   * Right
   */
  $('input[name="selfrefractometer-right-sphere-mirror"]').val(data.selfrefractometerRightSphere);
  $('input[name="selfrefractometer-right-cylinder-mirror"]').val(data.selfrefractometerRightCylinder);
  $('input[name="selfrefractometer-right-axe-mirror"]').val(data.selfrefractometerRightAxe);
  $('input[name="selfrefractometer-right-keratometry-mirror"]').val(data.selfrefractometerRightKeratometry);
  $('input[name="selfrefractometer-right-keratometry-axe-mirror"]').val(data.selfrefractometerRightKeratometryAxe);
  /**
   * Left
   */
  $('input[name="selfrefractometer-left-sphere-mirror"]').val(data.selfrefractometerLeftSphere);
  $('input[name="selfrefractometer-left-cylinder-mirror"]').val(data.selfrefractometerLeftCylinder);
  $('input[name="selfrefractometer-left-axe-mirror"]').val(data.selfrefractometerLeftAxe);
  $('input[name="selfrefractometer-left-keratometry-mirror"]').val(data.selfrefractometerLeftKeratometry);
  $('input[name="selfrefractometer-left-keratometry-axe-mirror"]').val(data.selfrefractometerLeftKeratometryAxe);

  /**
   * Lensometry
   */
  ($('input[name="show-lensometry"]').prop('checked') ? $('.lensometria-mirror').show() : $('.lensometria-mirror').hide())
  /**
   * Right
   */
  $('input[name="lensometry-right-av-sc-mirror"]').val(data.lensometryRightAvSc);
  $('input[name="lensometry-right-sphere-mirror"]').val(data.lensometryRightSphere);
  $('input[name="lensometry-right-cylinder-mirror"]').val(data.lensometryRightCylinder);
  $('input[name="lensometry-right-axe-mirror"]').val(data.lensometryRightAxe);
  $('input[name="lensometry-right-add-mirror"]').val(data.lensometryRightAdd);
  $('input[name="lensometry-right-av-cc-mirror"]').val(data.lensometryRightAvCc);
  $('input[name="lensometry-right-dnp-mirror"]').val(data.lensometryRightDnp);
  /**
   * Left
   */
  $('input[name="lensometry-left-av-sc-mirror"]').val(data.lensometryLeftAvSc);
  $('input[name="lensometry-left-sphere-mirror"]').val(data.lensometryLeftSphere);
  $('input[name="lensometry-left-cylinder-mirror"]').val(data.lensometryLeftCylinder);
  $('input[name="lensometry-left-axe-mirror"]').val(data.lensometryLeftAxe);
  $('input[name="lensometry-left-add-mirror"]').val(data.lensometryLeftAdd);
  $('input[name="lensometry-left-av-cc-mirror"]').val(data.lensometryLeftAvCc);
  $('input[name="lensometry-left-dnp-mirror"]').val(data.lensometryLeftDnp);

  /**
   * Rx Final
   */
  /**
   * Right
   */
  $('input[name="rx-right-sphere-mirror"]').val(data.rxRightSphere);
  $('input[name="rx-right-cylinder-mirror"]').val(data.rxRightCylinder);
  $('input[name="rx-right-axe-mirror"]').val(data.rxRightAxe);
  $('input[name="rx-right-add-mirror"]').val(data.rxRightAdd);
  $('input[name="rx-right-av-cc-far-mirror"]').val(data.rxRightAvCcFar);
  $('input[name="rx-av-cc-close-mirror"]').val(data.rxAvCcClose);
  $('input[name="rx-right-dnp-mirror"]').val(data.rxRightDnp);
  /**
   * Left
   */
  $('input[name="rx-left-sphere-mirror"]').val(data.rxLeftSphere);
  $('input[name="rx-left-cylinder-mirror"]').val(data.rxLeftCylinder);
  $('input[name="rx-left-axe-mirror"]').val(data.rxLeftAxe);
  $('input[name="rx-left-add-mirror"]').val(data.rxLeftAdd);
  $('input[name="rx-left-av-cc-far-mirror"]').val(data.rxLeftAvCcFar);
  $('input[name="rx-left-dnp-mirror"]').val(data.rxLeftDnp);

  /**
   * Other information
   */
  ($('.height-container').css('display') == "block" ? $('.height-container-mirror').show() : $('.height-container-mirror').hide())
  $('input[name="height-mirror"]').val(data.height);
  $('input[name="frames-mirror"]').val(data.frames);
  $('input[name="prescription-type-mirror"]').val(data.prescriptionType);
  $('input[name="additional-notes-mirror"]').val(data.additionalNotes);
}

