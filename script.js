let text = document.getElementById("text")
let button1 = document.getElementById("button1");
let container = document.getElementById("container")

let click = new Audio ('assets/mouse-click-290204 (2).mp3');



let clicks = 0;

button1.addEventListener("click", annoy)

function annoy() {
  click.play();
  clicks++;
  if (clicks == 1) {
    text.innerHTML = "STOP PRESSING MEEEEEEEEEEEEEE!!!!"
  } else if (clicks == 4) {
    text.innerHTML = "I AM GETTING ANGRY!!!!!"
  } else if (clicks == 6) {
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
    text.innerHTML = "I'M PLAYING WITH YOU, I'M NOT AT UR HOUSE"
  } else if (clicks == 22) {
    button1.style.backgroundColor = "lime"
    text.innerHTML = "SPEAKING OF PLAYING, LET'S PLAY A GAME"
  } else if (clicks == 24) {
    text.innerHTML = "SPEAKING OF PLAYING, LET'S PLAY A GAME"
    let button2 = document.createElement("button");
    button2.innerHTML = "Press Me";
    button2.classList.add("button1");
    button2.classList.add("button2");
    container.appendChild(button2);
  } else if (clicks == 26) {

    text.innerHTML = "PICK ONE(TRY TO CATCH ME)"
    button1.classList.add("glitch")
    button2.classList.add("glitch")
  }
}
