let text = document.getElementById("text")
let button1 = document.getElementById("button1");
let container = document.getElementById("container")

let click = new Audio ('assets/mouse-click-290204 (2).mp3');



let clicks = 0;

button1.addEventListener("click", annoy)


function annoy() {
  click.play();
  clicks++
  if (clicks == 1) {
    text.innerHTML = "STOP PRESSING MEEEEEEEEEEEEEE!!!!"
  } else if (clicks == 4) {
    text.innerHTML = "I AM GETTING ANGRY!!!!!"
  }  if (clicks == 6) {
    text.innerHTML = "YOU'RE GOING TO UNLEASH THE BEAST!!!"
  } else if (clicks == 8) {
    text.innerHTML = "STOOOOOOOOOOOPPPPPPPPPPP!!!!!"
  } else if (clicks == 10) {
    text.innerHTML = "THAT'S IT, I'M COMING TO YOUR HOUSE"
  } else if (clicks == 12) {
    text.innerHTML = "100 METERS"
  } else if (clicks == 14) {
    text.innerHTML = "60 METERS"
  } else if (clicks == 16) {
    text.innerHTML = "40 METERS"
  } else if (clicks == 18) {
    text.innerHTML = "LOOK OUTSIDE"
  } else if (clicks == 20) {
    text.innerHTML = "made you look :) "
  } else if (clicks == 22) {
    text.innerHTML = "anyways, WEEEEEEEEEEEEEEEE"
    let button2 = document.createElement("button");
    button2.innerHTML = "HI";
    button2.classList.add("button1");
    button2.classList.add("button2");
    container.appendChild(button2);
    button1.classList.add("glitch");
  } else if (clicks == 23) {
    text.innerHTML = ("WOAH I'M DIZZY");
    button1.classList.remove("glitch");
  } else if (clicks == 26) {
    text.innerHTML = ("WAIT WHAT'S THAT ON THE TOP RIGHT");
  } else if (clicks == 28) {
    text.innerHTML = ("HI I'M BLUE");
  } else if (clicks == 30) {
    text.innerHTML = ("AND THIS IS THE END OF THE BUTTON GAME BECAUSE I SAID SO");
    button1.classList.add("glitch");
  } 
}
