const STORAGE_KEY = 'aquaguide_favoritos';

const peixes = [
  { id: 'neon-tetra', nome: 'Neon Tetra', nomeCientifico: 'Paracheirodon innesi', img: 'imagens/peixes/neon-tetra.jpg', imgAlt: 'Neon Tetra com listras azul e vermelha', tamanho: 'Pequeno', temperamento: 'Comunitário', phMin: 6.0, phMax: 7.0 },
  { id: 'guppy', nome: 'Guppy', nomeCientifico: 'Poecilia reticulata', img: 'imagens/peixes/guppy.jpg', imgAlt: 'Guppy macho colorido', tamanho: 'Pequeno', temperamento: 'Comunitário', phMin: 6.5, phMax: 8.5 },
  { id: 'betta', nome: 'Betta', nomeCientifico: 'Betta splendens', img: 'imagens/peixes/betta.jpg', imgAlt: 'Betta splendens macho azul e vermelho', tamanho: 'Pequeno', temperamento: 'Agressivo', phMin: 6.0, phMax: 7.5 },
  { id: 'acara-bandeira', nome: 'Acará-Bandeira', nomeCientifico: 'Pterophyllum scalare', img: 'imagens/peixes/acara-bandeira.jpg', imgAlt: 'Acará-Bandeira prateado com listras', tamanho: 'Médio', temperamento: 'Semi-agressivo', phMin: 6.0, phMax: 7.5 },
  { id: 'corydoras', nome: 'Corydoras', nomeCientifico: 'Corydoras paleatus', img: 'imagens/peixes/corydoras.jpg', imgAlt: 'Corydoras no fundo do aquário', tamanho: 'Pequeno', temperamento: 'Comunitário', phMin: 6.0, phMax: 8.0 },
  { id: 'pleco-comum', nome: 'Pleco Comum', nomeCientifico: 'Hypostomus plecostomus', img: 'imagens/peixes/pleco.jpg',   imgAlt: 'Pleco sugador no fundo de aquário', tamanho: 'Grande', temperamento: 'Comunitário', phMin: 6.5, phMax: 8.0 },
  { id: 'discus', nome: 'Discus', nomeCientifico: 'Symphysodon discus', img: 'imagens/peixes/disco.jpg', imgAlt: 'Discus com listras azuis em aquário plantado', tamanho: 'Médio', temperamento: 'Comunitário', phMin: 5.5, phMax: 6.8 },
  { id: 'molinesia', nome: 'Molinésia', nomeCientifico: 'Poecilia sphenops', img: 'imagens/peixes/molinesia.jpg', imgAlt: 'Molinésia preta em aquário', tamanho: 'Pequeno', temperamento: 'Comunitário',phMin: 7.0, phMax: 8.5 },
  { id: 'oscar', nome: 'Oscar', nomeCientifico: 'Astronotus ocellatus', img: 'imagens/peixes/oscar.jpg', imgAlt: 'Oscar laranja e preto em aquário grande', tamanho: 'Grande', temperamento: 'Agressivo', phMin: 6.0, phMax: 8.0 },
  { id: 'tetras-negro', nome: 'Tetra Negro', nomeCientifico: 'Gymnocorymbus ternetzi', img: 'imagens/peixes/tetra-negro.webp', imgAlt: 'Tetra Negro com nadadeiras pretas vistosas', tamanho: 'Pequeno', temperamento: 'Semi-agressivo',  phMin: 6.0, phMax: 7.5 },
  { id: 'arapaima', nome: 'Arapaima', nomeCientifico: 'Arapaima gigas', img: 'imagens/peixes/arapaima.jpg', imgAlt: 'Arapaima, um dos maiores peixes de água doce', tamanho: 'Grande',  temperamento: 'Agressivo', phMin: 6.0, phMax: 7.0 },
  { id: 'kinguio', nome: 'Kinguio', nomeCientifico: 'Carassius auratus', img: 'imagens/peixes/kinguio.jpg', imgAlt: 'Kinguio dourado em aquário de água fria', tamanho: 'Médio', temperamento: 'Comunitário', phMin: 6.5, phMax: 8.0 }
];

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

