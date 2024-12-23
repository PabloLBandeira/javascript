let precoEtiqueta = 100;
let formaPagamento = 4;

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto/100)));
}

function aplicarJuros (valor, juros) {
    return (valor + (valor * (juros/100)));
}

if (formaPagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));
}

else if (formaPagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
}

else if (formaPagamento === 3) {
    console.log(precoEtiqueta);
}

else {
    console.log(aplicarJuros(precoEtiqueta, 10));
}
