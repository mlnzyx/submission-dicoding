// Initialize AOS (Animate On Sroll)
AOS.init({
  once: true,
  duration: 500,
});

//link active
const linkColor = document.querySelectorAll(".nav-list");
function colorLink() {
  linkColor.forEach((l) => l.classList.remove("active"));
  this.classList.add("active");
}
linkColor.forEach((l) => l.addEventListener("click", colorLink));

// show navigation links
function toggleNavList() {
  //Remember if the menu is opened or not
  var menuOpened = false;
  const toggleMenu = document.getElementById("toggleMenu");
  const listNav = document.getElementById("navMenu");

  // Add click listener on menu toggle
  toggleMenu.addEventListener("click", onMenu_click);

  // Add click listener on nav list
  listNav.addEventListener("click", onlistNav_click);

  function showMenu() {
    menuOpened = !menuOpened;

    // if menuOpened is false
    if (menuOpened) {
      listNav.className += " appear";
      document.addEventListener("click", onDoc_click);
    }
    // if menuOpened is true
    else {
      listNav.className = listNav.className.replace("appear", "").trim();
      document.removeEventListener("click", onDoc_click);
    }
  }

  function onMenu_click(domEvent) {
    domEvent.stopPropagation();
    showMenu();
  }

  function onDoc_click(domEvent) {
    domEvent.stopPropagation();
    showMenu();
  }

  function onlistNav_click(domEvent) {
    domEvent.stopPropagation();
  }
}
toggleNavList();

//fixed nav on big screen
navFixed = document.getElementById("navHeader");
var myScrollFunc = function () {
  var y = window.scrollY;
  if (y >= 300) {
    navFixed.className = "headerMenu show";
  } else {
    navFixed.className = "headerMenu";
  }
};

window.addEventListener("scroll", myScrollFunc);
