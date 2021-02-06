// main.js
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
    if(temp1 >= 67 || temp1 <= 100){
      img1.src="./assets/media/icons/volume-level-3.svg";
    }
    else if(temp1 >= 34 || temp1 <= 66){
      img1.src="./assets/media/icons/volume-level-2.svg";
    }
    else if(temp1 >= 1 || temp1 <= 33){
      img1.src="./assets/media/icons/volume-level-1.svg";
      console.log(img1.src);
    }
    else{
      img1.src="./assets/media/icons/volume-level-0.svg";
    }

});

//
var volNum2 = document.getElementById('volume-number');
volNum2.addEventListener("change", function(){
    var temp2 = volNum2.value;
    var num2 = document.getElementById('volume-sliders');
    num2.valueAsNumber = temp2;
    var sound2 = document.getElementById('horn-sound');
    sound2.volume = temp2;

    //change volume image
    var img2 = document.getElementById('volume-image');
    if(temp2 >= 67 || temp2 <= 100){
      img2.src="./assets/media/icons/volume-level-3.svg";
    }
    else if(temp2 >= 34 || temp2 <= 66){
      img2.src="./assets/media/icons/volume-level-2.svg";
    }
    else if(temp2 >= 1 || temp2 <= 33){
      img2.src="./assets/media/icons/volume-level-1.svg";
      console.log(img1.src);
    }
    else{
      img2.src="./assets/media/icons/volume-level-0.svg";
    }

});

var paly = document.getElementById('honk-btn');

//sound.volume = volNum;
// TODO
