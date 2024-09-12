// Desafio: hora da pratica 01
let titulo = document.querySelector('h1');   // Item 2 do desafio          
titulo.innerHTML = 'Hora do desafio';

function clickBotao() {   // Item 3
    console.log('O botão foi clicado');
}

function alertaBotao() { // Item 4
    alert('Eu amo JS');
}

function clickPergunta() {   // Item 5
    let cidade = prompt(`Digite o nome de uma cidade do Brasil: `);
    alert(`Estive em ${cidade} e lembrei de você`);
}

function clickSoma() {   // Item 6
    let soma1 = +prompt('Digite o primeiro número: ');
    let soma2 = +prompt('Digite o segundo número: ');
    let resultado = soma1 + soma2;
    alert(`${soma1} + ${soma2} é igual a: ${resultado}`);
}