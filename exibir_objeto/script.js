let endereco = {
    rua: 'Pedro de Alcantra', 
    cidade:'Campina Grande', 
    CEP: 58410630
};

function exibirEndereço(endereco) {
    for (let chave in endereco)
        console.log(chave, endereco[chave]);
}

exibirEndereço(endereco);