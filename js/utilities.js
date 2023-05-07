// Initialize AOS
AOS.init({
  duration: 500,
  once: false,
});

// Get the button
var backToTopButton = document.getElementById("back-to-top-button");

// When the user scrolls down 20px from the top of the document, show the button
$(window).scroll(function () {
  scrollFunction();
});

function scrollFunction() {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? (backToTopButton.style.display = "block")
    : (backToTopButton.style.display = "none");
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// KONAMI CODE EASTER EGG
//Konami code sequence
const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

// initialize a counter and add keydown event listener to the document
let konamiCodeIndex = 0;
document.addEventListener("keydown", function (event) {
  // get the key that was pressed
  const key = event.key;

  // check if the pressed key matches the current code sequence element
  if (key === konamiCode[konamiCodeIndex]) {
    // increment the counter and check if the entire code sequence was entered
    konamiCodeIndex++;
    if (konamiCodeIndex === konamiCode.length) {
      // activate the function that you want to run when the code is entered
      activateKonamiCode();
      konamiCodeIndex = 0;
    }
  } else {
    // reset the counter if the wrong key is pressed
    konamiCodeIndex = 0;
  }
});

// define the function that should run when the code is entered
function activateKonamiCode() {
  // replace this with the code that you want to run
  console.log("Konami code entered!");
}
