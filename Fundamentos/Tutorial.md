# JavaScript

## Case Sensitive
JavaScript distingue entre letras maiúsculas e minúsculas. Exemplo: `variavel` e `Variavel` são diferentes.

## Uso de `;`
O ponto e vírgula é opcional, mas seu uso é recomendado em projetos complexos para evitar ambiguidades no código.

## Strings
- Você pode usar aspas duplas (`"`) ou simples (`'`) para definir strings, mas não pode misturá-las no mesmo contexto.  
  Exemplo válido: `"texto"` ou `'texto'`.  
  Exemplo inválido: `"texto'`.
- **Dica**: Use aspas duplas para texto e aspas simples para importações.

---

## Tipos de Variáveis
- **String**: Armazena caracteres ou textos.  
  Exemplo: `let nome = "Thiago";`.
- **Number**: Representa números (inteiros ou decimais).  
  Exemplo: `let idade = 25;`.
- **Boolean**: Valores lógicos (`true` ou `false`).  
  Exemplo: `let ativo = true;`.
- **Function**: Bloco de código executável.  
  Exemplo: `function soma(a, b) { return a + b; }`.
- **Object**: Estrutura que armazena pares chave-valor.  
  Exemplo: `let pessoa = { nome: "Thiago", idade: 30 };`.

---

## Declaração de Variáveis
- Use `const` para constantes:  
  Exemplo: `const PI = 3.14;`.
- Use `let` para variáveis mutáveis:  
  Exemplo: `let contador = 0;`.
- **Evite `var`**: Permite redeclaração, o que pode causar erros no código.

---

## Concatenação de Strings
- Evite usar o operador `+` para unir strings e valores.  
- Utilize *template literals* (entre crases ``) para maior segurança e clareza.  
  Exemplo:  
  ```javascript
  const nome = "Thiago";
  console.log(`Olá, ${nome}!`);
  ```

---

## Execução de Código JS no HTML
1. Usando a tag `<script>` diretamente:  
   ```html
   <script>
       console.log("Olá, mundo!");
   </script>
   ```
2. Linkando um arquivo externo:  
   ```html
   <script src="script.js"></script>
   ```

---

# Node.js

## O que é?
Node.js é uma plataforma para executar JavaScript fora do navegador.

## Comandos Básicos
- `node -v`: Exibe a versão instalada do Node.js.  
- `node arquivo.js`: Executa o arquivo JavaScript no terminal.
