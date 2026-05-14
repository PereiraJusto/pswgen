# Arquitetura de Deploy - Gerador de Senhas

## 1. Modelo de Hospedagem
A aplicação é composta exclusivamente por ativos estáticos (HTML, CSS e JS). O modelo de infraestrutura ideal é o **Static Web Hosting** acoplado a uma rede de entrega de conteúdo (**CDN**).

## 2. Estratégia de Provedor
Recomenda-se a utilização de plataformas modernas de *Edge Computing* para minimizar a latência:
- **Principal:** Vercel ou Netlify (pela facilidade de integração com Git).
- **Alternativa:** GitHub Pages ou AWS S3 com CloudFront.

## 3. Segurança na Camada de Rede
- **TLS/SSL:** O uso de HTTPS é mandatório para assegurar a integridade dos scripts distribuídos.
- **CSP (Content Security Policy):** Recomenda-se configurar cabeçalhos que restrinjam a execução de scripts apenas ao domínio de origem, bloqueando tentativas de XSS persistente.
- **Cache:** Configuração de cache agressivo para o `style.css` e `script.js` (ex: `Cache-Control: public, max-age=31536000`), visando performance.
