const perguntas = [
    {
        pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
        respostas: [
            "var myVar;",
            "variable myVar;",
            "v myVar;"
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para exibir uma mensagem de alerta em JavaScript?",
        respostas: [
            "alert();",
            "prompt();",
            "console.log();"
        ],
        correta: 0
    },
    {
        pergunta: "Como você escreve um comentário de linha única em JavaScript?",
        respostas: [
            "/* Comentário */",
            "// Comentário",
            "<!-- Comentário -->"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do operador '+' em JavaScript?",
        respostas: [
            "Concatenar strings",
            "Subtração",
            "Multiplicação"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o método correto para converter uma string em minúsculas em JavaScript?",
        respostas: [
            "toLowerCase()",
            "lowerCase()",
            "convertLowerCase()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "Comparação estrita (valor e tipo)",
            "Comparação solta (apenas valor)",
            "Atribuição"
        ],
        correta: 0
    },
    {
        pergunta: "Como você define uma função anônima em JavaScript?",
        respostas: [
            "function myFunction() {}",
            "const myFunction = function() {}",
            "const myFunction = () => {}"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o resultado da expressão 5 + '5' em JavaScript?",
        respostas: [
            "55",
            "10",
            "'55'"
        ],
        correta: 2
    },
    {
        pergunta: "Como você acessa o terceiro elemento de um array chamado 'myArray' em JavaScript?",
        respostas: [
            "myArray[3]",
            "myArray(3)",
            "myArray[2]"
        ],
        correta: 2
    },
    {
        pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "push()",
            "unshift()",
            "add()"
        ],
        correta: 0
    }
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector("template");

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector("#acertos span")
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    
    dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta

        corretas.delete(item)
        if(estaCorreta){
            corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    
    
    quizItem.querySelector('dl').appendChild(dt)
}

quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem);
}