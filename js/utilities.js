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

// KONAMI CODE EASTER EGG - little fun thing I added to the website
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
  // check if the Konami code has already been entered
  if (localStorage.getItem("konamiCodeEntered")) {
    // show a different alert if the code has already been entered
    Swal.fire({
      title: "You have already found the Secret Code!",
      text: "You can only find it once :(",
      background: "#f7f7f7",
      icon: "warning",
      confirmButtonText: "OK",
      confirmButtonColor: "#d96b47",
      zIndex: 999999,
    });
  } else {
    // set a value in local storage to indicate that the Konami code has been entered
    localStorage.setItem("konamiCodeEntered", true);

    // show the original alert if the code hasn't been entered before
    Swal.fire({
      title: "You have found a Secret Code!",
      text: "Enjoy a cup of coffee on us!",
      background: "#f7f7f7",
      imageUrl: "../img/pngwing.com.png",
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: "Custom image",
      zIndex: 999999,
    });
  }
}

// Prevent scrolling to left and right on mobile
$(document).ready(function () {
  $("body").bind("touchmove", function (e) {
    e.preventDefault();
  });
}); // to disable scrolling - add this to the end of the function
// touchmove event is fired every time the user touches the screen and moves their finger. We are preventing the default action of this event, which is scrolling the page.

//remove any extra space from the left and right of the screen
$(document).ready(function () {
  $("body").css("overflow-x", "hidden");
});
