// main.js
var whichSound;
var muted = 0;
//When the slider position changes, the sound level of the <audio> element also changes
var volNum1 = document.getElementById('volume-slider');
volNum1.addEventListener("change", function(){
    var temp1 = volNum1.valueAsNumber;
    var num1 = document.getElementById('volume-number');
    num1.valueAsNumber = temp1;
    var sound1 = document.getElementById('horn-sound');
    sound1.volume = temp1 / 100;

    //change volume image
    var img1 = document.getElementById('volume-image');
    if(temp1 >= 67 && temp1 <= 100){
      img1.src="./assets/media/icons/volume-level-3.svg";
    }
    else if(temp1 >= 34 && temp1 <= 66){
      img1.src="./assets/media/icons/volume-level-2.svg";
    }
    else if(temp1 >= 1 && temp1 <= 33){
      img1.src="./assets/media/icons/volume-level-1.svg";
    }
    else{
      img1.src="./assets/media/icons/volume-level-0.svg";
      muted = 1;
    }
});

//
var volNum2 = document.getElementById('volume-number');
volNum2.addEventListener("change", function(){
    var temp2 = volNum2.valueAsNumber;
    var num2 = document.getElementById('volume-slider');
    num2.valueAsNumber = temp2;
    var sound2 = document.getElementById('horn-sound');
    sound2.volume = temp2 / 100;

    //change volume image
    var img2 = document.getElementById('volume-image');
    if(temp2 >= 67 && temp2 <= 100){
      img2.src="./assets/media/icons/volume-level-3.svg";
    }
    else if(temp2 >= 34 && temp2 <= 66){
      img2.src="./assets/media/icons/volume-level-2.svg";
    }
    else if(temp2 >= 1 && temp2 <= 33){
      img2.src="./assets/media/icons/volume-level-1.svg";
    }
    else{
      img2.src="./assets/media/icons/volume-level-0.svg";
      muted = 1;
    }

});

var sonA = document.getElementById('radio-air-horn');
sonA.addEventListener("change", function(){
  var sona = document.getElementById('horn-sound');
  sona.scr = "./assets/media/audio/air-horn.mp3";
});

var sonC = document.getElementById('radio-car-horn');
sonC.addEventListener("change", function(){
  var sonc = document.getElementById('horn-sound');
  sonc.scr = "./assets/media/audio/car-horn.mp3";
});

var sonP = document.getElementById('radio-party-horn');
sonP.addEventListener("change", function(){
  var sonp = document.getElementById('horn-sound');
  sonp.scr = "./assets/media/audio/party-horn.mp3";
});

var playAudio = document.getElementById('honk-btn');
playAudio.type = "button";
playAudio.addEventListener("click", function(){
  if(muted){

  }

  else{
    var miao = document.getElementById('horn-sound');
    miao.play();
  }
});

//sound.volume = volNum;
// TODO
