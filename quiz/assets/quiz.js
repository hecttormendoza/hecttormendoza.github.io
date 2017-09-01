var answers = [];
var gender;
function searchAnswer () {
  for (var i = 0; i < dbQuiz[gender].length; i++) {
    // dbQuiz[gender][i].ans.length == answers.length && dbQuiz[gender][i].ans.every(function(v,i) {return v === answers[i]})
    if (JSON.stringify(dbQuiz[gender][i].ans.sort()) == JSON.stringify(answers.sort())) {
      var container = document.getElementById("matches");
      console.log(dbQuiz[gender][i].models);
      container.innerHTML = "";
      for (var j = 0; j < dbQuiz[gender][i].models.length; j++) {
        container.innerHTML += '<div class="match"><img src="https://cdn.shopify.com/s/files/1/0838/5577/products/front_parks_cobre_large.jpg?v=1497995287" alt=""><p class="din">'+ dbQuiz[gender][i].models[j] +'</p><a href="#"><span class="apercu_bold">VER MODELO</span></a></div>';
      }
    }
  }
}

function progress(reveal, answer) {
  console.log(reveal, answer);
  if (answer != undefined) {
    if (reveal == 2) {
     gender = answer;
   } else {
    answers[reveal-3] = answer;
   }
  }

  $('.quiz_step').removeClass('active');
  $($('.quiz_step')[reveal]).addClass('active');

  if (reveal == 7) {
    searchAnswer();
  }

  if($('.quiz_step.active').index() > 2) {
    $('.back').show();
  } else {
    $('back').hide();
  }
}

function goBack (pos) {
  console.log(pos);
  $('.quiz_step').removeClass('active');
  $($('.quiz_step')[pos]).addClass('active');
}
