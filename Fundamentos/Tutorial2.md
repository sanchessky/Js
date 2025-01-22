# Estudo de Funções em JavaScript

## 1. Função Simples (Literal)

```javascript
function hello() {
    console.log("hello function");
}
hello();
```

- **O que é?**
  Essa é a forma mais básica de criar uma função em JavaScript.

- **Como funciona?**
  - A palavra-chave `function` define uma função.
  - Damos um nome à função, neste caso, `hello`.
  - Dentro das chaves `{}` colocamos o que a função faz. Aqui, ela apenas imprime no console `"hello function"`.
  - Para usar a função, basta chamá-la pelo nome: `hello()`.

---

## 2. Função Atribuída

```javascript
const hello2 = function() {
    console.log("hello function assigned");
};
console.log(typeof(hello));
hello2();
```

- **O que é?**
  Uma função atribuída é quando salvamos uma função dentro de uma variável ou constante.

- **Como funciona?**
  - Em vez de dar um nome à função, usamos uma função **anônima** (sem nome) e atribuímos a uma constante, `hello2`.
  - Depois podemos chamar essa função pelo nome da variável ou constante: `hello2()`.

- **Dica**:
  Usamos `typeof` para verificar o tipo de `hello`, que é `"function"`. Isso mostra que `hello` é realmente uma função.

---

## 3. Arrow Function

```javascript
const hello3 = () => {
    console.log("Hello arrow function");
};
console.log(typeof(hello3));
hello3();
```

- **O que é?**
  Uma **arrow function** é uma forma mais moderna e simplificada de escrever funções.

- **Como funciona?**
  - Substituímos a palavra `function` por `=>` (seta).
  - Geralmente, é mais curta e usada em situações onde não precisamos de uma função complexa.
  - Aqui, ela faz a mesma coisa que as anteriores: imprime uma mensagem no console.

- **Importante**:
  - Assim como nas funções atribuídas, usamos uma constante (`const`) para armazenar a função.

---

## 4. Função com Parâmetros e Retorno

### Função Simples

```javascript
function somarS(num1, num2) {
    return (console.log(num1 + num2));
}
somarS(2, 4);
```

- **O que é?**
  Uma função que recebe valores (parâmetros), faz um cálculo e retorna o resultado.

- **Como funciona?**
  - `num1` e `num2` são os **parâmetros**. Eles representam os valores que a função vai usar.
  - Dentro da função, somamos os dois números e imprimimos o resultado com `console.log`.
  - Chamamos a função com os números que queremos somar: `somarS(2, 4)`.

---

### Função Atribuída

```javascript
const somarA = function(num1, num2) {
    return (console.log(num1 + num2));
};
somarA(4, 6);
```

- **O que muda?**
  É a mesma lógica da função anterior, mas usamos o formato de **função atribuída**.

---

### Arrow Function Simplificada (Retorno Implícito)

```javascript
const somarAFS = (num1, num2) => console.log(num1 + num2);
somarAFS(5, 7);
```

- **O que é?**
  Uma versão ainda mais curta da arrow function, onde o retorno é implícito.

- **Como funciona?**
  - Quando o corpo da função contém apenas uma única expressão, podemos omitir as chaves `{}` e a palavra `return`.
  - Aqui, `console.log(num1 + num2)` é executado diretamente.

---

## Resumo

- Existem várias formas de criar funções:
  1. **Simples (Literal):** Forma tradicional, ideal para funções nomeadas.
  2. **Atribuída:** Usamos uma variável ou constante para guardar a função.
  3. **Arrow Function:** Forma mais curta e moderna.

- **Parâmetros e retorno** são usados para tornar as funções mais dinâmicas e reutilizáveis.

---

