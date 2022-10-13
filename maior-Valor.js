// const precoLivros = [25, 15, 30, 50, 45, 20];
const livros = require('./listaLivros.js');

let maisCaro = 0;

for(let atual = 0; atual < livros.length; atual++){
    if (livros[atual].preco > livros[maisCaro].preco){
        maisCaro = atual;
    }
}


console.log(`O livro mais caro custa ${livros[maisCaro].preco} e o titulo e ${livros[maisCaro].titulo}`);