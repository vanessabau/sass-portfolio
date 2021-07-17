// Target DOM elements by setting constants

// menuBtn is the wrapper
const menuBtn =
  document.querySelector(".menu-btn");

// hamburger is the span
const hamburger = document.querySelector(
  ".menu-btn__burger"
);

const nav = document.querySelector(".nav");
const menuNav =
  document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(
  ".menu-nav__item"
);

// Initially the menu is not shown
let showMenu = false;

// Add event listener listening for the 'click' event, then call toggleMenu function
menuBtn.addEventListener("click", toggleMenu);

// Create function toggleMenu
function toggleMenu() {
  // If showMenu is false, add 'open' to the classList and set show Menu to true;
  // If the opposite, do the opposite;
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    //Loop through items and each time pull one item out
    navItems.forEach((item) =>
      item.classList.add("open")
    );
    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    //Loop through items and each time pull one item out
    navItems.forEach((item) =>
      item.classList.remove("open")
    );
    showMenu = false;
  }
}
