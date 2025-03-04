let text = document.getElementById( "text" )
let button1 = document.getElementById("button1");

let clicks= 0;

button1.addEventListener("click", annoy)

function annoy() {
    clicks++;
  if(clicks == 1){
    text.innerHTML = "STOP PRESSING MEEEEEEEEEEEEEE!!!!"
  }
  else if(clicks == 4 ){
    text.innerHTML = "I AM GETTING ANGRY!!!!!"
  }
  else if(clicks == 6){
    text.innerHTML = "YOU'RE GOING TO UNLEASH THE BEAST!!!"
  }
    else if(clicks == 8 ){
        text.innerHTML = "STOOOOOOOOOOOPPPPPPPPPPP!!!!!"
      }
      else if(clicks == 10 ){
        text.innerHTML = "THAT'S IT, I'M COMING TO YOUR HOUSE"
      }
      else if(clicks == 12){
        text.innerHTML = "100 METERS"
      }
        else if(clicks == 14 ){
            text.innerHTML = "60 METERS"
          } 
          else if(clicks == 16 ){
            text.innerHTML = "40 METERS"
          }

          else if(clicks == 18 ){
            text.innerHTML = "LOOK OUTSIDE"
          }
          else if(clicks == 20 ){
            text.innerHTML = "I'M PLAYING WITH YOU, I'M NOT AT UR HOUSE"
          }
          else if(clicks == 22 ){
            button1.style.backgroundColor = "lime"
            text.innerHTML = "SPEAKING OF GAMES, LET'S PLAY ONE"
          }
      }
  
