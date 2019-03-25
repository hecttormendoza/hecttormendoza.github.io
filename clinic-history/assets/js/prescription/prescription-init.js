$(document).ready(function(){
  /**
   * Initiate autocomplete, collapsible, datepicker, modals and sidenav
   */
  $('.sidenav').sidenav();
  $('.collapsible').collapsible();
  $('input.autocomplete').autocomplete();
  $('#prescriptionModal.modal').modal();
  $('#addCustomerModal.modal').modal();
  $('#selectTemploModal.modal').modal();
  $('#selectTemploModal.modal').modal({
    'dismissible': false
  });

  /**
   * Initiate listeners
   */

  /**
   * Optometrist information
   */
  $('span.name').html(Cookies.get('username'));
  $('span.email').html(Cookies.get('useremail'));
  $('.circle').attr('src', Cookies.get('userimage'));
  
  /**
   * Email input listeners
   */
  $("input[name='customer-email']").on('input', function () {
    const urlSearch = '/clinicas/receta.php?action=getMatches&word=';
    let value_input = $(this).val();

    if (value_input.length === 7) {
      axios.get(urlSearch+value_input)
      .then(response => {
        let data = {};
        const {customers} = response.data;
        customers.filter(customer => {
          data[customer.email] = customer.first_name + ' ' + customer.last_name;
        });
        $('input.autocomplete').autocomplete({
          data: data,
        });
      })
      .catch(error => {
        console.log(error);
      });
    }
  });

  $('input[name="customer-email"]').blur(() => {
    let nameField = $("input[name='name']").val();
    if (this.value == '') {
      $('#addCustomerModal.modal').modal('open');
      $("input[name='name']").val('');
    }

    if (nameField == '') {
      this.value = '';
      $(this).removeClass('valid').addClass('invalid');
    }
  });

  /**
   * Listener to show contactLensesTime field
   */
  $('input[name="use-contact-lenses"]').on('change', function () {
    ($(this).val() == 'true' ? $('.contact-select').show() : $('.contact-select').hide());
  });

  /**
   * Listener to show treatment field
   */
  $('input[name="have-diabetes"]').on('change', function () {
    ($(this).val() == 'true' ? 
      $('.treatment-input').show() :
      $('.treatment-input').hide()
    );
    ($(this).val() == 'true' ? 
      $('.treatment-input input').attr('required', true) :
      $('.treatment-input input').attr('required', false)
    );
  });

  /**
   * Listener to hide/show self-refractometer table
   */
  $('input[name="show-selfrefractometer"').on('change', function () {
    ($(this).prop('checked') ? $('table.autorrefractometro').show() : $('table.autorrefractometro').hide());
  });

  /**
   * Listener to hide/show lensometry table
   */
  $('input[name="show-lensometry"').on('change', function () {
    ($(this).prop('checked') ? $('table.lensometria').show() : $('table.lensometria').hide());
  });

  /**
   * Listener for Addition field on lensometry table
   */
  $('input[name="lensometry-right-add"]').on('input', function() {
    $('input[name="lensometry-left-add"]').val((this.value.indexOf('.') > 0) ? parseFloat($(this).val()).toFixed(2) : $(this).val());
  });

  $('input[name="lensometry-left-add"]').on('input', function() {
    $('input[name="lensometry-right-add"]').val((this.value.indexOf('.') > 0) ? parseFloat($(this).val()).toFixed(2) : $(this).val());
  });

  /**
   * Listener for Rx Addition field
   */
  $('input[name="rx-right-add"]').on('input', function() {
    $('input[name="rx-left-add"]').val((this.value.indexOf('.') > 0) ? parseFloat($(this).val()).toFixed(2) : $(this).val());

    if (this.value != 0 && $('input[name="height"]').val() == "") {
      $('input[name="height"]').prop('required', true);
      $('.height-container').show();
    } else {
      $('input[name="height"]').prop('required', false).val('').removeClass('invalid');
      $('.height-container').hide();
    }
  });

  $('input[name="rx-left-add"]').on('input', function() {
    $('input[name="rx-right-add"]').val((this.value.indexOf('.') > 0) ? parseFloat($(this).val()).toFixed(2) : $(this).val());

    if (this.value != 0 && $('input[name="height"]').val() == "") {
      $('input[name="height"]').prop('required', true);
      $('.height-container').show();
    } else {
      $('input[name="height"]').prop('required', false).val('').removeClass('invalid');
      $('.height-container').hide();
    }
  });

  /**
   * Listener to check prescription form
   */
  $('button[name="checkprescription"]').on('click', function (e) {
    let form = document.getElementById('form-receta');
    let isValidForm = form.checkValidity();
    console.log(form);
    let lastExamValue = $('.last-exam option:selected').val();
    let useContactLenses = ($('input[name="use-contact-lenses"]:checked').val() === "true");
    let contactLensesTimeValue = $('.contact-lenses-time').val();
    let monthSelect = $('.month-select').val();

    // Case when some inputs are invalid
    (lastExamValue == "" ?
      $('.error-last-exam').css('display', 'block').html('Debes seleccionar una opción') :
      $('.error-last-exam').hide().html('')
    );

    (useContactLenses && contactLensesTimeValue != "" ?
      $('.error-contact-lenses-time').hide().html('') :
      $('.error-contact-lenses-time').css('display', 'block').html('Debes seleccionar una opción')
    );

    (monthSelect == "0" ?
        $('.birthdate .select-dropdown').addClass('error-select') : 
        $('.birthdate .select-dropdown').removeClass('error-select')
    )

    // Case when the form and all inputs are valid
    if (isValidForm && lastExamValue != "" && monthSelect != "") {
      $('#prescriptionModal.modal').modal('open');
      mirrorPrescription();
      $('#prescriptionModal label').addClass('active');
    } else {
      console.log('wrong');
    }
  });

  $('#form-receta').on('submit', function (e) {
    e.preventDefault();
  });

  /**
   * Fill Prescription date and Optometrist name fields
   */
  $("input[name='prescription-date']").val(moment().format("DD/MM/YYYY"));
  $("input[name='optometrist']").val(Cookies.get('username'));

  let isiPad = navigator.userAgent.match(/iPad/i) != null;
  if (isiPad) {
    $('input').focusin(function () {
      $('.container').css('padding-bottom', '352px');
    });

    $('input').focusout(function () {
      $('.container').css('padding-bottom', '0px');
    });
  }
});
