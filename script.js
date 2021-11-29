const button = document.querySelector("#menuicon");
const hamburger = document.querySelector("#hamburger")
const closeontouch = document.querySelector("#closeontouch");
const hide = document.querySelector(".hide")
const displaynone = document.querySelector(".displaynone");
const heading1 = document.querySelector("#heading1");
const heading2 = document.querySelector("#heading2");
const heading3 = document.querySelector("#heading3");

// When hamburger menu is pressed an element slides out/in //
button.addEventListener("click", () => {
    hamburger.classList.toggle("hide")
    closeontouch.classList.toggle("hide")
})

closeontouch.addEventListener("click", () => {
  hamburger.classList.toggle("hide");
  closeontouch.classList.toggle("hide");
})




// when the first image is in view an IF statement is triggered //
let observer1 = new IntersectionObserver(
  function (entries) {
    // isIntersecting is true when element and viewport are overlapping
    // isIntersecting is false when element and viewport don't overlap
    if (entries[0].isIntersecting === true) {
        console.log("Element has just become visible in screen1", this);
        /* heading1.classList.remove("displaynone") */
        heading3.classList.add("displaynone");
        heading2.classList.add("displaynone");
    } else if (entries[0].isIntersecting === false) {
        /* heading1.classList.add("displaynone"); */
    }
   

  },
  { threshold: [0.5] }
);

// when the second image is in view an IF statement is triggered //
let observer2 = new IntersectionObserver(
  function (entries) {
    // isIntersecting is true when element and viewport are overlapping
    // isIntersecting is false when element and viewport don't overlap
    if (entries[0].isIntersecting === true) {
      console.log("Element has just become visible in screen1", this);
      heading2.classList.remove("displaynone");
      /* heading1.classList.add("displaynone"); */
      heading3.classList.add("displaynone");

    } else if (entries[0].isIntersecting === false) {
      /* heading2.classList.add("displaynone"); */
    }
   

  },
  { threshold: [0.5] }
);
// when the thrid image is in view an IF statement is triggered //
let observer3 = new IntersectionObserver(
  function (entries) {
    // isIntersecting is true when element and viewport are overlapping
    // isIntersecting is false when element and viewport don't overlap
    if (entries[0].isIntersecting === true) {
      console.log("Element has just become visible in screen1", this);
      heading3.classList.remove("displaynone");
      /* heading2.classList.add("displaynone"); */
    } else if (entries[0].isIntersecting === false) {
      /* heading3.classList.add("displaynone"); */
    }
   

  },
  { threshold: [0.5] }
);

observer1.observe(document.querySelector("#image1"));
observer2.observe(document.querySelector("#image2"));
observer3.observe(document.querySelector("#image3"));

