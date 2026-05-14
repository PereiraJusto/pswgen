# Plano de Testes - Gerador de Senhas

## 1. Objetivo
O objetivo deste plano é validar as funcionalidades essenciais, a segurança da aleatoriedade e a qualidade da interface do Gerador de Senhas, garantindo que o produto final esteja alinhado com os requisitos de negócio e técnicos.

## 2. Escopo
- **Testes Funcionais:** Validação da lógica de geração, controles de interface e mecanismo de cópia.
- **Testes de Segurança:** Verificação da fonte de entropia (CSPRNG).
- **Testes de UI/UX:** Verificação de responsividade e feedback visual ao usuário.

## 3. Critérios de Aceitação (QA)
- Todas as combinações de checkboxes devem resultar em senhas válidas.
- O sistema não deve permitir a geração de senha sem pelo menos um conjunto de caracteres selecionado.
- A senha gerada deve ter o comprimento exato definido pelo slider.
- O botão de cópia deve transferir o texto corretamente para o clipboard do sistema.

## 4. Ambiente de Teste
- Navegadores: Google Chrome (Desktop/Mobile), Mozilla Firefox, Microsoft Edge.
- Ferramentas: Chrome DevTools, Lighthouse.
