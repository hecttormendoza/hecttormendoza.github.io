$(document).ready(() => {
  /**
   * Listener for add new customer
   */
  $('button[name="add"]').on('click', function (e) {
    e.preventDefault();
    let form = document.getElementById('form_add');
    let isValidForm = form.checkValidity();

    if (isValidForm) {
      $('.addCustomerModal .progress').show();
      $('.modal-content').addClass('disabled');
      $('.error').html('');

      let first_name = $('input[name="nameNewUser"]').val();
      let last_name = $('input[name="lastNewUser"]').val();
      let new_email = $('input[name="emailNewUser"]').val();
      let phone = $('input[name="phoneNewUser"]').val();

      axios.post('/clinicas/receta.php?action=saveUser&first_name='+ first_name + '&last_name='+ last_name +'&new_email='+ new_email +'&phone='+ phone)
      .then(function (response) {
        const {data} = response;
        console.log(data);
        if (Object.keys(data.errors).length) {
          for (const key of Object.keys(data.errors)) {
            if (key == 'email') {
              $('.error').append('<p>correo electrónico ya registrado</p>');
            }

            if (key == 'phone') {
              $('.error').append('<p>número telefonico ya registrado</p>');
            }
          }
          $('.addCustomerModal .progress').hide();
          $('.modal-content').removeClass('disabled');
        } else {
          $('input[name="email"]').val(new_email);
          $('label[for="email"]').addClass('active');
          $('input[name="name"]').val(first_name+' '+last_name);
          $('label[for="name"]').addClass('active');
          $('.addCustomerModal .progress').hide();
          $('.modal-content').removeClass('disabled');
          $('#addCustomerModal.modal').modal('close');
          $('#form_add').trigger("reset");
          $('input[name="nameNewUser"]').val('');
          $('input[name="lastNewUser"]').val('');
          $('input[name="emailNewUser"]').val('');
          $('input[name="phoneNewUser"]').val('');
          M.toast({html: 'Registro de usuario exitoso', classes: 'rounded'});
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  });
});