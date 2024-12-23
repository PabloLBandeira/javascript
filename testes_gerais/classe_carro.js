class Carros {
    marca;
    modelo;
    cor;
    consumoMedioPorKm;

    constructor (marca, modelo, cor, consumoMedioPorKm) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.consumoMedioPorKm = consumoMedioPorKm;
    }

    calcularGastoPercurso(distancia, precoCombustivel) {
        const litrosConsumidos = distancia / this.consumoMedioPorKm;
        return litrosConsumidos * precoCombustivel;
    }
}

const fusca = new Carros('Volkswagen', 'Fuscão', 'Preto', 9);
const opala = new Carros('GM', 'Opla', 'Metálico azul', 4);
let distancia = 100;
let precoCombustivel = 6.29;

const carros = [fusca, opala];

for (const carro of carros) {
    const gasto = carro.calcularGastoPercurso(distancia, precoCombustivel);
    console.log(`O ${carro.modelo} ${carro.cor} gasta R$ ${gasto.toFixed(2)} para andar ${distancia} km`);
}



