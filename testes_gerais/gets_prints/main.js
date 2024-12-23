const {gets, print, entradas} = require('./funcao_auxiliar');

const sorteados = [];

for (let i = 0; i < entradas.length; i++) {
    const numero = gets();
    sorteados.push(numero);
}

const maiorNumero = Math.max(...sorteados);


print(maiorNumero);