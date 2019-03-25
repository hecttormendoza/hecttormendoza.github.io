$(document).ready(function() {
  axios.get('https://faas.benandfrank.com/frame')
  .then(response => {
    const {data} = response;
    data.forEach(frame => {
      let option = '<option value="'+frame.name+'">'+frame.name+'</option>';
      $('.frame-select select').append(option);
    });
    $('select').formSelect();
  })
  .catch(error => {
    console.log(error);
  });

});