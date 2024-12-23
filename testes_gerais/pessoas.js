class pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura
    }

    calculaIMC() {
        return this.peso / Math.pow(this.altura,2)
        }
    
    classificarIMC(){
        const imc = this.calculaIMC();
        if (imc < 18.5) {
        return 'Abaixo do peso'
        }
        else if (imc >= 18.5 && imc <25) {
        return 'Peso normal'
        }
        else if (imc >= 25 && imc <30) {
        return 'Acima do peso'
        }
        else if (imc >= 30 && imc < 40) {
        return 'Obesidade'
        }
        else {
        return 'Obesidade mórbida'
        }
    }
}


const jose = new pessoa('José', 70, 1.75 );
const jorge = new pessoa('Jorge', 83, 1.78);

const pessoas = [jose, jorge];

for (const pessoa of pessoas) {
    const imc = pessoa.calculaIMC().toFixed(2);
    const classificacao = pessoa.classificarIMC();
    console.log(`O IMC de ${pessoa.nome} é ${imc}, então ele(a) está ${classificacao}.`);
}

    