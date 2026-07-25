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

const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Salt Lake Utah",
    localizacao: "Salt Lake City, Utah, Estados Unidos",
    consagracao: "1893, 6 de abril",
    area: 382207,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple5.jpg"
  },
  {
    nomeDoTemplo: "São Paulo Brasil",
    localizacao: "São Paulo, SP, Brasil",
    consagracao: "1978, 30 de outubro",
    area: 59246,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Campinas Brasil",
    localizacao: "Campinas, SP, Brasil",
    consagracao: "2002, 17 de maio",
    area: 48100,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/campinas-brazil/400x250/campinas-brazil-temple-1030031-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Provo City Center",
    localizacao: "Provo, Utah, Estados Unidos",
    consagracao: "2016, 20 de março",
    area: 85084,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/400x250/provo-city-center-temple-1572517-wallpaper.jpg"
  }
];

function getYearFromDedication(dateString) {
  const match = dateString.match(/\b(18|19|20)\d{2}\b/);
  return match ? parseInt(match[0], 10) : 0;
}

function renderTempleCards(templeList) {
  const container = document.getElementById("temple-cards");
  if (!container) return;

  container.innerHTML = "";

  templeList.forEach((templo) => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    const title = document.createElement("h3");
    title.textContent = templo.nomeDoTemplo;

    const details = document.createElement("div");
    details.classList.add("card-details");

    const location = document.createElement("p");
    location.innerHTML = `<span class="label">Localização:</span> ${templo.localizacao}`;

    const dedication = document.createElement("p");
    dedication.innerHTML = `<span class="label">Consagração:</span> ${templo.consagracao}`;

    const area = document.createElement("p");
    area.innerHTML = `<span class="label">Área:</span> ${templo.area.toLocaleString('pt-BR')} sq ft`;

    details.appendChild(location);
    details.appendChild(dedication);
    details.appendChild(area);

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("card-image-container");

    const img = document.createElement("img");
    img.src = templo.urlDaImagem;
    img.alt = templo.nomeDoTemplo;
    img.loading = "lazy";
    img.width = 400;
    img.height = 250;

    imgContainer.appendChild(img);

    card.appendChild(title);
    card.appendChild(details);
    card.appendChild(imgContainer);

    container.appendChild(card);
  });
}

const pageTitle = document.getElementById("page-title");
const navLinks = document.querySelectorAll("#primary-nav a");

function setActiveLink(clickedLink) {
  navLinks.forEach((link) => link.classList.remove("active"));
  if (clickedLink) {
    clickedLink.classList.add("active");
  }
}

document.getElementById("home")?.addEventListener("click", (e) => {
  e.preventDefault();
  setActiveLink(e.currentTarget);
  if (pageTitle) pageTitle.textContent = "Página Inicial";
  renderTempleCards(templos);
});

document.getElementById("old")?.addEventListener("click", (e) => {
  e.preventDefault();
  setActiveLink(e.currentTarget);
  if (pageTitle) pageTitle.textContent = "Templos Antigos";
  const oldTemples = templos.filter((t) => getYearFromDedication(t.consagracao) < 1900);
  renderTempleCards(oldTemples);
});

document.getElementById("new")?.addEventListener("click", (e) => {
  e.preventDefault();
  setActiveLink(e.currentTarget);
  if (pageTitle) pageTitle.textContent = "Templos Novos";
  const newTemples = templos.filter((t) => getYearFromDedication(t.consagracao) > 2000);
  renderTempleCards(newTemples);
});

document.getElementById("large")?.addEventListener("click", (e) => {
  e.preventDefault();
  setActiveLink(e.currentTarget);
  if (pageTitle) pageTitle.textContent = "Templos Grandes";
  const largeTemples = templos.filter((t) => t.area > 90000);
  renderTempleCards(largeTemples);
});

document.getElementById("small")?.addEventListener("click", (e) => {
  e.preventDefault();
  setActiveLink(e.currentTarget);
  if (pageTitle) pageTitle.textContent = "Templos Pequenos";
  const smallTemples = templos.filter((t) => t.area < 10000);
  renderTempleCards(smallTemples);
});

renderTempleCards(templos);
