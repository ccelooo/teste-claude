// =====================================================
// CONFIGURAÇÕES GERAIS — edite aqui
// =====================================================
const CONFIG = {
  // Nome que aparece no topo do site
  nomeNegocio: "Delícias do Plin",
  slogan: "O melhor da culinária, sob encomenda",

  // WhatsApp que RECEBE os pedidos.
  // Formato: 55 + DDD + número, só números, sem espaços.
  // ⚠️ NÚMERO DE TESTE — troque pelo número real do seu tio.
  whatsappDestino: "5585999999999",

  // Tipos de refeição que o cliente pode escolher
  tiposRefeicao: ["Almoço", "Jantar", "Evento", "Ceia de Natal"],

  // Opções de entrega/retirada que aparecem na tela "Finalizar".
  //  - taxa: valor em reais (0 = grátis)
  //  - pedeEndereco: true se o cliente precisa informar o endereço
  // Para atender outra cidade, copie uma linha e mude nome e taxa.
  // ⚠️ VALORES DE EXEMPLO — confirmar com o tio.
  opcoesEntrega: [
    { nome: "Retirar na cozinha", taxa: 0, pedeEndereco: false },
    { nome: "Entrega em Fortaleza", taxa: 25.0, pedeEndereco: true },
    // { nome: "Entrega em Caucaia", taxa: 35.0, pedeEndereco: true },
    // { nome: "Entrega em Maracanaú", taxa: 35.0, pedeEndereco: true },
  ],
};
