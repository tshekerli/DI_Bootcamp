// let num = 5;
// let setIntervalId = setInterval(timer, 1000);

// function timer(){
//     console.log(num);
//     num--;

//     if(num < 0){
//         clearInterval(setIntervalId);
//     }
// }

const body = document.querySelector("body");
body.style.transition = "smooth";
const button = document.createElement("button");
const outer = document.querySelector(".outer");
const inner = document.querySelector(".inner");
inner.style.transition = "left 0.5s ease";
let leftPosition = 0;
outer.style.display = "relative";
inner.style.display = "absolute";
button.textContent = "Click me";
function move() {
    leftPosition += 10;
    inner.style.left = `${leftPosition}px`;
  }
  
  button.addEventListener("click", () => {
    let intervalId = setInterval(move, 100);
    setTimeout(() => clearInterval(intervalId), 3500);
  });
  
  body.appendChild(button);