function removerFavorito(id) {
  const lista = carregarFavoritos();
  const novaLista = lista.filter(favId => favId !== id);
  salvarFavoritos(novaLista);
}

const favListEl  = document.getElementById('favorites-list');
const favCountEl = document.getElementById('fav-count');

function criarItemFavorito(peixe) {
  return `
    <li class="fav-item" data-id="${peixe.id}">
      <img
        src="${peixe.img}"
        alt="${peixe.imgAlt}"
        loading="lazy"
        width="72" height="72"
        onerror="this.src='imagens/aquaguide-logo.jpg'"
      >
      <div class="fav-item-info">
        <h3>${peixe.nome}</h3>
        <p>${peixe.nomeCientifico} • ${peixe.tamanho} • ${peixe.temperamento} • pH ${peixe.phMin}–${peixe.phMax}</p>
      </div>
      <button
        class="btn btn-danger"
        data-remove-id="${peixe.id}"
        aria-label="Remover ${peixe.nome} dos favoritos"
        id="remove-fav-${peixe.id}"
      >
        🗑️ Remover
      </button>
    </li>
  `;
}

function renderFavoritos() {
  const ids = carregarFavoritos();
  const favoritados = peixes.filter(p => ids.includes(p.id));

  if (favCountEl) {
    favCountEl.textContent = favoritados.length > 0 ? favoritados.length : '';
    favCountEl.style.display = favoritados.length > 0 ? 'inline-flex' : 'none';
  }

  if (favoritados.length === 0) {
    favListEl.innerHTML = `
      <div class="favorites-empty" role="status" aria-live="polite">
        <div class="empty-icon" aria-hidden="true">🐠</div>
        <h3>Nenhum favorito ainda</h3>
        <p>Acesse o catálogo, explore as espécies e marque suas preferidas com ⭐.</p>
        <a href="catalogo.html" class="btn btn-primary">🔍 Ir para o Catálogo</a>
      </div>
    `;
  } else {
    favListEl.innerHTML = `
      <ul aria-label="Seus peixes favoritos" style="list-style:none; padding:0; display:flex; flex-direction:column; gap:1rem;">
        ${favoritados.map(criarItemFavorito).join('')}
      </ul>
    `;

    favListEl.querySelectorAll('[data-remove-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.removeId;
        removerFavorito(id);
        renderFavoritos();
      });
    });
  }
}

const form       = document.getElementById('suggestion-form');
const successMsg = document.getElementById('form-success');

function aoEnviarFormulario(e) {
  e.preventDefault();

  const phMin = parseFloat(document.getElementById('ph-min').value);
  const phMax = parseFloat(document.getElementById('ph-max').value);

  if (phMin >= phMax) {
    alert('⚠️ O pH mínimo deve ser menor que o pH máximo.');
    return;
  }

  if (phMin < 0 || phMax > 14) {
    alert('⚠️ Os valores de pH devem estar entre 0 e 14.');
    return;
  }

  const sugestao = {
    nomeComum: document.getElementById('nome-comum').value.trim(),
    nomeCientifico: document.getElementById('nome-cientifico').value.trim(),
    tamanho: parseFloat(document.getElementById('tamanho-cm').value),
    temperamento: document.getElementById('temperamento-select').value,
    phMin,
    phMax,
    observacoes: document.getElementById('observacoes').value.trim(),
    email: document.getElementById('email').value.trim(),
    dataSugestao: new Date().toISOString()
  };

  try {
    const sugestoesAntigas = JSON.parse(localStorage.getItem('aquaguide_sugestoes') || '[]');
    sugestoesAntigas.push(sugestao);
    localStorage.setItem('aquaguide_sugestoes', JSON.stringify(sugestoesAntigas));
  } catch (err) {
    console.warn('Não foi possível salvar a sugestão no localStorage:', err);
  }

  form.style.display = 'none';
  successMsg.classList.add('visible');

  const nomeComum = sugestao.nomeComum;
  document.getElementById('success-fish-name').textContent = `"${nomeComum}"`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderFavoritos();

  if (form) {
    form.addEventListener('submit', aoEnviarFormulario);
  }

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
