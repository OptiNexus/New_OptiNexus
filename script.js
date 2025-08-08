const langSwitcher = document.getElementById("langSwitcher");

async function loadLanguage(lang) {
  const response = await fetch(`lang/${lang}.json`);
  const translations = await response.json();
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });
}

langSwitcher.addEventListener("change", (e) => {
  loadLanguage(e.target.value);
});

window.addEventListener("DOMContentLoaded", () => {
  langSwitcher.value = "de"; // تغییر مقدار اولیه dropdown
  loadLanguage("de");        // لود زبان آلمانی
});


const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
