const button = document.querySelector("#menuicon");
const hamburger = document.querySelector("#hamburger")
const hide = document.querySelector(".hide")

button.addEventListener("click", () => {
    hamburger.classList.toggle("hide")
})