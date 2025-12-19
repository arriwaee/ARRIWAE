// Hero Typing Effect
const heroName = document.getElementById("hero-name");
const text = "HI I'M ARI PURNOMO";
heroName.innerHTML = "";
let i = 0;
const typeWriter = () => {
  if (i < text.length) {
    const span = document.createElement("span");
    span.innerText = text[i] === " " ? "\u00A0" : text[i];
    span.className = "letter";
    heroName.appendChild(span);
    i++;
    setTimeout(typeWriter, 100);
  } else {
    // Add blinking cursor after typing
    const cursor = document.createElement("span");
    cursor.className = "cursor";
    heroName.appendChild(cursor);
  }
};
typeWriter();

// Mobile Menu
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");

menuBtn.addEventListener("click", () => {
  const isOpen = !mobileMenu.classList.contains("hidden");
  mobileMenu.classList.toggle("hidden");
  menuIcon.setAttribute(
    "d",
    isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"
  );
});

// Header Scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("shadow-lg", window.scrollY > 50);
  header.classList.toggle("py-2", window.scrollY > 50);
  header.classList.toggle("py-4", window.scrollY <= 50);
});

// Register Service Worker for PWA
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js");
}
