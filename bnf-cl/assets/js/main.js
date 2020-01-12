let regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
$(document).ready(function () {
  $('input[type="email"]').on('input', function (e) {
    if (regex.test(e.target.value)) {
      $('.btn-send').removeClass('invalid');
    } else {
      $('.btn-send').addClass('invalid');
    }
  });

  $('.btn-send').on('click', function (e) {
    let hasClass = $(e).hasClass('invalid');
    if (!hasClass) {
      addSubscriber();
    }
  });
});

function addSubscriber() {
  let emailValue = $('input[type="email"]').val();
  console.log(emailValue);
  axios.post('https://hooks.zapier.com/hooks/catch/870462/ohbdl5l/?email=' + emailValue)
    .then(response => {
      $('input[type="email').attr('disabled', 'disabled');
      $('.btn-send').addClass('invalid');
      $('.email-field').hide();
      $('.success-messages').show();
    })
    .catch(error => console.log(error));
}