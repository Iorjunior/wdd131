const currentYear = new Date().getFullYear();
const yearSpan = document.querySelector("#current-year");
const lastModifiedParagraph = document.querySelector("#last-modified");

if (yearSpan) {
  yearSpan.textContent = currentYear;
}

if (lastModifiedParagraph) {
  lastModifiedParagraph.textContent = `Última modificação: ${document.lastModified}`;
}
