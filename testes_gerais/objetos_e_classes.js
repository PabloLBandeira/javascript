class pessoa {
    nome;
    idade;
    anoNascimento;

    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2024 - idade;
    }

    descrever () {
        console.log (`Meu nome é ${this.nome}, minha idade é ${this.idade} e nasci em ${this.anoNascimento}`);
    }
}

let asdrubal = new pessoa('Asdrubal', 73);
let teofilo = new pessoa('Teófilo', 84)


asdrubal.descrever();
teofilo.descrever();


function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho do que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho do que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} têm a mesma idade`);
    }
}

let juninho = new pessoa('Junhinho', 34);
let jorge = new pessoa('Jorge', 57);

compararPessoas(juninho, jorge)
