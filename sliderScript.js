const arrowRight = document.querySelector("#arrowRight");
const arrowLeft = document.querySelector("#arrowLeft");
let sliderBox = document.querySelector(".sliderBox");
const slides = document.querySelectorAll(".slide");

let anchor1 = document.querySelector("#slide1");
// let anchor2 = document.querySelector("#slide2");
// let anchor3 = document.querySelector("#slide3");
// let anchor4 = document.querySelector("#slide4");
// let anchor5 = document.querySelector("#slide5");

let n = 0;
function goRight() {
  n = n + 1;
  document.querySelectorAll(".slide")[n].scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center'
  });
}

function goLeft() {
  n = n - 1;
  document.querySelectorAll(".slide")[n].scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center'
  });
}



arrowRight.addEventListener("click", () => {
  goRight();
  // scrollBy(0, 1);
})

arrowLeft.addEventListener("click", () => {
  goLeft();
  // scrollBy(0, 1);
});



