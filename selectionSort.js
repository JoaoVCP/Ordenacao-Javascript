//Aula 2
const livros = require('./listaLivros');
const menorValor = require('./menor-Valor');

for(let atual = 0; atual < livros.length; atual++){
   let menor = menorValor(livros, atual);
   
   let livroAtual = livros[atual];
   console.log('posicao atual', atual);
   console.log('livro atual', livros[atual]);
   let livroMenorPreco = livros[menor];
   console.log('livro menor preço', livros[menor]);

   livros[atual] = livroMenorPreco;
   livros[menor] = livroAtual;
}

console.log(livros)