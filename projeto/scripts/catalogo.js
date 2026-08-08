const peixes = [
  {
    id: 'neon-tetra',
    nome: 'Neon Tetra',
    nomeCientifico: 'Paracheirodon innesi',
    img: 'imagens/peixes/neon-tetra.jpg',
    imgAlt: 'Neon Tetra com listras azul neon e vermelha nadando em aquário plantado',
    tamanho: 'pequeno',
    temperamento: 'comunitario',
    phMin: 6.0,
    phMax: 7.0,
    temperatura: '24-28°C',
    descricao: 'Um dos peixes mais populares do aquarismo. Pacífico e ideal para aquários comunitários bem plantados. Forma cardumes vistosos.'
  },
  {
    id: 'guppy',
    nome: 'Guppy',
    nomeCientifico: 'Poecilia reticulata',
    img: 'imagens/peixes/guppy.jpg',
    imgAlt: 'Guppy macho com cauda colorida em aquário',
    tamanho: 'pequeno',
    temperamento: 'comunitario',
    phMin: 6.5,
    phMax: 8.5,
    temperatura: '22-28°C',
    descricao: 'Vivíparo resistente e muito colorido. Perfeito para iniciantes pela facilidade de reprodução e adaptação a diferentes parâmetros de água.'
  },
  {
    id: 'betta',
    nome: 'Betta',
    nomeCientifico: 'Betta splendens',
    img: 'imagens/peixes/betta.jpg',
    imgAlt: 'Betta splendens macho com nadadeiras azuis e vermelhas longas',
    tamanho: 'pequeno',
    temperamento: 'agressivo',
    phMin: 6.0,
    phMax: 7.5,
    temperatura: '24-30°C',
    descricao: 'Conhecido como "peixe-lutador", possui cores deslumbrantes. Machos não devem ser mantidos juntos. Suporta ambiente com menor oxigenação.'
  },
  {
    id: 'acara-bandeira',
    nome: 'Acará-Bandeira',
    nomeCientifico: 'Pterophyllum scalare',
    img: 'imagens/peixes/acara-bandeira.jpg',
    imgAlt: 'Acará-Bandeira com corpo prateado e listras verticais pretas em aquário',
    tamanho: 'medio',
    temperamento: 'semi-agressivo',
    phMin: 6.0,
    phMax: 7.5,
    temperatura: '24-30°C',
    descricao: 'Ciclídeo elegante de formato triangular. Majestoso em aquários altos e plantados. Pode comer peixes muito pequenos.'
  },
  {
    id: 'corydoras',
    nome: 'Corydoras',
    nomeCientifico: 'Corydoras paleatus',
    img: 'imagens/peixes/corydoras.jpg',
    imgAlt: 'Corydoras paleatus no fundo de aquário com substrato',
    tamanho: 'pequeno',
    temperamento: 'comunitario',
    phMin: 6.0,
    phMax: 8.0,
    temperatura: '20-26°C',
    descricao: 'Peixe de fundo essencial em aquários comunitários. Pacífico e eficiente na limpeza do substrato. Prefere grupos de 6 ou mais indivíduos.'
  },
  {
    id: 'pleco-comum',
    nome: 'Pleco Comum',
    nomeCientifico: 'Hypostomus plecostomus',
    img: 'imagens/peixes/pleco.jpg',
    imgAlt: 'Pleco suckermouth no fundo de aquário junto às pedras',
    tamanho: 'grande',
    temperamento: 'comunitario',
    phMin: 6.5,
    phMax: 8.0,
    temperatura: '22-28°C',
    descricao: 'Peixe de fundo com boca sugadora que raspa algas das paredes. Pode crescer bastante (acima de 30 cm). Necessita de aquário espaçoso.'
  },
  {
    id: 'discus',
    nome: 'Discus',
    nomeCientifico: 'Symphysodon discus',
    img: 'imagens/peixes/disco.jpg',
    imgAlt: 'Discus com padrão circular de listras azuis e vermelhas em aquário plantado',
    tamanho: 'medio',
    temperamento: 'comunitario',
    phMin: 5.5,
    phMax: 6.8,
    temperatura: '27-31°C',
    descricao: 'Considerado o "rei do aquário". Exige água muito macia e levemente ácida. Recomendado para aquaristas com mais experiência.'
  },
  {
    id: 'molinesia',
    nome: 'Molinésia',
    nomeCientifico: 'Poecilia sphenops',
    img: 'imagens/peixes/molinesia.jpg',
    imgAlt: 'Molinésia preta nadando em aquário com plantas',
    tamanho: 'pequeno',
    temperamento: 'comunitario',
    phMin: 7.0,
    phMax: 8.5,
    temperatura: '22-28°C',
    descricao: 'Vivíparo robusto e adaptável. Tolera levemente água salobra. Ótimo para aquários comunitários com pH neutro a alcalino.'
  },
  {
    id: 'oscar',
    nome: 'Oscar',
    nomeCientifico: 'Astronotus ocellatus',
    img: 'imagens/peixes/oscar.jpg',
    imgAlt: 'Oscar laranja e preto em aquário de grande porte',
    tamanho: 'grande',
    temperamento: 'agressivo',
    phMin: 6.0,
    phMax: 8.0,
    temperatura: '23-28°C',
    descricao: 'Ciclídeo de grande porte com personalidade forte. Inteligente e reconhece o dono. Necessita de aquário grande e tankmates adequados.'
  },
  {
    id: 'tetras-negro',
    nome: 'Tetra Negro',
    nomeCientifico: 'Gymnocorymbus ternetzi',
    img: 'imagens/peixes/tetra-negro.webp',
    imgAlt: 'Tetra Negro com corpo translúcido e nadadeiras pretas características',
    tamanho: 'pequeno',
    temperamento: 'semi-agressivo',
    phMin: 6.0,
    phMax: 7.5,
    temperatura: '20-26°C',
    descricao: 'Tetra de corpo robusto e nadadeiras traseiras pretas vistosas. Pode morder nadadeiras longas de outros peixes — cuidado na escolha de companheiros.'
  },
  {
    id: 'arapaima',
    nome: 'Arapaima',
    nomeCientifico: 'Arapaima gigas',
    img: 'imagens/peixes/arapaima.jpg',
    imgAlt: 'Arapaima — um dos maiores peixes de água doce do mundo',
    tamanho: 'grande',
    temperamento: 'agressivo',
    phMin: 6.0,
    phMax: 7.0,
    temperatura: '24-30°C',
    descricao: 'Um dos maiores peixes de água doce do mundo, nativo da Amazônia. Apenas para aquários especializados de grande porte. Predador ativo de superfície.'
  },
  {
    id: 'kinguio',
    nome: 'Kinguio',
    nomeCientifico: 'Carassius auratus',
    img: 'imagens/peixes/kinguio.jpg',
    imgAlt: 'Kinguio dourado nadando em aquário de água fria',
    tamanho: 'medio',
    temperamento: 'comunitario',
    phMin: 6.5,
    phMax: 8.0,
    temperatura: '18-24°C',
    descricao: 'Clássico do aquarismo de água fria (não-tropical). Produz muito resíduo, precisando de filtragem robusta. Pode conviver com outros peixes de água fria.'
  }
];

