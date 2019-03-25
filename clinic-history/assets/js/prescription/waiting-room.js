const clinicname = Cookies.get('clinicname');
let patients = '';

$(document).ready(function () {
  if(Cookies.get('clinicname') != undefined) {
    getPatientsWaiting();
  }
});
function getPatientsWaiting () {
  const baseUrl = 'https://faas.benandfrank.com/patientwaiting?isAttended=false&temple='+clinicname;
  axios({
    url: baseUrl,
    method: 'get'
  })
  .then(response => {
    console.log(response);
    $('.collection-item').remove();
    patients = response.data.filter(patient => patient.temple == clinicname);
    patients.forEach(patient => {
      let structure = `
        <li class="collection-item" onClick="attendPatient('`+patient.id+`')">
          <div>
            `+patient.name+`
            <a href="#!" class="secondary-content">
              <i class="material-icons">weekend</i>
            </a>
          </div>
        </li>`;
        (!patient.isAttended ? 
          $('.collection').append(structure) :
          ''
        );
    });
  })
  .catch(error => {
    console.log(error);
    M.toast({html: 'No se pueden cargar los datos', classes: 'rounded'});
  });
}
function attendPatient(id) {
  patients.forEach(patient => {
    if (patient.id === id && !patient.isAttended) {
      $('input[name="id_patient"]').val(id);
      $('input[name="customer-email"]').val(patient.email);
      $('label[for="customer-email"]').addClass('active');
      $('input[name="customer-name"]').val(patient.name);
      $('label[for="customer-name"]').addClass('active');
      $('input[name="day"]').val(moment(patient.birthdate).utc().get('date'));
      $('.birthdate .dropdown-content li').removeClass('selected');
      $($('.birthdate .dropdown-content li')[moment(patient.birthdate).utc().get('month')+1]).addClass('selected');
      $('.birthdate .select-dropdown').val($('.birthdate .dropdown-content li')[moment(patient.birthdate).utc().get('month')+1].innerText);
      $('.birthdate .month-select option[value="'+(moment(patient.birthdate).utc().get('month')+1)+'"]').prop('selected', true);
      $('input[name="year"]').val(moment(patient.birthdate).utc().get('year'));
      $('label[for="customer-birthdate"]').addClass('active');
      $('input[name="customer-phone"]').val(patient.phone);
      $('label[for="customer-phone"]').addClass('active');
      $("input[name='visual-fatigue']").prop('checked', patient.visualFatigue);
      $("input[name='bad-distant-vision']").prop('checked', patient.badDistantVision);
      $("input[name='poor-near-vision']").prop('checked', patient.poorNearVision);
      $("input[name='sensitivity-to-sun-light']").prop('checked', patient.sensitivityToSunLight);
      $("input[name='sensitivity-to-artificial-light']").prop('checked', patient.sensitivityToArtificialLight);
      $("input[name='use-frame'][value="+patient.useFrame+"]").prop('checked', true);
      $("input[name='use-contact-lenses'][value="+patient.useContactLenses+"]").prop('checked', true);
      (patient.useContactLenses ? 
        $('.contact-select').show() : 
        $('.contact-select').hide()
      )
      if(patient.useContactLenses) {
        $('.contact-select .dropdown-content li').removeClass('selected').each((index, elem) => {
          if(elem.innerText == patient.contactLensesTime) {
            $(elem).addClass('selected');
            $('.contact-select .select-dropdown').val(elem.innerText);
            $('.contact-lenses-time option[value="'+elem.innerText+'"]').prop('selected', true)
          }
        });
      }
      $('.last-exam-select .dropdown-content li').removeClass('selected').each((index, elem) => {
        if(elem.innerText.toLowerCase() == patient.lastExam) {
          $(elem).addClass('selected');
          $('.last-exam-select .select-dropdown').val(elem.innerText);
          $('.last-exam option[value="'+elem.innerText.toLowerCase()+'"]').prop('selected', true);
        }
      });

      // Do You suffer from any disease?
      $("input[name='have-diabetes'][value="+(patient.haveDiabetes == 1 ? true : false)+"]").prop('checked', true);
      if(patient.haveDiabetes) {
        $('.treatment-input').show();
        $('input[name="diabetes-treatment"]').val(patient.diabetesTreatment);
        $('.treatment-input label').addClass('active');
      }
      $("input[name='have-hypertension'][value="+(patient.haveHypertension == 1 ? true : false)+"]").prop('checked', true);
      $("input[name='ocular-surgery'][value="+patient.ocularSurgery+"]").prop('checked', true);
    }
  });
  $('.patientwaiting').hide();
  $('.form-receta').show();
  updatePatient();
}

function updatePatient () {
  let idPatient = $("input[name='id_patient']").val();
  const baseUrl = 'https://faas.benandfrank.com/patientwaiting';
  axios({
    url: baseUrl+'/'+idPatient,
    method: 'put',
    data: {
      isAttended: true
    }
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
}