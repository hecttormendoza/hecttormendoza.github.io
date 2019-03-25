/**
 * Listener to load auth2 form google login API
 */
$(window).load(function() {
  gapi.load('auth2', function () {
    auth2 = gapi.auth2.init({
      client_id: '766118980410-8hf2jppiv1mahs4a6di1q0em3m6v4qo6.apps.googleusercontent.com',
      scope: 'email',
      fetch_basic_profile: false
    });
  });
});