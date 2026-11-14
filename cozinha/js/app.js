// =====================================================
// LÓGICA DO SITE — normalmente não precisa editar
// =====================================================

// Lista única com todos os pratos (cada um sabe a sua categoria)
const CARDAPIO = CATEGORIAS.flatMap((categoria) =>
  categoria.pratos.map((prato) => ({ ...prato, categoria }))
);

// Quantidade de cada prato na sacola (posição no CARDAPIO -> quantidade)
const quantidades = CARDAPIO.map(() => 0);

const $ = (id) => document.getElementById(id);
const $$ = (seletor) => document.querySelectorAll(seletor);

// ---------- Ícones (desenhos simples em SVG) ----------
const ICONE = {
  mais: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
  menos: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/></svg>',
  pessoas: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 5.5a3 3 0 0 1 0 5.5M18 14c1.8.8 3 2.7 3 5"/></svg>',
};

// ---------- Utilidades ----------
const centavos = (preco) => Math.round(preco * 100);

function formatarReais(valorEmCentavos) {
  return (valorEmCentavos / 100).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function apenasDigitos(texto) {
  return texto.replace(/\D/g, "");
}

// Formata enquanto digita: (85) 99999-9999 ou (85) 3333-3333
function mascaraTelefone(texto) {
  const d = apenasDigitos(texto).slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function telefoneValido(texto) {
  const n = apenasDigitos(texto).length;
  return n === 10 || n === 11;
}

function formatarData(iso) {
  const [ano, mes, dia] = iso.split("-");
  return `${dia}/${mes}/${ano}`;
}

function escaparHtml(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}

function slug(texto) {
  return texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function servePrato(prato) {
  return prato.serve || prato.categoria.serve || "";
}

// ---------- Pedaços de HTML ----------
function htmlQtd(i) {
  return `<div class="qtd vazio" data-ctrl="${i}">
      <button type="button" class="menos" data-i="${i}" data-acao="menos" aria-label="Remover um">${ICONE.menos}</button>
      <span>0</span>
      <button type="button" class="mais" data-i="${i}" data-acao="mais" aria-label="Adicionar à sacola">${ICONE.mais}</button>
    </div>`;
}

function htmlServe(prato) {
  const serve = servePrato(prato);
  return serve ? `<span class="serve">${ICONE.pessoas} Serve ${escaparHtml(serve)}</span>` : "";
}

function htmlFoto(prato) {
  return `<img src="${escaparHtml(prato.foto)}" alt="${escaparHtml(prato.nome)}" loading="lazy">`;
}

// Cartão em linha (lista do cardápio)
function htmlCardLinha(prato, i) {
  return `<article class="card-linha">
      <div class="foto">${htmlFoto(prato)}</div>
      <div class="corpo">
        <p class="nome">${escaparHtml(prato.nome)}</p>
        ${prato.descricao ? `<p class="desc">${escaparHtml(prato.descricao)}</p>` : ""}
        ${htmlServe(prato)}
        <div class="rodape">
          <span class="preco">${formatarReais(centavos(prato.preco))}</span>
          ${htmlQtd(i)}
        </div>
      </div>
    </article>`;
}

// Cartão de vitrine (destaques que deslizam para o lado)
function htmlCardVitrine(prato, i) {
  return `<article class="card-vitrine">
      <div class="foto">${htmlFoto(prato)}<span class="selo">Natal</span></div>
      <div class="corpo">
        <p class="nome">${escaparHtml(prato.nome)}</p>
        ${htmlServe(prato)}
        <div class="rodape">
          <span class="preco">${formatarReais(centavos(prato.preco))}</span>
          ${htmlQtd(i)}
        </div>
      </div>
    </article>`;
}

function htmlCategoria(categoria) {
  const info = [categoria.porcao, categoria.serve && `Serve ${categoria.serve}`].filter(Boolean).join(" · ");
  const pratos = CARDAPIO.map((prato, i) => (prato.categoria === categoria ? htmlCardLinha(prato, i) : "")).join("");
  return `<div class="categoria" id="cat-${slug(categoria.nome)}">
      <div class="categoria-titulo">
        <h3>${escaparHtml(categoria.nome)}</h3>
        ${info ? `<span class="categoria-info">${escaparHtml(info)}</span>` : ""}
      </div>
      ${categoria.aviso ? `<p class="categoria-aviso">${escaparHtml(categoria.aviso)}</p>` : ""}
      <div class="lista">${pratos}</div>
    </div>`;
}

// ---------- Montagem da página ----------
function montarFormulario() {
  document.title = `${CONFIG.nomeNegocio} – Cardápio`;
  for (const tipo of CONFIG.tiposRefeicao) {
    const opcao = document.createElement("option");
    opcao.value = tipo;
    opcao.textContent = tipo;
    $("tipo").appendChild(opcao);
  }
  // Encomendas com pelo menos 24h de antecedência: a data mínima é amanhã
  const amanha = new Date();
  amanha.setDate(amanha.getDate() + 1);
  amanha.setMinutes(amanha.getMinutes() - amanha.getTimezoneOffset());
  $("data").min = amanha.toISOString().slice(0, 10);
}

function montarCardapio() {
  const natal = CATEGORIAS.filter((c) => c.natal);
  const normais = CATEGORIAS.filter((c) => !c.natal);
  const totalNatal = natal.reduce((soma, c) => soma + c.pratos.length, 0);

  // Círculos de categoria: o 1º leva aos destaques de Natal, os outros às categorias
  const primeiraFoto = (c) => c.pratos[0].foto;
  $("categorias").innerHTML =
    `<button type="button" class="categoria-circulo" data-rolar="secao-natal">
       <img src="${escaparHtml(primeiraFoto(natal[0]))}" alt=""><span>Natal</span>
     </button>` +
    normais
      .map(
        (c) => `<button type="button" class="categoria-circulo" data-rolar="cat-${slug(c.nome)}">
          <img src="${escaparHtml(primeiraFoto(c))}" alt="" loading="lazy"><span>${escaparHtml(c.nome)}</span>
        </button>`
      )
      .join("");

  // Destaques de Natal (vitrine)
  $("natal-destaques").innerHTML = CARDAPIO.map((prato, i) =>
    prato.categoria.natal && prato.destaque ? htmlCardVitrine(prato, i) : ""
  ).join("");
  $("botao-ver-natal").textContent = `Ver todas as ${totalNatal} opções de Natal`;

  // Cardápio 2026
  $("lista-pratos").innerHTML = normais.map(htmlCategoria).join("");

  // Tela de Natal: atalhos + lista completa
  $("chips-natal").innerHTML = natal
    .map((c) => `<button type="button" class="chip" data-rolar="cat-${slug(c.nome)}">${escaparHtml(c.nome.split(" –")[0])}</button>`)
    .join("");
  $("lista-natal").innerHTML = natal.map(htmlCategoria).join("");
}

// ---------- Sacola ----------
function itensEscolhidos() {
  return CARDAPIO.map((prato, i) => ({
    prato,
    i,
    qtd: quantidades[i],
    subtotal: centavos(prato.preco) * quantidades[i],
  })).filter((item) => item.qtd > 0);
}

function opcaoEntrega() {
  const marcada = document.querySelector('input[name="entrega"]:checked');
  return marcada ? CONFIG.opcoesEntrega[Number(marcada.value)] : null;
}

function textoTaxa(opcao) {
  return opcao.taxa === 0 ? "Grátis" : formatarReais(centavos(opcao.taxa));
}

// Soma dos pratos + taxa de entrega (se já escolhida)
function calcularTotais() {
  const itens = itensEscolhidos();
  const subtotal = itens.reduce((soma, item) => soma + item.subtotal, 0);
  const opcao = opcaoEntrega();
  const taxa = opcao ? centavos(opcao.taxa) : 0;
  const totalItens = itens.reduce((soma, item) => soma + item.qtd, 0);
  return { itens, subtotal, opcao, taxa, total: subtotal + taxa, totalItens };
}

function mudarQuantidade(i, mudanca) {
  quantidades[i] = Math.max(0, quantidades[i] + mudanca);
  if (mudanca > 0) {
    avisar(quantidades[i] === 1 ? `${CARDAPIO[i].nome} na sacola` : `${quantidades[i]}x ${CARDAPIO[i].nome}`);
    $$("[data-contador]").forEach((c) => {
      c.classList.remove("pulo");
      void c.offsetWidth; // reinicia a animação
      c.classList.add("pulo");
    });
  }
  atualizarPedido();
}

let temporizadorAviso;
function avisar(texto) {
  const aviso = $("aviso-flutuante");
  aviso.textContent = texto;
  aviso.classList.add("visivel");
  clearTimeout(temporizadorAviso);
  temporizadorAviso = setTimeout(() => aviso.classList.remove("visivel"), 1600);
}

function htmlItemSacola(item) {
  return `<div class="item-sacola">
      <img src="${escaparHtml(item.prato.foto)}" alt="">
      <div class="corpo">
        <p class="nome">${escaparHtml(item.prato.nome)}</p>
        <span class="preco">${formatarReais(item.subtotal)}</span>
      </div>
      ${htmlQtd(item.i)}
    </div>`;
}

function atualizarPedido() {
  const { itens, subtotal, opcao, total, totalItens } = calcularTotais();

  // Conteúdo da sacola
  $("sacola-itens").innerHTML = itens.length
    ? itens.map(htmlItemSacola).join("")
    : `<div class="sacola-vazia"><strong>Sua sacola está vazia</strong>Toque no + dos pratos para adicionar.</div>`;
  $$("#sacola [data-avancar]").forEach((b) => (b.disabled = itens.length === 0));

  // Botões + e − (um prato pode aparecer em vários lugares: lista, vitrine e sacola)
  $$("[data-ctrl]").forEach((ctrl) => {
    const qtd = quantidades[Number(ctrl.dataset.ctrl)];
    ctrl.classList.toggle("vazio", qtd === 0);
    ctrl.querySelector("span").textContent = qtd;
  });

  // Contadores, totais e barras
  $$("[data-contador]").forEach((c) => {
    c.textContent = totalItens;
    if (!c.closest(".icone-sacola")) c.hidden = totalItens === 0;
  });
  $$("[data-total]").forEach((t) => (t.textContent = formatarReais(total)));
  $("checkout-qtd").textContent = `${totalItens} ${totalItens === 1 ? "item" : "itens"}`;
  atualizarBarras();

  // Resumo da tela "Finalizar"
  $("resumo-itens").innerHTML = itens
    .map(
      (item) => `<div class="resumo-item">
        <span>${item.qtd}x ${escaparHtml(item.prato.nome)}</span>
        <span>${formatarReais(item.subtotal)}</span>
      </div>`
    )
    .join("");
  $("resumo-entrega").innerHTML = opcao
    ? `<div class="resumo-linha"><span>Subtotal</span><span>${formatarReais(subtotal)}</span></div>
       <div class="resumo-linha"><span>${escaparHtml(opcao.nome)}</span><span>${textoTaxa(opcao)}</span></div>`
    : "";
  $("resumo-total").textContent = formatarReais(total);
  $("campos-endereco").hidden = !(opcao && opcao.pedeEndereco);
}

function abrirSacola() {
  $("sacola").hidden = false;
  $("sacola-fundo").hidden = false;
  document.body.style.overflow = "hidden";
}

function fecharSacola() {
  $("sacola").hidden = true;
  $("sacola-fundo").hidden = true;
  document.body.style.overflow = "";
}

// ---------- Entrega ou retirada ----------
function montarOpcoesEntrega() {
  $("opcoes-entrega").innerHTML = CONFIG.opcoesEntrega
    .map(
      (opcao, i) => `<label class="opcao-entrega">
        <input type="radio" name="entrega" id="entrega-${i}" value="${i}">
        <span class="nome-opcao">${escaparHtml(opcao.nome)}</span>
        <span class="taxa-opcao">${textoTaxa(opcao)}</span>
      </label>`
    )
    .join("");
  $("opcoes-entrega").addEventListener("change", () => {
    marcarErro("entrega", false);
    atualizarPedido();
  });
}

// ---------- Telefone "mesmo do WhatsApp" ----------
function configurarTelefones() {
  for (const id of ["whatsapp", "telefone"]) {
    $(id).addEventListener("input", (e) => {
      e.target.value = mascaraTelefone(e.target.value);
    });
  }
  $("mesmo-numero").addEventListener("change", (e) => {
    $("telefone").disabled = e.target.checked;
    if (e.target.checked) {
      $("telefone").value = "";
      marcarErro("telefone", false);
    } else {
      $("telefone").focus();
    }
  });
}

// ---------- Validação ----------
function marcarErro(campo, temErro) {
  document.querySelector(`[data-campo="${campo}"]`).classList.toggle("com-erro", temErro);
}

const CAMPOS_POR_TELA = {
  ocasiao: ["tipo", "data", "pessoas"],
  dados: ["entrega", "endereco", "bairro", "nome", "whatsapp", "telefone"],
};

function precisaEndereco() {
  const opcao = opcaoEntrega();
  return Boolean(opcao && opcao.pedeEndereco);
}

function regrasDosCampos() {
  const telefone = $("telefone").value.trim();
  return {
    tipo: $("tipo").value !== "",
    data: $("data").value !== "" && $("data").value >= $("data").min,
    pessoas: Number($("pessoas").value) >= 1,
    entrega: opcaoEntrega() !== null,
    endereco: !precisaEndereco() || $("endereco").value.trim().length >= 3,
    bairro: !precisaEndereco() || $("bairro").value.trim().length >= 2,
    nome: $("nome").value.trim().length >= 3,
    whatsapp: telefoneValido($("whatsapp").value),
    telefone: $("mesmo-numero").checked || telefone === "" || telefoneValido(telefone),
  };
}

function validar(tela) {
  const regras = regrasDosCampos();
  let primeiroErro = null;
  for (const campo of CAMPOS_POR_TELA[tela]) {
    marcarErro(campo, !regras[campo]);
    if (!regras[campo] && !primeiroErro) primeiroErro = campo;
  }
  if (primeiroErro) {
    document.querySelector(`[data-campo="${primeiroErro}"]`).scrollIntoView({ behavior: "smooth", block: "center" });
    return false;
  }
  return true;
}

// Tira o aviso de erro assim que o cliente corrige o campo
function limparErrosAoDigitar() {
  for (const campo of ["nome", "whatsapp", "telefone", "tipo", "data", "pessoas", "endereco", "bairro"]) {
    $(campo).addEventListener("input", () => marcarErro(campo, false));
  }
}

// ---------- Troca de telas ----------
// "inicio" e "natal" = cardápio (com menu inferior); "ocasiao" e "dados" = checkout
let telaAtual = "inicio";
let telaDeOrigem = "inicio"; // de qual tela do cardápio o cliente foi para o checkout
const TITULOS = { natal: "Cardápio de Natal", ocasiao: "Ocasião", dados: "Finalizar pedido" };

function emCheckout() {
  return telaAtual === "ocasiao" || telaAtual === "dados";
}

function mostrarTela(tela) {
  telaAtual = tela;
  const checkout = emCheckout();
  for (const nome of ["inicio", "natal", "ocasiao", "dados"]) $(`tela-${nome}`).hidden = nome !== tela;

  document.body.classList.toggle("modo-checkout", checkout);
  $("etapas").hidden = !checkout;
  $("etapa-ocasiao").className = tela === "ocasiao" ? "ativa" : tela === "dados" ? "feita" : "";
  $("etapa-dados").className = tela === "dados" ? "ativa" : "";

  // Topo: logo na tela inicial; voltar + título nas outras
  $("marca").hidden = tela !== "inicio";
  $("topo-voltar").hidden = tela === "inicio";
  $("topo-titulo").hidden = tela === "inicio";
  $("topo-titulo").textContent = TITULOS[tela] || "";
  $("botao-sacola-topo").hidden = checkout;

  $("menu-inicio").classList.toggle("ativo", tela === "inicio");
  $("menu-natal").classList.toggle("ativo", tela === "natal");
  $("botao-checkout").textContent = tela === "dados" ? "Enviar pedido" : "Avançar";
  if (tela === "dados") atualizarResumoOcasiao();

  atualizarBarras();
  fecharSacola();
  $("aviso-flutuante").classList.remove("visivel");
  window.scrollTo({ top: 0 });
}

function atualizarBarras() {
  const checkout = emCheckout();
  const temItens = quantidades.some((q) => q > 0);
  $("menu-inferior").hidden = checkout;
  $("barra-checkout").hidden = !checkout;
  $("barra-sacola").hidden = checkout || !temItens;
}

function voltar() {
  if (telaAtual === "dados") return mostrarTela("ocasiao");
  if (telaAtual === "ocasiao") {
    mostrarTela(telaDeOrigem);
    return abrirSacola();
  }
  mostrarTela("inicio");
}

function avancarParaOcasiao() {
  if (!quantidades.some((q) => q > 0)) return abrirSacola();
  telaDeOrigem = telaAtual === "natal" ? "natal" : "inicio";
  mostrarTela("ocasiao");
}

function atualizarResumoOcasiao() {
  const pessoas = Number($("pessoas").value);
  $("resumo-ocasiao").textContent =
    `${$("tipo").value} · ${formatarData($("data").value)} · ${pessoas} ${pessoas === 1 ? "pessoa" : "pessoas"}`;
}

function aoClicarCheckout() {
  if (telaAtual === "ocasiao") {
    if (validar("ocasiao")) mostrarTela("dados");
  } else {
    enviarPedido();
  }
}

// ---------- Mensagem do WhatsApp ----------
function montarMensagem() {
  const { itens, opcao, total } = calcularTotais();
  const whatsapp = $("whatsapp").value;
  const telefone = $("mesmo-numero").checked ? whatsapp : $("telefone").value.trim() || "não informado";
  const pessoas = Number($("pessoas").value);
  const obs = $("obs").value.trim();

  const linhas = [
    `*Novo pedido* – ${$("nome").value.trim()}`,
    `WhatsApp: ${whatsapp}`,
    `Telefone: ${telefone}`,
    `Refeição: ${$("tipo").value} – ${formatarData($("data").value)} – ${pessoas} ${pessoas === 1 ? "pessoa" : "pessoas"}`,
    ...itens.map((item) => `${item.qtd}x ${item.prato.nome} – ${formatarReais(item.subtotal)}`),
    `${opcao.nome} – ${textoTaxa(opcao)}`,
  ];
  if (opcao.pedeEndereco) {
    const complemento = $("complemento").value.trim();
    linhas.push(
      `Endereço: ${$("endereco").value.trim()} – ${$("bairro").value.trim()}` + (complemento ? ` (${complemento})` : "")
    );
  }
  if (obs) linhas.push(`Observações: ${obs}`);
  linhas.push(`*Total: ${formatarReais(total)}*`);

  // O toLocaleString usa um espaço especial depois do "R$"; trocamos por espaço normal
  return linhas.join("\n").replace(/ /g, " ");
}

function enviarPedido() {
  if (!validar("dados")) return;
  const url = `https://wa.me/${CONFIG.whatsappDestino}?text=${encodeURIComponent(montarMensagem())}`;
  // Abre o WhatsApp; se o navegador bloquear a nova aba, abre na mesma
  const aba = window.open(url, "_blank");
  if (!aba) window.location.href = url;
}

// ---------- Cliques ----------
function configurarCliques() {
  document.addEventListener("click", (evento) => {
    const alvo = evento.target.closest("button, a");
    if (!alvo) return;

    if (alvo.dataset.acao) {
      mudarQuantidade(Number(alvo.dataset.i), alvo.dataset.acao === "mais" ? 1 : -1);
    } else if (alvo.dataset.ir) {
      mostrarTela(alvo.dataset.ir);
    } else if (alvo.dataset.rolar) {
      $$(".categoria-circulo").forEach((c) => c.classList.toggle("ativa", c === alvo));
      $(alvo.dataset.rolar).scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (alvo.hasAttribute("data-abrir-sacola")) {
      abrirSacola();
    } else if (alvo.hasAttribute("data-avancar")) {
      avancarParaOcasiao();
    }
  });

  $("marca").addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  $("topo-voltar").addEventListener("click", voltar);
  $("fechar-sacola").addEventListener("click", fecharSacola);
  $("sacola-fundo").addEventListener("click", fecharSacola);
  $("continuar-escolhendo").addEventListener("click", fecharSacola);
  $("editar-sacola").addEventListener("click", () => {
    mostrarTela(telaDeOrigem);
    abrirSacola();
  });
  $("botao-checkout").addEventListener("click", aoClicarCheckout);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") fecharSacola();
  });

  // Linha embaixo do topo só depois de rolar
  window.addEventListener(
    "scroll",
    () => document.querySelector(".topo").classList.toggle("com-borda", window.scrollY > 4),
    { passive: true }
  );
}

// ---------- Início ----------
montarFormulario();
montarCardapio();
montarOpcoesEntrega();
configurarTelefones();
limparErrosAoDigitar();
configurarCliques();
atualizarPedido();
mostrarTela("inicio");
