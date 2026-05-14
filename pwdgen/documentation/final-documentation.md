# Documentação Final - Gerador de Senhas Premium

## 1. Introdução
O Gerador de Senhas Premium é uma aplicação web focada em privacidade, projetada para gerar credenciais robustas sem a necessidade de processamento em servidor ou armazenamento de dados.

## 2. Arquitetura Técnica
- **Paradigma:** Client-Side Static Application.
- **Linguagens:** HTML5, CSS3, JavaScript (Vanilla).
- **Segurança:** Implementação de CSPRNG via Web Crypto API (`window.crypto`).
- **Design:** Modern UI com estética Glassmorphism e suporte total a dispositivos móveis.

## 3. Funcionalidades
- Ajuste dinâmico de comprimento (4-64 caracteres).
- Filtros de charset (Maiúsculas, Minúsculas, Números e Símbolos).
- Indicador visual de força de senha.
- Cópia segura para área de transferência com feedback visual (Toast).
- Funcionamento offline completo após o carregamento inicial.

## 4. Instalação e Execução
Como a aplicação é estática, não requer instalação de dependências.
1. Clone o repositório.
2. Abra `frontend/index.html` em qualquer navegador moderno.
3. Para deploy, basta hospedar o conteúdo da pasta `frontend/` em qualquer servidor estático.
