const currentYear = new Date().getFullYear();
const yearSpan = document.getElementById("current-year");
const lastModifiedParagraph = document.getElementById("last-modified");

if (yearSpan) {
  yearSpan.textContent = currentYear;
}

if (lastModifiedParagraph) {
  lastModifiedParagraph.textContent = `Última modificação: ${document.lastModified}`;
}

const hamburgerButton = document.getElementById("menu-toggle");
const navigationMenu = document.getElementById("primary-nav");

if (hamburgerButton && navigationMenu) {
  hamburgerButton.addEventListener("click", () => {
    navigationMenu.classList.toggle("open");
    hamburgerButton.classList.toggle("open");
    
    if (hamburgerButton.classList.contains("open")) {
      hamburgerButton.innerHTML = "&#10006;";
      hamburgerButton.setAttribute("aria-label", "Fechar menu");
    } else {
      hamburgerButton.innerHTML = "&#9776;";
      hamburgerButton.setAttribute("aria-label", "Abrir menu");
    }
  });
}
