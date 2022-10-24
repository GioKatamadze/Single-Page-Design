let arrowRight = document.querySelector("#arrowRight");
let arrowLeft = document.querySelector("#arrowLeft");
let sliderBox = document.querySelector(".sliderBox");
const slides = document.querySelectorAll(".slide");

let n = 0;
n.length = slides.length;
function goRight() {
  n = n + 1;
  document.querySelectorAll(".slide")[n].scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center'
  });
  console.log(n);
}

function goLeft() {
  n = n - 1;
  document.querySelectorAll(".slide")[n].scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center'
  });
  console.log(n);
}

function validator() {
  if (n == 4) {
    document.querySelector("#arrowRight").classList.add("disabled");
  } 
  if (n == 0 ) {
    document.querySelector("#arrowLeft").classList.add("disabled");
  }
  if (n == 1 || n == 2 || n == 3 ) {
    document.querySelector("#arrowRight").classList.remove("disabled");
    document.querySelector("#arrowLeft").classList.remove("disabled");
  }
}




arrowRight.addEventListener("click", () => {
  goRight();
  validator();
})

arrowLeft.addEventListener("click", () => {
  goLeft();
  validator();
});


