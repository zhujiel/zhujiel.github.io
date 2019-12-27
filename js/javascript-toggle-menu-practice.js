let activatedElements = document.querySelectorAll(".active-element");
let menuToggle = document.querySelector("#toggle-menu");

menuToggle.addEventListener("click", function() {
  for (let i = 0; i < activatedElements.length; i++) {
    activatedElements[i].classList.toggle("active");
    
  }
  console.log("clicked");
});
