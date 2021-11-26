const button = document.querySelector("#menuicon");
const hamburger = document.querySelector("#hamburger");
const closeontouch = document.querySelector("#closeontouch");
const hide = document.querySelector(".hide");

button.addEventListener("click", () => {
  hamburger.classList.toggle("hide");
  closeontouch.classList.toggle("hide");
});

closeontouch.addEventListener("click", () => {
  hamburger.classList.toggle("hide");
  closeontouch.classList.toggle("hide");
});