const STORAGE_KEY = 'aquaguide_favoritos';

function carregarFavoritos() {
  try {
    const dados = localStorage.getItem(STORAGE_KEY);
    return dados ? JSON.parse(dados) : [];
  } catch {
    return [];
  }
}

function salvarFavoritos(lista) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
}

function alternarFavorito(id) {
  const lista = carregarFavoritos();

  if (lista.includes(id)) {
    const novaLista = lista.filter(favId => favId !== id);
    salvarFavoritos(novaLista);
    return false;
  } else {
    lista.push(id);
    salvarFavoritos(lista);
    return true;
  }
}

function obterTemperamento(temp) {
  if (temp === 'comunitario') {
    return { label: '🕊️ Comunitário', classe: 'temperamento-comunitario' };
  } else if (temp === 'semi-agressivo') {
    return { label: '⚠️ Semi-agressivo', classe: 'temperamento-semi-agressivo' };
  } else {
    return { label: '⚔️ Agressivo', classe: 'temperamento-agressivo' };
  }
}

function obterTamanhoLabel(tam) {
  if (tam === 'pequeno') return '📏 Pequeno';
  if (tam === 'medio')   return '📏 Médio';
  return '📏 Grande';
}

function criarCardPeixe(peixe, isFavorito) {
  const temp = obterTemperamento(peixe.temperamento);
  const tamLabel = obterTamanhoLabel(peixe.tamanho);
  const favClass = isFavorito ? 'btn-fav favorited' : 'btn-fav';
  const favLabel = isFavorito ? 'Favoritado' : 'Favoritar';

  return `
    <article class="fish-card" data-id="${peixe.id}" data-tamanho="${peixe.tamanho}" data-temperamento="${peixe.temperamento}" data-ph-min="${peixe.phMin}" data-ph-max="${peixe.phMax}">
      <div class="fish-img-wrapper">
        <img
          src="${peixe.img}"
          alt="${peixe.imgAlt}"
          loading="lazy"
          width="400" height="300"
          onerror="this.src='imagens/aquaguide-logo.jpg'"
        >
      </div>
      <div class="fish-card-body">
        <h3>${peixe.nome}</h3>
        <p class="fish-scientific">${peixe.nomeCientifico}</p>
        <div class="fish-meta-tags">
          <span class="tag ${temp.classe}">${temp.label}</span>
          <span class="tag">${tamLabel}</span>
        </div>
        <div class="fish-params">
          <div class="param-item">
            <strong>pH</strong>
            <span>${peixe.phMin}–${peixe.phMax}</span>
          </div>
          <div class="param-item">
            <strong>Temperatura</strong>
            <span>${peixe.temperatura}</span>
          </div>
        </div>
        <p class="fish-description">${peixe.descricao}</p>
      </div>
      <div class="fish-card-footer">
        <button
          class="${favClass}"
          id="fav-btn-${peixe.id}"
          data-peixe-id="${peixe.id}"
          aria-label="${isFavorito ? 'Remover ' + peixe.nome + ' dos favoritos' : 'Adicionar ' + peixe.nome + ' aos favoritos'}"
          aria-pressed="${isFavorito}"
        >
          <span class="fav-icon">${isFavorito ? '★' : '☆'}</span>
          ${favLabel}
        </button>
      </div>
    </article>
  `;
}

