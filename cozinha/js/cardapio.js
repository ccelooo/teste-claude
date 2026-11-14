// =====================================================
// CARDÁPIO — Delícias do Plin (2026)
// =====================================================
// O cardápio é dividido em CATEGORIAS. Cada categoria tem:
//   nome ....... título que aparece no site
//   natal ...... true = faz parte do Cardápio de Natal
//   porcao ..... tamanho da porção, ex.: "Porções de 1 kg" (opcional)
//   serve ...... quantas pessoas servem (vale para todos os pratos da categoria)
//   aviso ...... observação da categoria (opcional)
//   pratos ..... lista de pratos
//
// Cada prato tem:
//   nome, descricao, preco (use ponto: 32.50)
//   foto ....... caminho da foto, ex.: "img/pratos/feijoada.jpg"
//   serve ...... quantas pessoas serve (opcional; se vazio, usa o da categoria)
//   destaque ... true = aparece no topo da página inicial (só pratos de Natal)
//
// Para:
//  - mudar preço ........ altere "preco"
//  - novo prato ......... copie um bloco { ... } inteiro e mude os dados
//  - tirar um prato ..... apague o bloco { ... } dele
// ATENÇÃO: aqui vai só o PREÇO FINAL. Nunca coloque custos ou margem.

const CATEGORIAS = [
  // ================= CARDÁPIO DE NATAL =================
  {
    nome: "Kits natalinos – ceias completas",
    natal: true,
    aviso: "Arroz: branco, alho frito ou natalino. Farofa: natalina, cebola ou alho. O salpicão pode ser trocado por outra salada. Sobremesa: mousse ou Delícia de Abacaxi.",
    pratos: [
      {
        nome: "Kit 1 – Ceia para até 10 pessoas",
        descricao: "1 ave natalina, 1 kg de arroz, 1 kg de farofa, 1 kg de salpicão, 1 sobremesa, 10 rabanadas e 1 refrigerante.",
        preco: 480.00,
        serve: "até 10 pessoas",
        foto: "img/pratos/natal-kit-1.jpg",
        destaque: true,
      },
      {
        nome: "Kit 2 – Ceia para até 15 pessoas",
        descricao: "1 ave natalina, 1,5 kg de arroz, 1,5 kg de farofa natalina, 1,5 kg de salpicão, 1 sobremesa, 15 rabanadas e 1 refrigerante.",
        preco: 500.00,
        serve: "até 15 pessoas",
        foto: "img/pratos/natal-kit-2.jpg",
        destaque: true,
      },
      {
        nome: "Kit 3 – Ceia com pernil (até 15 pessoas)",
        descricao: "1 pernil suíno, 1,5 kg de arroz, 1,5 kg de farofa natalina, 1,5 kg de salpicão, 1 sobremesa, 15 rabanadas e 1 refrigerante.",
        preco: 520.00,
        serve: "até 15 pessoas",
        foto: "img/pratos/natal-kit-3.jpg",
        destaque: true,
      },
      {
        nome: "Kit 4 – Ceia com chester (até 15 pessoas)",
        descricao: "1 chester, 1,5 kg de arroz, 1,5 kg de farofa natalina, 1,5 kg de salpicão, 1 sobremesa, 15 rabanadas e 1 refrigerante.",
        preco: 510.00,
        serve: "até 15 pessoas",
        foto: "img/pratos/natal-kit-4.jpg",
        destaque: true,
      },
      {
        nome: "Kit 5 – Ceia com peru (até 15 pessoas)",
        descricao: "1 peru, 1,5 kg de arroz, 1,5 kg de farofa natalina, 1,5 kg de salpicão, 1 sobremesa, 15 rabanadas e 1 refrigerante.",
        preco: 550.00,
        serve: "até 15 pessoas",
        foto: "img/pratos/natal-kit-5.jpg",
        destaque: true,
      },
      {
        nome: "Kit 6 – Ceia para até 30 pessoas",
        descricao: "1 ave + 1 pernil, 2 kg de arroz, 2 kg de farofa natalina, 2 kg de salpicão, 2 sobremesas, 30 rabanadas e 2 refrigerantes.",
        preco: 700.00,
        serve: "até 30 pessoas",
        foto: "img/pratos/natal-kit-6.jpg",
      },
    ],
  },
  {
    nome: "Pratos principais de Natal",
    natal: true,
    serve: "10 a 12 pessoas",
    aviso: "Precisa de uma porção menor ou maior? Escreva nas observações que a gente prepara.",
    pratos: [
      {
        nome: "Camarão Internacional (Natal)",
        descricao: "Arroz cremoso ao molho quatro queijos e camarões refogados no azeite.",
        preco: 230.00,
        foto: "img/pratos/natal-camarao-internacional.jpg",
      },
      {
        nome: "Peixe à Delícia (Natal)",
        descricao: "Filé de peixe frito ao molho quatro queijos. Acompanha arroz branco e batata palha.",
        preco: 210.00,
        foto: "img/pratos/peixe-a-delicia.jpg",
      },
      {
        nome: "Salmão grelhado ao molho",
        descricao: "Postas de salmão refogadas no azeite, com alho-poró e molho três queijos. Acompanha arroz e batata palha.",
        preco: 280.00,
        foto: "img/pratos/natal-salmao.jpg",
      },
      {
        nome: "Filé de peixe com alcaparras",
        descricao: "Filé de peixe frito com alcaparras. Acompanha arroz branco e batata palha.",
        preco: 220.00,
        foto: "img/pratos/file-de-peixe-ao-molho-branco.jpg",
      },
      {
        nome: "Carne de caranguejo (Natal)",
        descricao: "1 kg preparado com azeite de dendê e leite de coco.",
        preco: 200.00,
        foto: "img/pratos/natal-caranguejo.jpg",
      },
      {
        nome: "Escondidinho de bacalhau",
        descricao: "Purê de batatas e lascas de bacalhau refogado, gratinado no forno com queijo muçarela.",
        preco: 250.00,
        foto: "img/pratos/natal-escondidinho-bacalhau.jpg",
      },
      {
        nome: "Camarão aos quatro queijos",
        descricao: "Camarões refogados no azeite com molho quatro queijos. Acompanha arroz branco e batata palha.",
        preco: 200.00,
        foto: "img/pratos/strogonoff-de-camarao.jpg",
      },
      {
        nome: "Lasanha de camarão (Natal)",
        descricao: "Massa com molho de camarão aos quatro queijos, intercalada com queijo e presunto, gratinada com queijo muçarela.",
        preco: 230.00,
        foto: "img/pratos/natal-lasanha-camarao.jpg",
      },
      {
        nome: "Carne de sol sertaneja",
        descricao: "Carne de sol refogada na cebola roxa, com molho quatro queijos e gratinada com muçarela. Acompanha arroz branco e batata palha.",
        preco: 230.00,
        foto: "img/pratos/carne-de-sol-trinchada.jpg",
      },
      {
        nome: "Lasanha à bolonhesa (Natal)",
        descricao: "Molho bolonhesa intercalado com massa, queijo muçarela e presunto, gratinada com queijo muçarela.",
        preco: 200.00,
        foto: "img/pratos/natal-lasanha-bolonhesa.jpg",
      },
      {
        nome: "Lasanha de frango (Natal)",
        descricao: "Frango ao molho quatro queijos, intercalado com massa, queijo muçarela e presunto, gratinada com muçarela.",
        preco: 160.00,
        foto: "img/pratos/natal-lasanha-frango.jpg",
      },
      // ⚠️ No PDF, a lasanha vegana leva presunto. Confirmar com o tio.
      {
        nome: "Lasanha vegana (quatro queijos)",
        descricao: "Molho quatro queijos intercalado com massa, queijo muçarela e presunto, gratinada com queijo muçarela.",
        preco: 150.00,
        foto: "img/pratos/lasanha-de-frango.jpg",
      },
      {
        nome: "Fricassê de frango (Natal)",
        descricao: "Frango desfiado e refogado ao molho de milho, creme de leite e requeijão. Acompanha arroz branco e batata palha.",
        preco: 150.00,
        foto: "img/pratos/natal-fricasse.jpg",
      },
      {
        nome: "Escondidinho de carne de sol (Natal)",
        descricao: "Purê de batatas e carne de sol refogada na manteiga da terra e cebola roxa, gratinado com queijo muçarela.",
        preco: 180.00,
        foto: "img/pratos/escondidinho-de-carne-de-sol.jpg",
      },
      {
        nome: "Iscas de carne ao molho funghi",
        descricao: "Tiras de alcatra refogadas no azeite e cebola roxa, com molho de vinho e funghi.",
        preco: 260.00,
        foto: "img/pratos/natal-iscas-funghi.jpg",
      },
      {
        nome: "Lagarto recheado ao molho madeira",
        descricao: "Lagarto recheado com calabresa, cenoura e bacon, regado ao molho madeira. Acompanha arroz branco e batata palha.",
        preco: 300.00,
        foto: "img/pratos/natal-lagarto.jpg",
      },
      {
        nome: "Lombo suíno ao molho barbecue",
        descricao: "Lombo suíno assado no forno, regado ao molho barbecue. Acompanha arroz branco e batata palha.",
        preco: 250.00,
        foto: "img/pratos/natal-kit-3.jpg",
      },
      // ⚠️ Preço solto no PDF (R$ 160). Confirmar com o tio.
      {
        nome: "Frango à parmegiana (Natal)",
        descricao: "Sobrecoxas desossadas à milanesa com molho de tomate, gratinadas com queijo muçarela. Acompanha arroz branco e purê.",
        preco: 160.00,
        foto: "img/pratos/natal-frango-parmegiana.jpg",
      },
      {
        nome: "Bife à parmegiana (Natal)",
        descricao: "Bifes à milanesa com molho de tomate, gratinados com queijo muçarela. Acompanha arroz branco e purê.",
        preco: 180.00,
        foto: "img/pratos/parmegiana-de-carne.jpg",
      },
      {
        nome: "Surpresa de frango",
        descricao: "Cubos de frango ao molho quatro queijos, presunto e azeitona, gratinado com queijo muçarela.",
        preco: 140.00,
        foto: "img/pratos/natal-surpresa-frango.jpg",
      },
    ],
  },
  {
    nome: "Sobremesas de Natal",
    natal: true,
    pratos: [
      {
        nome: "Manjar",
        descricao: "",
        preco: 120.00,
        serve: "até 12 pessoas",
        foto: "img/pratos/natal-manjar.jpg",
      },
      {
        nome: "Taça da Felicidade",
        descricao: "",
        preco: 170.00,
        serve: "até 12 pessoas",
        foto: "img/pratos/natal-taca-felicidade.jpg",
      },
      {
        nome: "Torta Sonho de Valsa",
        descricao: "",
        preco: 130.00,
        serve: "até 12 pessoas",
        foto: "img/pratos/natal-torta-sonho-de-valsa.jpg",
      },
      {
        nome: "Torta Prestígio (Natal)",
        descricao: "",
        preco: 130.00,
        serve: "até 12 pessoas",
        foto: "img/pratos/natal-torta-prestigio.jpg",
      },
      {
        nome: "Cocada de forno (Natal)",
        descricao: "",
        preco: 120.00,
        serve: "até 12 pessoas",
        foto: "img/pratos/natal-cocada.jpg",
      },
      {
        nome: "Delícia de Abacaxi",
        descricao: "",
        preco: 80.00,
        serve: "até 12 pessoas",
        foto: "img/pratos/natal-delicia-abacaxi.jpg",
      },
      {
        nome: "Delícia de Maracujá",
        descricao: "",
        preco: 90.00,
        serve: "até 10 pessoas",
        foto: "img/pratos/natal-delicia-maracuja.jpg",
      },
      {
        nome: "Delícia de Limão",
        descricao: "",
        preco: 90.00,
        serve: "até 10 pessoas",
        foto: "img/pratos/natal-delicia-limao.jpg",
      },
      {
        nome: "Delícia de Cajá",
        descricao: "",
        preco: 90.00,
        serve: "até 10 pessoas",
        foto: "img/pratos/natal-delicia-caja.jpg",
      },
    ],
  },

  // ================= CARDÁPIO 2026 =================
  {
    // ⚠️ "Serve" do arroz e do baião é estimativa. Confirmar com o tio.
    nome: "Arroz",
    porcao: "Porções de 1 kg",
    serve: "6 a 8 pessoas",
    pratos: [
      {
        nome: "Arroz branco",
        descricao: "Arroz branco preparado com alho refogado e azeite.",
        preco: 40.00,
        foto: "img/pratos/arroz-branco.jpg",
      },
      {
        nome: "Arroz à grega",
        descricao: "Arroz com cebola, alho, cenoura, pimentão, presunto, milho verde e ervilha.",
        preco: 50.00,
        foto: "img/pratos/arroz-a-grega.jpg",
      },
      {
        nome: "Arroz com brócolis",
        descricao: "Arroz preparado com alho, cebola e brócolis.",
        preco: 50.00,
        foto: "img/pratos/arroz-com-brocolis.jpg",
      },
      {
        nome: "Arroz carreteiro",
        descricao: "Arroz preparado com cebola, alho, bacon, calabresa e carne seca.",
        preco: 60.00,
        foto: "img/pratos/arroz-carreteiro.jpg",
      },
      {
        nome: "Arroz à piamontese",
        descricao: "Arroz preparado com alho, cebola, presunto, queijo, champignon e creme de leite.",
        preco: 65.00,
        foto: "img/pratos/arroz-a-piamontese.jpg",
      },
    ],
  },
  {
    nome: "Baião de dois e feijoada",
    porcao: "Porções de 1 kg",
    serve: "4 a 5 pessoas",
    pratos: [
      {
        nome: "Baião simples",
        descricao: "Baião de dois com feijão-fradinho, cebola, alho e cheiro-verde.",
        preco: 40.00,
        foto: "img/pratos/baiao-simples.jpg",
      },
      {
        nome: "Baião cremoso",
        descricao: "Baião de dois com feijão-fradinho, cebola, alho, cheiro-verde, queijo coalho, requeijão e creme de leite (leite de coco opcional).",
        preco: 60.00,
        foto: "img/pratos/baiao-cremoso.jpg",
      },
      {
        nome: "Baião temperado",
        descricao: "Baião de dois com feijão-fradinho, cebola, alho, cheiro-verde, bacon, calabresa, torresmo e queijo coalho.",
        preco: 65.00,
        foto: "img/pratos/baiao-temperado.jpg",
      },
      {
        nome: "Baião africano",
        descricao: "Baião de dois com feijão-preto, cebola, alho, cheiro-verde, bacon e calabresa.",
        preco: 60.00,
        foto: "img/pratos/baiao-africano.jpg",
      },
      {
        nome: "Feijoada baiana",
        descricao: "Feijoada com feijão-carioca, cebola, alho, cheiro-verde e ingredientes de feijoada.",
        preco: 70.00,
        foto: "img/pratos/feijoada-baiana.jpg",
      },
    ],
  },
  {
    nome: "Feijoada completa",
    aviso: "Acompanha feijoada, arroz, farofa, couve-manteiga e laranja. Temos pacotes especiais para eventos de pequeno e médio porte.",
    pratos: [
      {
        nome: "Feijoada completa – 2 pessoas",
        descricao: "Feijoada, arroz, farofa, couve-manteiga e laranja.",
        preco: 45.00,
        serve: "2 pessoas",
        foto: "img/pratos/feijoada-completa.jpg",
      },
      {
        nome: "Feijoada completa – 3 pessoas",
        descricao: "Feijoada, arroz, farofa, couve-manteiga e laranja.",
        preco: 60.00,
        serve: "3 pessoas",
        foto: "img/pratos/feijoada-completa.jpg",
      },
      {
        nome: "Feijoada completa – 4 pessoas",
        descricao: "Feijoada, arroz, farofa, couve-manteiga e laranja.",
        preco: 72.00,
        serve: "4 pessoas",
        foto: "img/pratos/feijoada-completa.jpg",
      },
    ],
  },
  {
    nome: "Massas e lasanhas",
    serve: "4 a 5 pessoas",
    pratos: [
      {
        nome: "Lasanha à bolonhesa",
        descricao: "Lasanha ao molho bolonhesa, recheada com queijo, presunto e molho bolonhesa.",
        preco: 90.00,
        foto: "img/pratos/lasanha-a-bolonhesa.jpg",
      },
      {
        nome: "Lasanha de frango",
        descricao: "Lasanha de frango ao molho quatro queijos, recheada com queijo e presunto.",
        preco: 80.00,
        foto: "img/pratos/lasanha-de-frango.jpg",
      },
      {
        nome: "Lasanha de camarão",
        descricao: "Lasanha ao molho quatro queijos, recheada com queijo, presunto e camarões refogados.",
        preco: 100.00,
        foto: "img/pratos/lasanha-de-camarao.jpg",
      },
      {
        nome: "Macarrão à bolonhesa",
        descricao: "Espaguete, parafuso ou penne com molho bolonhesa, milho verde, ervilha, queijo ralado e ovo de codorna.",
        preco: 70.00,
        foto: "img/pratos/macarrao-a-bolonhesa.jpg",
      },
      {
        nome: "Macarrão com camarão",
        descricao: "Espaguete, parafuso ou penne com molho quatro queijos, camarões refogados, milho verde, ervilha, queijo ralado e ovo de codorna.",
        preco: 110.00,
        foto: "img/pratos/macarrao-com-camarao.jpg",
      },
    ],
  },
  {
    nome: "Cremes diversos",
    serve: "4 a 5 pessoas",
    pratos: [
      {
        nome: "Creme de frango",
        descricao: "Frango desfiado e refogado com cebola, alho e molho branco. Acompanha arroz branco e batata palha.",
        preco: 60.00,
        foto: "img/pratos/creme-de-frango.jpg",
      },
      {
        nome: "Fricassê de frango",
        descricao: "Frango desfiado e refogado com milho verde, creme de leite, requeijão e batata palha.",
        preco: 65.00,
        foto: "img/pratos/fricasse-de-frango.jpg",
      },
      {
        nome: "Vatapá de frango",
        descricao: "Frango desfiado e refogado com molho à base de pão e azeite de dendê. Acompanha arroz branco.",
        preco: 60.00,
        foto: "img/pratos/vatapa-de-frango.jpg",
      },
      {
        nome: "Vatapá de peixe",
        descricao: "Peixe desfiado e refogado com molho à base de pão e azeite de dendê. Acompanha arroz branco.",
        preco: 65.00,
        foto: "img/pratos/vatapa-de-peixe.jpg",
      },
      {
        nome: "Vatapá de camarão",
        descricao: "Camarão refogado com molho à base de pão e azeite de dendê. Acompanha arroz branco.",
        preco: 85.00,
        foto: "img/pratos/vatapa-de-camarao.jpg",
      },
    ],
  },
  {
    nome: "Strogonoff",
    serve: "4 a 5 pessoas",
    pratos: [
      {
        nome: "Strogonoff de carne",
        descricao: "Tiras de carne com molho de ketchup, mostarda e creme de leite. Acompanha arroz branco e batata palha.",
        preco: 75.00,
        foto: "img/pratos/strogonoff-de-carne.jpg",
      },
      {
        nome: "Strogonoff de frango",
        descricao: "Tiras de frango com molho de ketchup, mostarda e creme de leite. Acompanha arroz branco e batata palha.",
        preco: 65.00,
        foto: "img/pratos/strogonoff-de-frango.jpg",
      },
      {
        nome: "Strogonoff de camarão",
        descricao: "Camarões com molho de ketchup, mostarda e creme de leite. Acompanha arroz branco e batata palha.",
        preco: 100.00,
        foto: "img/pratos/strogonoff-de-camarao.jpg",
      },
    ],
  },
  {
    nome: "Parmegiana",
    serve: "4 a 5 pessoas",
    pratos: [
      {
        nome: "Parmegiana de carne",
        descricao: "Bife de patinho à milanesa com queijo muçarela, molho parmegiana, espaguete e purê de batata.",
        preco: 85.00,
        foto: "img/pratos/parmegiana-de-carne.jpg",
      },
      {
        nome: "Parmegiana de frango",
        descricao: "Bife de frango à milanesa com queijo muçarela, molho parmegiana, espaguete e purê de batata.",
        preco: 70.00,
        foto: "img/pratos/parmegiana-de-frango.jpg",
      },
    ],
  },
  {
    nome: "Escondidinho",
    serve: "4 a 5 pessoas",
    pratos: [
      {
        nome: "Escondidinho de carne moída",
        descricao: "Camadas de purê de batatas com carne moída refogada e queijo gratinado.",
        preco: 65.00,
        foto: "img/pratos/escondidinho-de-carne-moida.jpg",
      },
      {
        nome: "Escondidinho de carne de sol",
        descricao: "Camadas de purê de batatas com carne de sol refogada e queijo gratinado.",
        preco: 85.00,
        foto: "img/pratos/escondidinho-de-carne-de-sol.jpg",
      },
      {
        nome: "Escondidinho de frango",
        descricao: "Camadas de purê de batatas com frango desfiado refogado e queijo gratinado.",
        preco: 70.00,
        foto: "img/pratos/escondidinho-de-frango.jpg",
      },
      {
        nome: "Escondidinho de calabresa",
        descricao: "Camadas de purê de batatas com calabresa ralada refogada e queijo gratinado.",
        preco: 50.00,
        foto: "img/pratos/escondidinho-de-calabresa.jpg",
      },
      {
        nome: "Escondidinho de camarão",
        descricao: "Camadas de purê de batatas com camarão refogado e queijo gratinado.",
        preco: 100.00,
        foto: "img/pratos/escondidinho-de-camarao.jpg",
      },
    ],
  },
  {
    nome: "Peixes e crustáceos",
    serve: "4 a 5 pessoas",
    pratos: [
      {
        nome: "Camarão Internacional",
        descricao: "Arroz com camarões refogados, presunto, ervilha, molho quatro queijos e batata palha.",
        preco: 95.00,
        foto: "img/pratos/camarao-internacional.jpg",
      },
      {
        nome: "Peixe à Delícia",
        descricao: "Filé de tilápia frito, banana frita, molho quatro queijos e muçarela gratinada. Acompanha arroz branco.",
        preco: 85.00,
        foto: "img/pratos/peixe-a-delicia.jpg",
      },
      {
        nome: "Moqueca de arraia",
        descricao: "1 kg de arraia cozida com cebola, alho, cheiro-verde, leite de coco e azeite de dendê. Acompanha arroz branco.",
        preco: 80.00,
        foto: "img/pratos/moqueca-de-arraia.jpg",
      },
      {
        nome: "Carne de caranguejo",
        descricao: "1 kg de carne de caranguejo cozida com cebola, alho, cheiro-verde e leite de coco.",
        preco: 120.00,
        foto: "img/pratos/carne-de-caranguejo.jpg",
      },
      {
        nome: "Filé de peixe ao molho branco",
        descricao: "Filé de tilápia frito ao molho branco e queijo gratinado. Acompanha arroz branco.",
        preco: 85.00,
        foto: "img/pratos/file-de-peixe-ao-molho-branco.jpg",
      },
    ],
  },
  {
    nome: "Comida regional",
    serve: "4 a 5 pessoas",
    pratos: [
      {
        nome: "Panelada",
        descricao: "1 kg de panelada cozida com cebola, alho, cheiro-verde, colorau, louro e pimenta-do-reino. Acompanha arroz branco e cuscuz.",
        preco: 60.00,
        foto: "img/pratos/panelada.jpg",
      },
      {
        nome: "Buchada",
        descricao: "Buchada de carneiro cozida com cebola, alho, cheiro-verde, pimenta-do-reino e colorau. Acompanha arroz branco e cuscuz.",
        preco: 70.00,
        foto: "img/pratos/buchada.jpg",
      },
    ],
  },
  {
    nome: "Diversos",
    serve: "até 6 pessoas",
    pratos: [
      {
        nome: "Calabresa acebolada",
        descricao: "1 kg de calabresa refogada com cebola.",
        preco: 60.00,
        foto: "img/pratos/calabresa-acebolada.jpg",
      },
      {
        nome: "Carne de sol trinchada",
        descricao: "1 kg de carne de sol trinchada com cebola roxa.",
        preco: 90.00,
        foto: "img/pratos/carne-de-sol-trinchada.jpg",
      },
      {
        nome: "Carneiro guisado",
        descricao: "1 kg de carneiro cozido com cebola, alho, pimentão, tomate, pimenta-do-reino e cheiro-verde.",
        preco: 80.00,
        foto: "img/pratos/carneiro-guisado.jpg",
      },
      {
        nome: "Sarapatel",
        descricao: "1 kg de sarapatel de carneiro cozido com cebola, alho, pimentão e cheiro-verde.",
        preco: 50.00,
        foto: "img/pratos/sarapatel.jpg",
      },
      {
        nome: "Dobradinha",
        descricao: "1 kg de dobradinha (feijão-carioca cozido com panelada), temperada com cebola, alho, cheiro-verde, tomate, pimentão e louro.",
        preco: 80.00,
        foto: "img/pratos/dobradinha.jpg",
      },
    ],
  },
  {
    nome: "Farofas",
    porcao: "Porções de 1 kg",
    serve: "8 a 10 pessoas",
    pratos: [
      {
        nome: "Farofa amanteigada",
        descricao: "Farofa refogada com alho, cebola ralada e manteiga.",
        preco: 30.00,
        foto: "img/pratos/farofa-amanteigada.jpg",
      },
      {
        nome: "Farofa de cenoura",
        descricao: "Farofa refogada com cenoura, alho, cebola e manteiga.",
        preco: 35.00,
        foto: "img/pratos/farofa-de-cenoura.jpg",
      },
      {
        nome: "Farofa de cebola",
        descricao: "Farofa refogada com cebola frita e manteiga.",
        preco: 35.00,
        foto: "img/pratos/farofa-de-cebola.jpg",
      },
      {
        nome: "Farofa de calabresa e bacon",
        descricao: "Farofa refogada com cebola, bacon, calabresa, alho e manteiga.",
        preco: 50.00,
        foto: "img/pratos/farofa-de-calabresa-e-bacon.jpg",
      },
      {
        nome: "Paçoca",
        descricao: "1 kg de paçoca com carne de sol, cebola roxa e alho.",
        preco: 60.00,
        foto: "img/pratos/pacoca.jpg",
      },
    ],
  },
  {
    nome: "Saladas",
    serve: "4 a 5 pessoas",
    pratos: [
      {
        nome: "Salpicão",
        descricao: "1 kg de salpicão com batata, cenoura, frango, uva-passa, maionese, maçã, milho verde, ervilha e batata palha.",
        preco: 60.00,
        foto: "img/pratos/salpicao.jpg",
      },
      {
        nome: "Maionese",
        descricao: "1 kg de salada com batata, cenoura, maionese, ovos e cheiro-verde.",
        preco: 50.00,
        foto: "img/pratos/maionese.jpg",
      },
      {
        nome: "Acelga tropical",
        descricao: "Acelga com cenoura, manga, maçã, abacaxi, uva e creme de leite.",
        preco: 50.00,
        foto: "img/pratos/acelga-tropical.jpg",
      },
      {
        nome: "Salada suprema",
        descricao: "Cebola roxa, manga, abacaxi, hortelã e cheiro-verde ao molho de laranja, azeite e mel.",
        preco: 50.00,
        foto: "img/pratos/salada-suprema.jpg",
      },
      {
        nome: "Repolho e cenoura",
        descricao: "Cenoura e repolho refogados no azeite com alho e cebola.",
        preco: 50.00,
        foto: "img/pratos/repolho-e-cenoura.jpg",
      },
    ],
  },
  {
    nome: "Sobremesas",
    pratos: [
      {
        nome: "Cocada de forno",
        descricao: "Cocada cremosa assada com coco ralado, leite de coco, ovos e leite condensado.",
        preco: 60.00,
        serve: "6 a 9 pessoas",
        foto: "img/pratos/cocada-de-forno.jpg",
      },
      {
        nome: "Cocada de forno com ganache",
        descricao: "Cocada cremosa assada com coco ralado, leite de coco, ovos, leite condensado e cobertura de ganache.",
        preco: 65.00,
        serve: "6 a 9 pessoas",
        foto: "img/pratos/cocada-de-forno-com-ganache.jpg",
      },
      {
        nome: "Torta Prestígio",
        descricao: "Coco ralado, leite de coco, leite, creme de leite e leite condensado, com cobertura de ganache.",
        preco: 80.00,
        serve: "6 a 9 pessoas",
        foto: "img/pratos/torta-prestigio.jpg",
      },
      {
        nome: "Pavê",
        descricao: "Creme de ovos, leite condensado, creme de leite e leite, com camadas de biscoito maisena e cobertura de ganache.",
        preco: 70.00,
        serve: "6 a 9 pessoas",
        foto: "img/pratos/pave.jpg",
      },
      {
        nome: "Travessa da Felicidade",
        descricao: "Creme com camadas de biscoito champanhe, chocolate, morango e uva, com cobertura de ganache.",
        preco: 110.00,
        serve: "6 a 9 pessoas",
        foto: "img/pratos/travessa-da-felicidade.jpg",
      },
      {
        nome: "Mousse de maracujá",
        descricao: "Mousse de maracujá com creme de leite e leite condensado, coberta com geleia de maracujá.",
        preco: 50.00,
        serve: "6 a 8 pessoas",
        foto: "img/pratos/mousse-de-maracuja.jpg",
      },
      {
        nome: "Mousse de manga",
        descricao: "Mousse de manga com creme de leite e leite condensado, coberta com geleia de manga.",
        preco: 50.00,
        serve: "6 a 8 pessoas",
        foto: "img/pratos/mousse-de-manga.jpg",
      },
      {
        nome: "Mousse de limão",
        descricao: "Mousse de limão com creme de leite e leite condensado.",
        preco: 50.00,
        serve: "6 a 8 pessoas",
        foto: "img/pratos/mousse-de-limao.jpg",
      },
      {
        nome: "Mousse de goiaba",
        descricao: "Mousse de goiaba com creme de leite e leite condensado, coberta com geleia de goiaba.",
        preco: 50.00,
        serve: "6 a 8 pessoas",
        foto: "img/pratos/mousse-de-goiaba.jpg",
      },
      // ⚠️ No PDF, a descrição deste item parece ser de um hambúrguer. Confirmar com o tio.
      {
        nome: "Surpresa de abacaxi",
        descricao: "",
        preco: 70.00,
        serve: "6 a 8 pessoas",
        foto: "img/pratos/surpresa-de-abacaxi.jpg",
      },
    ],
  },
];
