// const precoLivros = [25, 15, 30, 50, 45, 20];
const livros = require('./listaLivros');

let maisBarato = 0;

for(let atual = 0; atual < livros.length; atual++){
    if (livros[atual] < livros[maisBarato]){
        maisBarato = atual;
    }
}

console.log(`O livro mais barato custa ${livros[maisBarato].preco} e o titulo e ${livros[maisBarato].titulo}`);