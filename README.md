# goengine

Landing page em React + Vite, com layout responsivo, conceitos visuais feitos em CSS/SVG, FAQ expansível e gerador local de briefing. Estrutura alinhada ao template oficial React (JavaScript) do create-vite 9.3.4, incluindo plugin React, StrictMode, tipos para o editor e Oxlint.

## Desenvolvimento

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

O build estático é gerado em `dist/`. Execute `npm run lint` para verificar o código.

## Organização

```text
public/                 # Arquivos públicos e favicon da goengine
src/
  assets/               # Assets do template Vite/React
  components/           # Seções da página e componentes visuais
    Header.jsx
    Hero.jsx
    Showcase.jsx
    Dashboard.jsx
    Capabilities.jsx
    Services.jsx
    Projects.jsx
    Process.jsx
    FAQ.jsx
    Contact.jsx
    Footer.jsx
    Logo.jsx
    BriefingDialog.jsx
  data/content.js       # Conteúdo dos serviços e perguntas frequentes
  App.jsx               # Composição da página e abertura do briefing
  App.css               # Estilos dos componentes e responsividade
  index.css             # Fontes, reset, tokens e estilos globais
  main.jsx              # Entrada React com StrictMode
vite.config.js          # Plugin React e Fast Refresh
.oxlintrc.json          # Regras de lint do template oficial
```

O menu e o FAQ mantêm seus estados dentro dos respectivos componentes. `App` compartilha a ação de abrir o briefing por props. Os dados do formulário permanecem locais ao diálogo. A identidade visual da goengine substitui a tela demonstrativa do template.

## Contato

Nenhum endereço ou número foi fornecido. O formulário valida os campos e baixa um arquivo de briefing localmente; não envia dados a um servidor. Para receber leads, substituir esse fluxo por uma integração com o contato real da empresa e definir a política de privacidade correspondente.

Orbit, Forma e Nü são conceitos demonstrativos, não clientes ou resultados reais. Fontes são carregadas do Google Fonts, com fallback local.

## Reformulação visual

A direção editorial combina a identidade coral da goengine com uma abertura orbital em CSS, apresentação da empresa e seções de serviços e conceitos visuais. `src/premium.css` concentra a nova camada visual; `src/hooks/useMotion.js` controla revelações por IntersectionObserver e reações ao ponteiro, com limpeza de listeners e respeito à preferência de movimento reduzido. Não foram adicionadas dependências.

O canal de contato está explicitamente marcado como **a preencher**, conforme solicitado. O briefing continua sendo um download local e não representa envio de mensagem.

Validação em navegador: larguras de 320, 390, 650, 768, 1024 e 1440 px; menu mobile, FAQ, download do briefing, fechamento com Escape, restauração de foco e movimento reduzido. Capturas e roteiro de QA ficam na pasta local ignorada `artifacts/`.
