// Kunduzgi / tungi rejim
const root = document.documentElement;
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

function getSavedTheme() {
  try { return localStorage.getItem("theme"); } catch { return null; }
}
function saveTheme(theme) {
  try { localStorage.setItem("theme", theme); } catch {}
}
function applyTheme(theme) {
  root.dataset.theme = theme;
  const btn = document.querySelector(".theme-toggle");
  if (btn) {
    const label = theme === "dark" ? "Kunduzgi rejimga o'tish" : "Tungi rejimga o'tish";
    btn.setAttribute("aria-label", label);
    btn.title = label;
  }
}

// Sahifa chizilishidan oldin rejimni qo'yamiz, shunda ranglar "miltillamaydi"
applyTheme(getSavedTheme() || (systemDark.matches ? "dark" : "light"));

// JS ishlayotganini CSS'ga bildiramiz: animatsiyali elementlar shundagina yashiriladi
root.classList.add("js");

// Foydalanuvchi o'zi tanlamagan bo'lsa, qurilma sozlamasiga ergashamiz
systemDark.addEventListener("change", (e) => {
  if (!getSavedTheme()) applyTheme(e.matches ? "dark" : "light");
});

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(root.dataset.theme);
  document.querySelector(".theme-toggle").addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    saveTheme(next);
  });

  // Footer'dagi yilni avtomatik yangilash
  document.getElementById("year").textContent = new Date().getFullYear();

  // Rasm topilmasa, o'rniga "SB" bosh harflarini ko'rsatish
  const photo = document.querySelector(".photo img");
  const hidePhoto = () => photo.remove();
  if (photo.complete && photo.naturalWidth === 0) hidePhoto();
  else photo.addEventListener("error", hidePhoto);

  // Bo'limlar ekranga kirganda paydo bo'lish animatsiyasi
  const revealItems = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  revealItems.forEach((el) => observer.observe(el));
});
