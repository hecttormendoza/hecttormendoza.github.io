

$(window).load(function() {
  //Condition for login when cookies isn't expire
  if (Cookies.get('username') != undefined && Cookies.get('useremail') != undefined) {
    window.location.href = "receta.html";
  }
  if (Cookies.get('username') == undefined && Cookies.get('useremail') == undefined) {
    signOut();
  }
});

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut();
  Cookies.remove('username');
  Cookies.remove('useremail');
  Cookies.remove('clinicname');
  Cookies.remove('userimage');
}

const strapiUrl = 'https://faas.benandfrank.com/drtemplo';
let isValid = false;
let doctorMatch = '';

function onSignIn (googleUser) {
  let loginUser = googleUser.getBasicProfile();
  axios.get(strapiUrl)
  .then(response => {
    let {data: doctors} = response;
    isValid = doctors.filter((doctor) => (doctor.email == loginUser.getEmail())).length == 1;
    doctorMatch = doctors.filter(doc => doc.email == loginUser.getEmail());
    if (isValid) {
      let expire_time = new Date(new Date().getTime() + 600 * 60 * 1000);
      Cookies.set('username', doctorMatch[0].nombre, {
        expires: expire_time,
        path: '/'
      });
      Cookies.set('useremail', doctorMatch[0].email, {
        expires: expire_time,
        path: '/'
      });
      Cookies.set('userimage', loginUser.getImageUrl(), {
        expires: expire_time,
        path: '/'
      });
      window.location.href = "receta.html";
    } else {
      signOut();
    }
  })
  .catch(error => {
    console.log(error);
  });
}
