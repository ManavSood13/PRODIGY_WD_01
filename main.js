const menuBtn = document.getElementById("menu-btn");
const navLinksContainer = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinksContainer.classList.toggle("open");

  const isOpen = navLinksContainer.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinksContainer.addEventListener("click", (e) => {
  navLinksContainer.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ScrollReveal Stuff
const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

// Swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});

// Navbar scroll background color
window.addEventListener('scroll', function() {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Highlight active nav link based on scroll position
const sections = document.querySelectorAll("section");
const navLinksList = document.querySelectorAll(".nav__links a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  const scrollY = window.pageYOffset;

  // Check if we're at the very top of the page
  if (scrollY < 200) {
    currentSection = "home";
  } else if ((window.innerHeight + scrollY) >= document.body.offsetHeight - 10) {
    currentSection = "contact";
  } else {
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });
  }

  navLinksList.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href").replace("#", "");
    if (href === currentSection) {
      link.classList.add("active");
    }
  });
});
const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  // Optional: switch icon if using icons like ri-sun-line and ri-moon-line
  const icon = themeToggleBtn.querySelector("i");
  if (document.body.classList.contains("dark-theme")) {
    icon.setAttribute("class", "ri-sun-line");
  } else {
    icon.setAttribute("class", "ri-moon-line");
  }
});
