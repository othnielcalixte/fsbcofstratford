"use strict";
const allSections1 = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections1.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

const menuIcon = document.querySelector("#menu-icon");
const navMenu = document.querySelector(".nav-menu");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!menuIcon.contains(e.target) && !navMenu.contains(e.target)) {
    menuIcon.classList.remove("bx-x");
    navMenu.classList.remove("active");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    menuIcon.classList.remove("bx-x");
    navMenu.classList.remove("active");
  }
});
