// main.js
var volNum = document.getElementById('volume-slider').valueAsNumber;
console.log(volNum);
var num = document.getElementById('volume-number');
num.valueAsNumber = volNum;
var sound = document.getElementById('horn-sound');
sound.volume = volNum;
// TODO