const gridEl   = document.getElementById('fish-grid');
const countEl  = document.getElementById('results-count');
const resetBtn = document.getElementById('filter-reset-btn');

const filtros = {
  tamanho: 'todos',
  temperamento: 'todos',
  ph: 'todos'
};

function renderPeixes(lista) {
  const favoritos = carregarFavoritos();

  if (lista.length === 0) {
    gridEl.innerHTML = `
      <div class="no-results">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          <line x1="8" y1="11" x2="14" y2="11"/>
        </svg>
        <h3>Nenhuma espécie encontrada</h3>
        <p>Tente remover ou alterar os filtros aplicados.</p>
      </div>
    `;
    countEl.innerHTML = '<strong>0</strong> espécies encontradas';
    return;
  }

  gridEl.innerHTML = lista
    .map(peixe => criarCardPeixe(peixe, favoritos.includes(peixe.id)))
    .join('');

  countEl.innerHTML = `<strong>${lista.length}</strong> espécie${lista.length !== 1 ? 's' : ''} encontrada${lista.length !== 1 ? 's' : ''}`;

  gridEl.querySelectorAll('.btn-fav').forEach(btn => {
    btn.addEventListener('click', aoClicarFavoritar);
  });
}

function aplicarFiltros() {
  const resultado = peixes.filter(peixe => {
    const passaTamanho = filtros.tamanho === 'todos' || peixe.tamanho === filtros.tamanho;
    const passaTemp = filtros.temperamento === 'todos' || peixe.temperamento === filtros.temperamento;

    let passaPh = true;
    if (filtros.ph === 'acido')    passaPh = peixe.phMax <= 7.0;
    if (filtros.ph === 'neutro')   passaPh = peixe.phMin <= 7.2 && peixe.phMax >= 6.8;
    if (filtros.ph === 'alcalino') passaPh = peixe.phMin >= 7.0;

    return passaTamanho && passaTemp && passaPh;
  });

  renderPeixes(resultado);
}

function aoClicarFavoritar(e) {
  const btn = e.currentTarget;
  const id  = btn.dataset.peixeId;

  const agoraFavorito = alternarFavorito(id);

  if (agoraFavorito) {
    btn.classList.add('favorited');
    btn.setAttribute('aria-pressed', 'true');
    btn.querySelector('.fav-icon').textContent = '★';
    btn.lastChild.textContent = ' Favoritado';
    const peixe = peixes.find(p => p.id === id);
    btn.setAttribute('aria-label', `Remover ${peixe ? peixe.nome : ''} dos favoritos`);
  } else {
    btn.classList.remove('favorited');
    btn.setAttribute('aria-pressed', 'false');
    btn.querySelector('.fav-icon').textContent = '☆';
    btn.lastChild.textContent = ' Favoritar';
    const peixe = peixes.find(p => p.id === id);
    btn.setAttribute('aria-label', `Adicionar ${peixe ? peixe.nome : ''} aos favoritos`);
  }
}

function configurarFiltros() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const grupo = btn.dataset.grupo;
      const valor = btn.dataset.valor;

      filtros[grupo] = valor;

      document.querySelectorAll(`.filter-btn[data-grupo="${grupo}"]`).forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      aplicarFiltros();
    });
  });

  resetBtn.addEventListener('click', () => {
    filtros.tamanho = 'todos';
    filtros.temperamento = 'todos';
    filtros.ph = 'todos';

    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    });

    document.querySelectorAll('.filter-btn[data-valor="todos"]').forEach(btn => {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    });

    aplicarFiltros();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  configurarFiltros();
  renderPeixes(peixes);
  document.getElementById('footer-year').textContent = new Date().getFullYear();

  const navBtn  = document.getElementById('nav-toggle-btn');
  const siteNav = document.getElementById('site-nav');
  if (navBtn && siteNav) {
    navBtn.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('open');
      navBtn.setAttribute('aria-expanded', isOpen);
    });
  }
});
