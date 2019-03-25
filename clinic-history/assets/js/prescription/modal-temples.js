$(document).ready(function() {
  // Call all templos on DB
  axios.get('https://faas.benandfrank.com/temple')
  .then(response => {
    const {data} = response;
    data.map((data, i) => {
      $('#selectTemploModal .row').append(`
        <div class="col s12 m4 l4">
          <a
            class="waves-effect waves-light btn"
            onclick="selectTemplo('`+data.name+`')">
            <p>`+data.name+`</p>
          </a>
        </div>
      `);
    });
  })
  .catch(error => {
    console.log(error);
  });

  if (Cookies.get('clinicname') == undefined) {
    $('#selectTemploModal.modal').modal('open');
  }
});

function selectTemplo (templo) {
  var expire_time = new Date(new Date().getTime() + 600 * 60 * 1000);
  Cookies.set('clinicname', templo, { expires:expire_time, path:'/' });
  $('#selectTemploModal.modal').modal('close');
  getPatientsWaiting();
}