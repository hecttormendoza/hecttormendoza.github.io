$(document).ready(function () {

  // Listener for set two decimals
  $('.autorrefractometro input').on('blur', function () {
    // selfrefractometer-right-sphere
    if ($(this).attr('name').indexOf('-axe') < 0) {
      setTwoNumberDecimal(this);
    }
  });
  $('.lensometria input').on('blur', function () {
    if ($(this).attr('name').indexOf('-axe') < 0) {
      setTwoNumberDecimal(this);
    }
  });
  $('.rx-final input').on('blur', function () {
    if ($(this).attr('name').indexOf('-axe') < 0) {
      setTwoNumberDecimal(this);
    }
  });

  // Listener for autorrefractometro axe
  $('input[name="cilindro_derecho_autorrefractometro"]').on('input', function () {
    if ($('input[name="cilindro_derecho_autorrefractometro"]').val() != 0 && $('input[name=eje_derecho_autorrefractometro]').val() == "") {
      $('input[name=eje_derecho_autorrefractometro]').prop('required', true);
      $('input[name=eje_derecho_autorrefractometro]').addClass('validate invalid');
    } else {
      $('input[name=eje_derecho_autorrefractometro]').prop('required', false);
      $('input[name=eje_derecho_autorrefractometro]').removeClass('validate invalid');
    }

    if ($('input[name="cilindro_derecho_autorrefractometro"]').val() == 0 || $('input[name="cilindro_derecho_autorrefractometro"]').val() == 0.00) {
      $('input[name=eje_derecho_autorrefractometro]').val('');
    }
  });
});

function changeView (goto) {
  if (goto == 'patientwaiting') {
    $('.form-receta').hide();
    $('.patientwaiting').show();
    getPatientsWaiting();
  } else {
    $('.patientwaiting').hide();
    $('.form-receta').show();
  }

  $('#form_add').trigger("reset");
  $('#form_mirror').trigger("reset");
  $('#form-receta').trigger("reset");
  $('.sidenav').sidenav('close');
  /**
 * Default data for prescriptioin
 */
  $("input[name='prescription-date']").val(moment().format("DD/MM/YYYY"));
  $('label[for="prescription-date"]').addClass('active');
  $("input[name='optometrist']").val(Cookies.get('username'));
  $('label[for="optometrist"]').addClass('active');
}

// Function to display mirror prescription
function sendPrescription () {
  const data = getData();
  axios({
    url: 'https://backend.benandfrank.com/api.php/api/v1/recetas-clinicas',
    method: 'post',
    data: getData()
  })
  .then(response => {
    EmailPrescription.sendToPatient();
    EmailPrescription.sendToUs();
  })
  .catch(error => {
    console.log(error);
    M.toast({html: 'Error al enviar receta', classes: 'rounded'});
    $('button[name="send-prescription"]').prop('disabled', false);
  });
}

// Set value of input to 2 decimals
function setTwoNumberDecimal(obj) {
  obj.value = parseFloat(obj.value).toFixed(2);
  if (!$(obj)[0].validity.valid) {
    $(obj).addClass('bad_parameter');
  } else {
    $(obj).removeClass('bad_parameter');
  }
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut();
  Cookies.remove('username');
  Cookies.remove('useremail');
  Cookies.remove('clinicname');
  Cookies.remove('userimage');
  window.location.href = '/templos_v2';
}
