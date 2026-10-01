const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const menuLabel = document.querySelector(".menu-label");

function closeNavigation(returnFocus = false) {
  document.body.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
  menuLabel.textContent = "Menu";
  if (returnFocus) navToggle.focus();
}

navToggle.addEventListener("click", () => {
  const open = document.body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(open));
  menuLabel.textContent = open ? "Close" : "Menu";
});
nav
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", () => closeNavigation()));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && document.body.classList.contains("nav-open"))
    closeNavigation(true);
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeNavigation();
});
window.matchMedia("(min-width: 701px)").addEventListener("change", (event) => {
  if (event.matches) closeNavigation();
});
document.querySelector("#year").textContent = new Date().getFullYear();

const lightbox = document.querySelector(".lightbox");
const photo = lightbox.querySelector(".lightbox-photo");
const caption = lightbox.querySelector("#lightbox-caption");
let lastPhotoLink;

document.querySelectorAll(".gallery-item").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey ||
      typeof lightbox.showModal !== "function"
    )
      return;
    event.preventDefault();
    lastPhotoLink = link;
    photo.src = link.href;
    photo.alt = link.querySelector("img").alt;
    caption.textContent = link.dataset.caption;
    lightbox.showModal();
  });
});
lightbox
  .querySelector(".lightbox-close")
  .addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (event) => {
  const rect = lightbox.getBoundingClientRect();
  if (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  )
    lightbox.close();
});
lightbox.addEventListener("close", () => {
  photo.removeAttribute("src");
  lastPhotoLink?.focus();
});
