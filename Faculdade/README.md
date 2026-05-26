# Geobioma

🌍 **Geobioma - Visualização Interativa de Ecossistemas Mundiais**

O **Geobioma** é uma plataforma de visualização cartográfica interativa de alta fidelidade, desenvolvida para fins educacionais e científicos. O projeto utiliza dados geográficos reais para mapear e descrever os principais biomas do planeta, oferecendo uma experiência imersiva e responsiva através de tecnologias web modernas.

---

## ✨ Funcionalidades

- **Dashboard de Alta Fidelidade**: Interface moderna com estilo Glassmorphism e design premium.
- **Mapa Interativo (D3.js)**: Navegação fluida com zoom, pan e interação em tempo real com todos os países do mundo.
- **Mapeamento Real de Biomas**: Dicionário de dados integrado que identifica biomas reais (Florestas Tropicais, Desertos, Taigas, etc.) com precisão geográfica.
- **Painel de Detalhes Dinâmico**: Ao selecionar um país, informações detalhadas sobre o ecossistema são exibidas instantaneamente.
- **Totalmente Responsivo**: Layout adaptável para smartphones, tablets e desktops.

---

## 🚀 Tecnologias Utilizadas

- **D3.js**: Motor de visualização de dados geográficos (GeoJSON).
- **HTML5 Semântico / CSS3**: Design moderno com variáveis e sistemas de grid complexos.
- **JavaScript (ES6+)**: Lógica de manipulação de dados e estados da aplicação.
- **Google Fonts (Outfit)**: Tipografia moderna e legível.

---

## 🛠️ Como Executar o Projeto

Para visualizar o mapa corretamente, é necessário rodar o projeto através de um servidor local devido às políticas de segurança do navegador (CORS).

1. Clone ou baixe este repositório.
2. Certifique-se de que a pasta `geoJSON` contenha o arquivo `countries.geojson`.
3. Abra o projeto no VS Code.
4. Execute um servidor local.

### Opções para rodar o projeto

- **Usando Live Server (VS Code)**
  1. Instale a extensão `Live Server`.
  2. Clique em `Go Live` na barra de status.
  3. Abra o endereço gerado no navegador.

- **Usando Node.js**
  1. Navegue até a pasta do projeto.
  2. Execute `npm install` (se houver dependências declaradas).
  3. Execute `npm start`.
  4. Acesse `http://localhost:3000` ou o IP informado no terminal.

---

## 📁 Estrutura do Projeto

- `index.html` — Página principal do Geobioma.
- `css/styles.css` — Estilos visuais e temas do site.
- `js/script.js` — Lógica do mapa, popups e painel de detalhes.
- `geoJSON/countries.geojson` — Dados geográficos para renderização do mapa.
- `img/` — Imagens e recursos visuais usados no projeto.
- `server.js` — Servidor Node.js para hospedar o site localmente.
- `package.json` — Configuração de execução do servidor.

---

## 📌 Observações

- Desenvolvido por **PedrorCastro**.
- Projeto focado para a matéria **Projeto de Desenvolvimento-1** da **UNIP 2026**.
- Recomendado usar servidor local para evitar bloqueios de segurança do navegador.

---

## 💡 Contato

Desenvolvedor: **Pedro Castro**

---

Obrigado por visitar o Geobioma! 🌿
