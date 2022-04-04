// Criar um método para ler propriedades de um objeto e
// exibir somente as propriedades do tipo string nele

const filme = {
    titulo : "Harry Potter and the Philosopher's Stone",
    ano : 2001,
    diretor : 'Chris Columbus',
    personagem : 'Harry Potter'
}

exibirPropriedades(filme);

function exibirPropriedades(objeto) {
    for (propriedade in objeto)
        if(typeof objeto[propriedade] === 'string')
            console.log(propriedade + ':', objeto[propriedade])
}