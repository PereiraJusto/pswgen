# Pipeline CI/CD - Gerador de Senhas

## 1. Fluxo de Trabalho (Workflows)
O projeto utilizará **GitHub Actions** (ou similar) para automação.

### Estágio de Integração (CI)
- **Gatilho:** Push ou PR para `main`.
- **Ações:**
  - `Linting`: Verificação de padrões de código CSS e JS.
  - `Security Scan`: Varredura estática de segredos e vulnerabilidades no código.

### Estágio de Entrega (CD)
- **Gatilho:** Merge bem-sucedido na branch `main`.
- **Ações:**
  - `Deploy`: Sincronização dos arquivos da pasta `frontend/` com o provedor de hosting.
  - `Cache Busting`: Invalidação de versões antigas na CDN.

## 2. Automação de Versão
- Uso de `SemVer` (Versionamento Semântico) para controle de releases.
