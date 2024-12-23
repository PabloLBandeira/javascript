// Uma sala contém 5 alunos, para cada um foi sorteado um número de 1 a 100. Crie um arquivo que receba os números sorteados e mostre o maior deles


const entradas = [5, 50, 10, 98, 99];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = {gets, print, entradas};