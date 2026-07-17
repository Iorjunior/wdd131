const yearSpan = document.querySelector("#current-year");
const lastModifiedEl = document.querySelector("#last-modified");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (lastModifiedEl) {
  lastModifiedEl.textContent = `Última modificação: ${document.lastModified}`;
}

const temperatura = 8;
const velocidadeVento = 20;

function calcularSensacaoTermica(tempC, ventoKmh) {
  return (13.12 + 0.6215 * tempC - 11.37 * Math.pow(ventoKmh, 0.16) + 0.3965 * tempC * Math.pow(ventoKmh, 0.16)).toFixed(1);
}

const sensacaoEl = document.querySelector("#sensacao-termica");

if (sensacaoEl) {
  if (temperatura <= 10 && velocidadeVento > 4.8) {
    const sensacao = calcularSensacaoTermica(temperatura, velocidadeVento);
    sensacaoEl.textContent = `${sensacao} °C`;
  } else {
    sensacaoEl.textContent = "N/A";
  }
}
