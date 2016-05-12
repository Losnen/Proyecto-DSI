var notes = ['c1', 'c1s', 'd1', 'd1s', 'e1', 'f1', 'f1s', 'g1', 'g1s', 'a1', 'a1s', 'b1', 'c2']
var cumple = ['c1','c1','d1','c1','f1','e1','c1','c1','d1','c1','g1','f1']; 
var can1 = ['d1','c1'];
var p = 0;

var keys = {}
var piano = document.getElementById('piano')

// Preload audio
for (i = 0; i < notes.length; i++) {
  keys[notes[i]] = new Audio('https://github.com/pffy/mp3-piano-sound/blob/master/mp3/'+ notes[i] +'.mp3?raw=true')
}

function newRound(sequence) {
  console.log(sequence);
  animate(sequence);
}

function animate(sequence) {
  var i = 0;
  var interval = setInterval(function() {
  lightUp(sequence[i]);
    i++;
    if (i >= sequence.length) {
     clearInterval(interval);
    }
  }, 1000);
}

function lightUp(tile) {
  var aux = $('#' + tile).addClass('lit');
  window.setTimeout(function() {
   aux.removeClass('lit');
  }, 400);
}

function play(key) {
  keys[key].currentTime = 0   // Rebobinamos (y silenciamos el anterior si lo hay)
  keys[key].play()            // Reproducimos
}

$("#guardar").click(() => {
  console.log($("#nombreusu").val());
   $.get("/puntuaciones/" + $("#nombreusu").val(), {
   "punt": p
   });
});
    
$("#piano").click(function(e) {
  play(e.target.id);
});  
    
$("#canciones").click(function(e) {
  console.log(e.target.id);
  if(e.target.id=='cumple'){
     newRound(cumple);
  }else if(e.target.id=='can1'){
   newRound(can1);
  }
});
