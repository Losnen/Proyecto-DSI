var notes = ['c1', 'c1s', 'd1', 'd1s', 'e1', 'f1', 'f1s', 'g1', 'g1s', 'a1', 'a1s', 'b1', 'c2']
var keys = {}
var piano = document.getElementById('piano')

// Preload audio
for (i = 0; i < notes.length; i++) {
  //piano.innerHTML += '<div id="'+notes[i]+'" class="'+ (notes[i][2] == 's'?'b':'') +'key" onClick="play(this.id)"></div>';
  keys[notes[i]] = new Audio('https://github.com/pffy/mp3-piano-sound/blob/master/mp3/'+ notes[i] +'.mp3?raw=true')
}

function play(key) {
  keys[key].currentTime = 0   // Rebobinamos (y silenciamos el anterior si lo hay)
  keys[key].play()            // Reproducimos
}