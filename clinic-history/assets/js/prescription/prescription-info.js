function getData () {
  /**
   * Information provided by the patient
   * 
   * customerEmail: Selected email for prescription (string)
   * customerName: Name of the patient (string)
   * customerBirthdate: Birth Date selected by the patient (date)
   * customerPhonenumber: Phone number provided by the patient (string)
   * 
   * Do you have any discomfort in the eyes? (Checkboxes)
   * 
   * visualFatigue: Visual fatigue when working with the computer(bool)
   * badDistantVision: Bad distant vision(bool)
   * poorNearVision: Poor near vision(bool)
   * sensitivityToSunLight: Sensitivity to sunlight(bool)
   * sensitivityToArtificialLight: Sensitivity to artificial light(bool)
   * 
   * Do you currently use lenses? (True or Not answers)
   * 
   * useFrame: The patient wears glasses?(Yes/No)(bool)
   * useContactLenses: The patient wears contact lenses?(Yes/No)(bool)
   * contactLensesTime: How long do you use contact lenses per day?(string)
   * lastExam2: When was the last time you did an exam?(string)
   * 
   * Do you suffer from any disease?
   * 
   * haveDiabetes: Does the patient have diabetes?(Yes/No)(bool)
   * diabetesTreatment: If the patient has diabetes, indicate the treatment(string)
   * haveHypertension: Does the patient suffer from hypertension?(Yes/No)(bool)
   * ocularSurgery: The patient has had ocular surgery?(Yes/No)(bool)
   * 
   * 
   * Information provided by the optometrist
   * 
   * prescriptionDate: Date of the prescription(date)
   * optometrist: Name of the optometrist, it's obtained from cookies(string)
   * isGuarantee: This prescription is a guarantee?(Yes/No)(bool)
   * 
   * Self-refractometer
   * 
   * Right eye: (parameterName: Description (min, max, step))
   * selfrefractometerRightSphere: Sphere value(-15, 15, 0.25)(float)
   * selfrefractometerRightCylinder: Cylinder value(-15, 0, 0.25)(float)
   * selfrefractometerRightAxe: Axe value(0, 180, 1)(float)
   * selfrefractometerRightKeratometry: Keratometry value(36, 56, 0.25)(string)
   * selfrefractometerRightKeratometryAxe: Keratometry axe value(0, 180, 1)(string)
   * 
   * Left eye: (parameterName: Description (min, max, step))
   * selfrefractometerLeftSphere: Sphere value(-15, 15, 0.25)(float)
   * selfrefractometerLeftCylinder: Cylinder value(-15, 0, 0.25)(float)
   * selfrefractometerLeftAxe: Axe value(0, 180, 1)(float)
   * selfrefractometerLeftKeratometry: Keratometry value(36, 56, 0.25)(float)
   * selfrefractometerLeftKeratometryAxe: Keratometry axe value(0, 180, 1)(integer)
   * 
   * Lensometry
   * 
   * Right eye: (parameterName: Description (min, max, step)/(select))
   * lensometryRightAvSc: AV S/C value(select)(string)
   * lensometryRightSphere: Sphere value(-15, 15, 0.25)(float)
   * lensometryRightCylinder: Cylinder value(-15, 0, 0.25)(float)
   * lensometryRightAxe: Axe value(0, 180, 1)(float)
   * lensometryRightAdd: Addition value(0, 4, 0.25)(float)
   * lensometryRightAvCc: AV C/C value(select)(string)
   * lensometryRightDnp: DNP value(23, 40, 0.5)(float)
   * 
   * Left eye: (parameterName: Description (min, max, step)/(select))
   * lensometryLeftAvSc: AV value(select)(string)
   * lensometryLeftSphere: Sphere value(-15, 15, 0.25)(float)
   * lensometryLeftCylinder: Cylinder value(-15, 0, 0.25)(float)
   * lensometryLeftAxe: Axe value(0, 180, 1)(float)
   * lensometryLeftAdd: Addition value(0, 4, 0.25)(float)
   * lensometryLeftAvCc: AV C/C value(select)(string)
   * lensometryLeftDnp: DNP value(23, 40, 0.5)(float)
   * 
   * RX Final
   * 
   * Right eye: (parameterName: Description (min, max, step)/(select))
   * rxRightSphere: Sphere value(-15, 15, 0.25)(float)
   * rxRightCylinder:Cylinder value(-15, 0, 0.25)(float)
   * rxRightAxe: Axe value(0, 180, 1)(float)
   * rxRightAdd: Addition value(0, 4, 0.25)(float)
   * rxRightAvCcFar: AV C/C Far value(select)(string)
   * rxAvCcClose: AV C/C Close value(select)(string)
   * rxRightDNP: DNP value(23, 40, 0.5)(float)
   * 
   * Left eye: (parameterName: Description (min, max, step)/(select))
   * rxLeftSphere: Sphere value(-15, 15, 0.25)(float)
   * rxLeftCylinder: Cylinder value(-15, 0, 0.25)(float)
   * rxLeftAxe: Axe value(0, 180, 1)(float)
   * rxLeftAdd: Addition value(0, 4, 0.25)(float)
   * rxLeftAvCcFar: CV far value(select)(string)
   * rxLeftDnp: DNP value(23, 40, 0.5)(float)
   * 
   * height: This field is only displayed if the recipe has an addition(float)
   * frames: Choose the model that the customer will buy(string)
   * prescriptionType: Choose the type of prescription to be made(string)
   * additionalNotes: Field to put additional notes on the prescription(string)
   * 
   * 
   */

  let data = {
    store: Cookies.get('clinicname'),
    customerEmail: $('input[name="customer-email"]').val(),
    customerName: $('input[name="customer-name"]').val(),
    customerBirthdate: moment(new Date($('.month-select option:selected').val()+'/'+$('input[name="day"]').val()+'/'+$('input[name="year"]').val())).format('MM/DD/YYYY'),
    customerPhonenumber: $('input[name="customer-phone"]').val(),
    visualFatigue: ($('input[name="visual-fatigue"]').is(':checked') ? 1 : 0),
    badDistantVision: ($('input[name="bad-distant-vision"]').is(':checked') ? 1 : 0),
    poorNearVision: ($('input[name="poor-near-vision"]').is(':checked') ? 1 : 0),
    sensitivityToSunLight: ($('input[name="sensitivity-to-sun-light"]').is(':checked') ? 1 : 0),
    sensitivityToArtificialLight: ($('input[name="sensitivity-to-artificial-light"]').is(':checked') ? 1 : 0),
    useFrame: ($('input[name="use-frame"]:checked').val() == "true" ? 1 : 0),
    useContactLenses: ($('input[name="use-contact-lenses"]:checked').val() == "true" ? 1 : 0),
    contactLensesTime: $('.contact-lenses-time option:selected').val(),
    lastExam2: $('.last-exam option:selected').val(),
    haveDiabetes: ($('input[name="have-diabetes"]:checked').val() == "true" ? 1 : 0),
    treatment: $('input[name="diabetes-treatment"]').val(),
    haveHypertension: ($('input[name="have-hypertension"]:checked').val() == "true" ? 1 : 0),
    ocularSurgery: $('input[name="ocular-surgery"]:checked').val(),
    prescriptionDate: $("input[name='prescription-date']").val(),
    optometrist: Cookies.get('username'),
    isGuarantee: $('input[name="is-guarantee"]:checked').val(),
    selfrefractometerRightSphere: $('input[name="selfrefractometer-right-sphere"]').val(),
    selfrefractometerRightCylinder: $('input[name="selfrefractometer-right-cylinder"]').val(),
    selfrefractometerRightAxe: $('input[name="selfrefractometer-right-axe"]').val(),
    selfrefractometerRightKeratometry: $('input[name="selfrefractometer-right-keratometry-one"]').val()+'/'+$('input[name="selfrefractometer-right-keratometry-two"]').val(),
    selfrefractometerRightKeratometryAxe: $('input[name="selfrefractometer-right-keratometry-axe-one"]').val()+'/'+$('input[name="selfrefractometer-right-keratometry-axe-two"]').val(),
    selfrefractometerLeftSphere: $('input[name="selfrefractometer-left-sphere"]').val(),
    selfrefractometerLeftCylinder: $('input[name="selfrefractometer-left-cylinder"]').val(),
    selfrefractometerLeftAxe: $('input[name="selfrefractometer-left-axe"]').val(),
    selfrefractometerLeftKeratometry: $('input[name="selfrefractometer-left-keratometry-one"]').val()+'/'+$('input[name="selfrefractometer-left-keratometry-two"]').val(),
    selfrefractometerLeftKeratometryAxe: $('input[name="selfrefractometer-left-keratometry-axe-one"]').val()+'/'+$('input[name="selfrefractometer-left-keratometry-axe-two"]').val(),
    lensometryRightAvSc: '20/'+$('.lensometry-right-av-sc option:selected').val(),
    lensometryRightSphere: $('input[name="lensometry-right-sphere"]').val(),
    lensometryRightCylinder: $('input[name="lensometry-right-cylinder"]').val(),
    lensometryRightAxe: $('input[name="lensometry-right-axe"]').val(),
    lensometryRightAdd: $('input[name="lensometry-right-add"]').val(),
    lensometryRightAvCc: '20/'+$('.lensometry-right-av-cc option:selected').val(),
    lensometryRightDnp: $('input[name="lensometry-right-dnp"]').val(),
    lensometryLeftAvSc: '20/'+$('.lensometry-left-av-sc option:selected').val(),
    lensometryLeftSphere: $('input[name="lensometry-left-sphere"]').val(),
    lensometryLeftCylinder: $('input[name="lensometry-left-cylinder"]').val(),
    lensometryLeftAxe: $('input[name="lensometry-left-axe"]').val(),
    lensometryLeftAdd: $('input[name="lensometry-left-add"]').val(),
    lensometryLeftAvCc: '20/'+$('.lensometry-left-av-cc option:selected').val(),
    lensometryLeftDnp: $('input[name="lensometry-left-dnp"]').val(),
    rxRightSphere: $('input[name="rx-right-sphere"]').val(),
    rxRightCylinder: $('input[name="rx-right-cylinder"]').val(),
    rxRightAxe: $('input[name="rx-right-axe"]').val(),
    rxRightAdd: $('input[name="rx-right-add"]').val(),
    rxRightAvCcFar: '20/'+$('.rx-right-av-cc-far option:selected').val(),
    rxAvCcClose: '20/'+$('.rx-av-cc-close option:selected').val(),
    rxRightDnp: $('input[name="rx-right-dnp"]').val(),
    rxLeftSphere: $('input[name="rx-left-sphere"]').val(),
    rxLeftCylinder: $('input[name="rx-left-cylinder"]').val(),
    rxLeftAxe: $('input[name="rx-left-axe"]').val(),
    rxLeftAdd: $('input[name="rx-left-add"]').val(),
    rxLeftAvCcFar: '20/'+$('.rx-left-av-cc-far option:selected').val(),
    rxLeftDnp: $('input[name="rx-left-dnp"').val(),
    height: $('input[name="height"]').val(),
    frames: $('.frames option:selected').val(),
    prescriptionType: $('.prescription-type option:selected').val(),
    additionalNotes: $('.additional-notes').val(),
  };

  return data;
}