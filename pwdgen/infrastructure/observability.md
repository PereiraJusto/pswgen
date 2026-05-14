# Observabilidade - Gerador de Senhas

Devido ao design focado em privacidade e processamento local, a observabilidade é focada em performance e disponibilidade, não em rastreamento de usuários.

## 1. Monitoramento de Disponibilidade
- Configuração de "Health Checks" via ferramentas de Uptime para garantir que o site está respondendo (HTTP 200).

## 2. Performance (Core Web Vitals)
- Monitoramento regular via **Lighthouse CI** integrado ao pipeline para garantir que o `First Contentful Paint (FCP)` e o `Total Blocking Time (TBT)` permaneçam em níveis de excelência.

## 3. Monitoramento de Erros
- Como não há backend, erros críticos que ocorram no navegador do cliente serão monitorados via logs de console durante o ciclo de QA. Para produção, mantém-se a decisão de **não** enviar logs para servidores externos para preservar a política de privacidade máxima do projeto.
