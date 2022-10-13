// const precoLivros = [25, 15, 30, 50, 45, 20];
const livros = require('./listaLivros.js');

function menorValor(arrProdutos, posicaoInicial){
    let maisBarato = posicaoInicial;

    for(let atual = posicaoInicial; atual < arrProdutos.length; atual++){
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
            maisBarato = atual;
        }
    }
    return maisBarato;
}

module.exports = menorValor;

// console.log(`O livro mais barato custa ${livros[maisBarato].preco} e o titulo e ${livros[maisBarato].titulo}`);