// images slider
let initialeIndex = 0;
const images = document.querySelectorAll("#img-slider img");

function resetSliderStyles(img) {
  img.classList.remove("active");
  img.style.opacity = "0";
  img.style.position = "absolute";
}
function showSlide(index) {
  images.forEach(resetSliderStyles);
  images[index].classList.add("active");
  images[index].style.opacity = "1";
  images[index].style.position = "relative";
}

function droiteSlider() {
  initialeIndex = (initialeIndex + 1) % images.length;
  showSlide(initialeIndex);
}

function gaucheSlider() {
  initialeIndex = (initialeIndex - 1 + images.length) % images.length;
  showSlide(initialeIndex);
}

showSlide(initialeIndex);

setTimeouty(() => {
  droiteSlider();
}, 8000);

document.querySelector("#toggle-darkmode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// header mobile

function barActive() {
  const navbar = document.getElementById("navbar");
  navbar.style.right = "0px";
}

function barDesactive() {
  const navbar = document.getElementById("navbar");
  navbar.style.right = "-300px";
}
