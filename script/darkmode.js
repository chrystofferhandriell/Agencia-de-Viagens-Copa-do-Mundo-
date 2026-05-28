// =========================================
// 🌙 DARK MODE / ☀ LIGHT MODE
// WORLD TRAVEL 2026
// =========================================

// botão
const themeToggle = document.getElementById("themeToggle");

// html
const rootElement = document.documentElement;

// =========================================
// DEFINIR TEMA INICIAL
// =========================================

// pega tema salvo
const savedTheme = localStorage.getItem("theme");

// verifica preferência do sistema
const prefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

// tema inicial
const initialTheme =
  savedTheme || (prefersDark ? "dark" : "light");

// aplica tema
setTheme(initialTheme);

// =========================================
// EVENTO DO BOTÃO
// =========================================

themeToggle?.addEventListener("click", () => {

  const currentTheme =
    rootElement.getAttribute("data-theme");

  const newTheme =
    currentTheme === "dark"
      ? "light"
      : "dark";

  setTheme(newTheme);

});

// =========================================
// FUNÇÃO PRINCIPAL
// =========================================

function setTheme(theme){

  // aplica atributo
  rootElement.setAttribute(
    "data-theme",
    theme
  );

  // salva tema
  localStorage.setItem(
    "theme",
    theme
  );

  // atualiza ícone
  updateThemeIcon(theme);

}

// =========================================
// ALTERAR ÍCONE
// =========================================

function updateThemeIcon(theme){

  if(!themeToggle) return;

  themeToggle.innerHTML =
    theme === "dark"
      ? "☀️"
      : "🌙";

}

// =========================================
// ALTERAÇÃO AUTOMÁTICA DO SISTEMA
// =========================================

window.matchMedia(
  "(prefers-color-scheme: dark)"
).addEventListener("change", (event) => {

  // só altera automático
  // se usuário não escolheu manualmente

  if(!localStorage.getItem("theme")){

    const newTheme =
      event.matches
        ? "dark"
        : "light";

    setTheme(newTheme);

  }

});