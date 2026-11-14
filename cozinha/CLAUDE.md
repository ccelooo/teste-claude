# Cardápio digital – Delícias do Plin

## Como trabalhar com o usuário (VALE PARA TODAS AS SESSÕES)
- Usuário é iniciante. Responder em português, linguagem simples.
- **Ser direto.** Fazer tudo o que for possível sozinho. Na resposta, mostrar só:
  o que foi feito (curto), o que ELE precisa fazer (ação humana) e que informação falta.
- Não explicar coisas que ele não precisa fazer.
- Uma etapa por vez; esperar confirmação ao fim de cada etapa.
- Atualizar este arquivo ao fim de cada etapa.

## O projeto
Landing page/cardápio digital para o serviço de comida caseira/encomendas do tio
do usuário. Cliente preenche os dados, escolhe pratos (+/−), vê o TOTAL exato e
envia o pedido pronto para o WhatsApp do tio (link wa.me). Sem pagamento, sem
servidor, sem banco de dados. Nunca usar a palavra "estimado".

## Arquivos
- `index.html` – estrutura da página.
- `css/estilo.css` – visual. Cores/fontes no topo (`:root`).
- `js/config.js` – nome do negócio, WhatsApp de destino (TESTE), tipos de refeição, opções de entrega.
- `js/cardapio.js` – CATEGORIAS com pratos (nome, descrição, preço final, foto, destaque). Cardápio REAL 2026 + Natal 2026.
- `js/app.js` – lógica (carrinho, total, validação, mensagem do WhatsApp).
- `img/` – logo e fotos dos pratos (ainda vazio).

## Negócio
- Nome: **Delícias do Plin** (D maiúsculo, "do" minúsculo, Plin com N). Instagram @deliciasdoplin.
- WhatsApp do tio (destino dos pedidos): 5585999820373 — já configurado em js/config.js.
  O usuário digitou "+55 85 9982-0373" (sem o 9); usei o número com 9 dígitos, igual aos PDFs.
- Tudo sob encomenda: NÃO existe "esgotado" (recurso removido).
- Fontes: PDFs "Cardápio Delícias do Plin 2026" e "Cardápio de Natal 2026" (enviados na conversa).

## Identidade visual (do logo, img/logo.png)
- Cores: vinho #590E13 (principal), laranja #EC8D19 (destaque), off-white #FFF4F0 (fundo). Tokens no topo de css/estilo.css.
- Fontes (Google Fonts): Kaushan Script (cursiva, só em títulos de destaque) + Montserrat (texto).
- Contraste: laranja só como fundo com texto vinho; botões principais vinho com texto branco.

## Layout (estilo app de delivery, inspirado nas referências do usuário)
- Tela inicial: topo fixo (logo + sacola), banner vinho "Ceia de Natal", categorias em CÍRCULOS com
  foto (tocar rola até a categoria), vitrine "Destaques de Natal" (5 com destaque:true) + "Ver todos",
  depois "Cardápio 2026" em cartões (foto, nome, descrição, "Serve X pessoas", preço, +/−).
- Tela Natal (avulsa): banner + chips (Kits/Pratos/Sobremesas) + lista completa.
- SACOLA: menu inferior (Início · Sacola central · Natal), barra flutuante "Ver sacola + total + Avançar",
  painel que sobe de baixo com itens editáveis e botão Avançar.
- Checkout: Ocasião → Finalizar (barra de etapas Sacola/Ocasião/Finalizar, barra fixa com total).
- Fotos: 90 fotos extraídas dos PDFs em img/pratos/ (todos os 100 pratos têm foto; alguns pratos de Natal
  sem foto própria reutilizam a foto do prato equivalente do cardápio 2026).
- "Serve X pessoas" em todos os pratos (campo `serve` na categoria ou no prato). Arroz (6 a 8) e baião
  (4 a 5) são ESTIMATIVAS — confirmar com o tio.

