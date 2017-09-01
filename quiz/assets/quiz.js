// Equals Array

// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

//

var answers = [];

function searchAnswer () {
  var gender = answers[0];
  answers.shift();
  console.log(gender);
  for (var i = 0; i < dbQuiz[gender].length; i++) {
    // dbQuiz[gender][i].ans.length == answers.length && dbQuiz[gender][i].ans.every(function(v,i) {return v === answers[i]})
    if (JSON.stringify(dbQuiz[gender][i].ans.sort()) == JSON.stringify(answers.sort())) {
      console.log(dbQuiz[gender][i].models);
      for (var j = 0; j < dbQuiz[gender][i].models.length; j++) {
        var container = document.getElementById("matches");
        container.innerHTML += '<div class="match"><img src="https://cdn.shopify.com/s/files/1/0838/5577/products/front_parks_cobre_large.jpg?v=1497995287" alt=""><p class="din">'+ dbQuiz[gender][i].models[j] +'</p><a href="#"><span class="apercu_bold">VER MODELO</span></a></div>';
      }
    }
  }
}

function progress(reveal, answer) {
  console.log(reveal, answer);
  if (answer != undefined) {
    answers.push(answer);
  }
  $('.quiz_step').removeClass('active');
  $($('.quiz_step')[reveal]).addClass('active');

  if (reveal == 7) {
    searchAnswer();
  }
}
