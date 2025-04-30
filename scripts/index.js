/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    // Add show-menu class to nav menu
    nav.classList.toggle("show-menu");

    // Add show-icon to show and hide the menu icon
    toggle.classList.toggle("show-icon");
  });
};

showMenu("nav-toggle", "nav-menu");

/*=============== HEADER MARGING ===============*/
function setMainMargin() {
  const main = document.getElementsByClassName("main")[0];
  let headerHeight = document.getElementsByClassName("header")[0].offsetHeight;

  main.style.marginTop = `${headerHeight - 3}px`;
}

window.onload = function () {
  // Execute your function when the page loads
  setMainMargin();
};

window.addEventListener("resize", setMainMargin);

/*=============== SCROLLING NAV ===============*/

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      const href = e.target.getAttribute("href");
      const section = document.querySelector(href);
      if (section) {
        e.preventDefault();
      }
    }

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    targetElement.scrollIntoView({ behavior: "smooth", block: "center" });

    // Center the target element vertically in the viewport
    const navHeight = document.querySelector("nav").offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition =
      targetElement.getBoundingClientRect().top +
      window.scrollY -
      windowHeight / 2 +
      targetElement.offsetHeight / 2 -
      navHeight / 2;
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  });
});

function getParameter(url) {
  if (!url) url = window.location.href;
  let idPosition = url.indexOf("#") + 1;
  let sectionToScroll = url.substring(idPosition, idPosition + 4);

  return sectionToScroll;
}

// Scroll to section specified in URL parameter
document.addEventListener("DOMContentLoaded", function () {
  var sectionToScroll = getParameter();
  if (sectionToScroll) {
    var targetElement = document.getElementById(sectionToScroll);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
});


