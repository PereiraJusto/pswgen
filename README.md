# Gerador de Senhas (PWDGEN)

Um gerador de senhas moderno, seguro e altamente personalizável, desenvolvido com tecnologias web puras. Este projeto prioriza a segurança do usuário através da geração de entropia localmente no navegador, sem a necessidade de processamento em servidor ou armazenamento de dados sensíveis.

## 🚀 Funcionalidades

- **Personalização Total**: Escolha o comprimento da senha (até 128 caracteres).
- **Controle de Caracteres**: Inclua ou exclua letras maiúsculas, minúsculas, números e símbolos.
- **Segurança Criptográfica**: Utiliza a API `window.crypto` para garantir a aleatoriedade real das senhas geradas.
- **Feedback Visual**: Indicador de força da senha em tempo real.
- **Interface Premium**: Design moderno com suporte a temas e micro-animações.
- **Copiar com um Clique**: Facilidade para copiar a senha gerada para a área de transferência.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica.
- **CSS3**: Estilização moderna com variáveis e design responsivo.
- **JavaScript (ES6+)**: Lógica de geração e interatividade, sem dependências externas.

## 📦 Instalação e Execução

Como este é um projeto puramente frontend, não é necessário instalar dependências.

1. Clone o repositório:
   ```bash
   git clone https://github.com/usuario/pwdgen.git
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd pwdgen
   ```
3. Abra o arquivo `frontend/index.html` em qualquer navegador moderno.

Alternativamente, você pode usar um servidor local simples:
```bash
npx serve frontend
```

## 🧪 Testes

O projeto passou por uma bateria de testes rigorosos, incluindo:
- Validação de lógica de geração de senhas.
- Testes de responsividade (Desktop e Mobile).
- Testes de acessibilidade.
- Verificação de segurança (CSPRNG).

Os relatórios detalhados podem ser encontrados em `documentation/testing/`.

## 🌐 Deploy

O projeto está pronto para ser hospedado em qualquer serviço de hospedagem estática, como:
- GitHub Pages
- Vercel
- Netlify

Basta apontar o serviço para a raiz do diretório `frontend/`.

## 📄 Licença e Autoria

Este projeto foi desenvolvido por **Rafael** como parte do ecossistema Software Factory.

---
© 2026 Rafael. Todos os direitos reservados.
