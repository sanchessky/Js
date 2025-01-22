/**
 * Estudo de Funções
 */

// Função Simples (Literal)
function hello() {
    console.log("hello function")
}

hello()



//Função atribuida
const hello2=function(){
        console.log("hello function assigned")
}
console.log(typeof(hello))
hello2()

// Arrow function => (simplificação da função atribuida)
//function ---- =>
const hello3=() =>{
    console.log("Hello arrow function")
}

console.log(typeof(hello3))
hello3()

// Função com passagem de parâmetros e retorno
// Função Simples 
function somarS(num1, num2) {
    return (console.log(num1+num2))
}
somarS(2,4)

//Função atribuida
const somarA = function(num1,num2){
    return (console.log(num1+num2))
}
somarA(4,6)

//Arrow function simplificada (retorno e implicito)
const somarAFS=(num1,num2)=>console.log(num1+num2)
somarAFS(5,7)