## Decisões tomadas
- Mensagem começa com "*Pedido #DDMM-HHMM* – Nome" (número = dia/mês e hora/minuto do envio).
- SEM pagamento no site (sem Pix, QR Code, planilha ou API). Fluxo final: "Enviar pedido" abre o
  WhatsApp do cliente com a mensagem do pedido; o tio negocia 50%/50% e confirma usando respostas
  rápidas e etiquetas do WhatsApp Business. Volume baixo (~10 pedidos/15 dias).
- Pratos de Natal que repetem nome do cardápio do ano levam "(Natal)" no nome, porque o preço é outro.
- Data mínima = amanhã (regra de 24h de antecedência do PDF). Tipo "Ceia de Natal" adicionado.
- Rodapé da tela 3 cita antecedência e reserva com 50%.
- Pendências para o tio confirmar: preço do Frango à parmegiana (Natal) = R$160 (preço solto no PDF);
  Lasanha vegana leva presunto no PDF; descrição da "Surpresa de abacaxi" no PDF é de hambúrguer
  (deixada sem descrição); frete: PDFs dizem que o frete é por conta do cliente / Uber.
- Custos e margem NUNCA entram no código (código é público). Só preço final.
- Preços calculados em centavos para evitar erro de arredondamento.
- Obrigatórios: nome, WhatsApp, tipo de refeição, data, nº de pessoas e pelo menos 1 prato.
- Nº de pessoas é só informativo (não altera preço).
- Tio é de **Fortaleza (CE)**. DDD 85. WhatsApp de teste: 5585999999999.
- Entrega/retirada (tela 3, obrigatório escolher): opções em `CONFIG.opcoesEntrega` (config.js).
  Hoje: "Retirar na cozinha" (grátis) e "Entrega em Fortaleza" (R$ 25, VALOR DE EXEMPLO).
  Taxa fixa por cidade/região (sem CEP, sem API). Cidades metropolitanas (Caucaia, Maracanaú,
  Itaitinga...) ficam comentadas no config, aguardando o tio confirmar se atende e o valor.
  Entrega pede Rua e número*, Bairro*, Complemento. Taxa entra no total e na mensagem.
- Sem pedido mínimo (por enquanto).
- Fluxo: cardápio → sacola → "Avançar" → Ocasião (tipo "Selecione uma opção", data, pessoas, obs) →
  Finalizar (resumo + entrega/retirada + dados) → "Enviar pedido" abre o WhatsApp.
- NÃO enviar ao GitHub até o usuário pedir. Pré-visualizar via **Artifact** (painel lateral):
  https://claude.ai/artifact/65HZDvzC7QGpC6dA35zExv
  Como gerar: juntar index.html (links das fontes + conteúdo do <body>) + CSS em <style> + os 3 JS inline
  num único HTML com <title>Delícias do Plin</title>, e republicar no mesmo artifact (passar `url`),
  enviando também img/logo.png e img/pratos/*.jpg no parâmetro `files` (caminhos relativos a cozinha/).
  O botão do WhatsApp não funciona dentro do Artifact; testar envio só no site publicado.
- Claude NÃO consegue criar repositório nem ligar o GitHub Pages (bloqueado);
  isso é ação do usuário, uma vez por projeto. Depois disso, cada push publica sozinho.

## GitHub
- Usuário: `ccelooo`. Repo de treino: `ccelooo/teste-claude` (Pages ligado).
- Este protótipo está provisoriamente em `teste-claude/cozinha/` (NÃO enviado ainda).
  Será movido para um repositório próprio quando o usuário criar.

## Etapas
1. ✅ Ambiente verificado (tudo no navegador, nada instalado no notebook).
2. ✅ GitHub aprendido (conta, repo de teste, Pages funcionando).
3. 🔄 Protótipo — cardápio REAL, logo, cores, fotos e layout de app aplicados. Próximo: ajustes do
   usuário e configurar o WhatsApp de destino.
4. Testar envio para o WhatsApp.
5. Cardápio real, logo e cores da marca.
6. Publicar no repositório definitivo (GitHub Pages).
7. Ensinar manutenção (preço, novo prato, esgotado).
8. (Futuro) Cardápio via Planilha Google / registrar pedidos.
