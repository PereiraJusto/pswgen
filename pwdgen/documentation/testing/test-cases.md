# Casos de Teste - Gerador de Senhas

| ID | Título | Pré-condição | Passos | Resultado Esperado | Status |
|:---|:---|:---|:---|:---|:---|
| **CT01** | Geração com Configuração Padrão | Aplicação carregada | 1. Clicar em "Gerar Nova Senha" | Senha de 16 caracteres contendo letras e números é exibida. | Passou |
| **CT02** | Alteração de Comprimento Máximo | Aplicação carregada | 1. Arrastar slider para 64<br>2. Clicar em "Gerar" | A senha exibida deve ter exatamente 64 caracteres. | Passou |
| **CT03** | Exclusão de Números | Checkbox "Números" marcada | 1. Desmarcar "Números"<br>2. Clicar em "Gerar" | A senha gerada não deve conter nenhum dígito numérico (0-9). | Passou |
| **CT04** | Proteção contra Charset Vazia | Apenas 1 checkbox marcada | 1. Tentar desmarcar a última checkbox ativa | O sistema deve impedir a desmarcação ou reativar automaticamente a caixa. | Passou |
| **CT05** | Funcionalidade de Cópia | Senha gerada na tela | 1. Clicar no botão de cópia | O texto da senha deve estar no clipboard e o "Toast" deve aparecer. | Passou |
| **CT06** | Validação de Segurança (CSPRNG) | Acesso ao código-fonte | 1. Inspecionar `script.js` | Confirmar que `crypto.getRandomValues` é utilizado em vez de `Math.random`. | Passou |
| **CT07** | Responsividade Mobile | Resolução de tela < 480px | 1. Redimensionar janela ou usar DevTools | O container glassmorphism deve se ajustar sem quebra de layout. | Passou |
