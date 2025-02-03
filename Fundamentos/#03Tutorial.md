Autor: Thiago Sanches<br>
Instagram: https://www.instagram.com/espetacular_sanches<br>
LinkedIn Thiago Sanches: https://www.linkedin.com/in/thiagosanches07/<br>
Github: https://github.com/sanchessky<br>
Data de criação: 03/02/2025<br>


# Estudo de Operadores em JavaScript

## Operadores Aritméticos

São usados para fazer **cálculos matemáticos básicos**.

| Operador | Nome            | Exemplo  | Resultado |
|----------|-----------------|----------|-----------|
| `+`      | Soma            | `5 + 3`  | `8`       |
| `-`      | Subtração       | `5 - 3`  | `2`       |
| `*`      | Multiplicação   | `5 * 3`  | `15`      |
| `/`      | Divisão         | `6 / 3`  | `2`       |
| `%`      | Módulo (Resto)  | `7 % 3`  | `1`       |

**Exemplo prático:**

```javascript
const num1 = 10, num2 = 3;
console.log(num1 + num2); // Soma -> 13
console.log(num1 - num2); // Subtração -> 7
console.log(num1 * num2); // Multiplicação -> 30
console.log(num1 / num2); // Divisão -> 3.333...
console.log(num1 % num2); // Resto -> 1
```

**Para lembrar**: O operador `%` é útil para saber o que sobra numa divisão.

---

## Operadores Aritméticos de Atribuição

Estes operadores **fazem um cálculo e salvam o resultado de volta na variável**.

| Operador | Nome                  | Exemplo     | Resultado |
|----------|-----------------------|-------------|-----------|
| `+=`     | Soma e atribuição     | `x += 3`    | `x = x + 3` |
| `-=`     | Subtração e atribuição| `x -= 2`    | `x = x - 2` |
| `*=`     | Multiplicação         | `x *= 4`    | `x = x * 4` |
| `/=`     | Divisão               | `x /= 2`    | `x = x / 2` |
| `++`     | Incremento (soma 1)   | `x++`       | `x = x + 1` |
| `--`     | Decremento (subtrai 1)| `x--`       | `x = x - 1` |

**Exemplo prático:**

```javascript
let valor = 5;

valor += 3; // valor agora é 8
valor -= 2; // valor agora é 6
valor *= 2; // valor agora é 12
valor /= 3; // valor agora é 4
valor++;    // valor agora é 5
valor--;    // valor agora é 4
console.log(valor); // Resultado final -> 4
```

---

## Operadores de Comparação

Servem para comparar **dois valores** e retornam `true` (verdadeiro) ou `false` (falso).

| Operador | Significado                     | Exemplo       | Resultado |
|----------|---------------------------------|---------------|-----------|
| `>`      | Maior que                      | `5 > 3`       | `true`    |
| `<`      | Menor que                      | `3 < 2`       | `false`   |
| `>=`     | Maior ou igual                 | `5 >= 5`      | `true`    |
| `<=`     | Menor ou igual                 | `4 <= 3`      | `false`   |
| `===`    | Idêntico a (valor e tipo)       | `5 === '5'`   | `false`   |
| `!==`    | Não idêntico a (valor ou tipo diferente)| `5 !== '5'` | `true`    |

**Exemplo prático:**

```javascript
const a = 10, b = 5;

console.log(a > b);  // true
console.log(a < b);  // false
console.log(a >= 10); // true
console.log(a <= b); // false
console.log(a === 10); // true
console.log(a !== 5);  // true
```

**Para lembrar**:
- Use `===` e `!==` quando quiser comparar **valor e tipo**.

---

## Operadores Lógicos

São usados para combinar expressões **booleanas** (verdadeiras ou falsas).

| Operador | Nome         | Exemplo           | Resultado |
|----------|--------------|-------------------|-----------|
| `&&`     | E lógico     | `true && false`   | `false`   |
| `||`     | OU lógico    | `true || false`   | `true`    |
| `!`      | NÃO lógico   | `!true`           | `false`   |

**Exemplo prático:**

```javascript
const x = true, y = false;

console.log(x && y); // false (os dois precisam ser true)
console.log(x || y); // true (basta um ser true)
console.log(!x);     // false (inverte o valor de x)
console.log(!y);     // true (inverte o valor de y)
```

---

## Resumo

- **Aritméticos**: Fazem cálculos como soma, subtração, etc.
- **Atribuição**: Fazem o cálculo e atribuem o resultado à variável.
- **Comparação**: Verificam a relação entre dois valores e retornam `true` ou `false`.
- **Lógicos**: Combinam ou invertem valores booleanos.
