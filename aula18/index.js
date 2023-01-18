// Objetos (Basico)
const pessoa1 = {
  nome: 'Lucas',
  sobrenome: 'Batista',
  idade: 27,

  fala () {
    console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
  },

  incrementaIdade() {
    ++this.idade;
  }
};

pessoa1.fala();



// function criaPessoa (nome, sobrenome, idade) {
//   return {
//     nome,
//     sobrenome,
//     idade
//   };
// }

// const pessoa1 = criaPessoa('Lucas', 'Batista', 27);
// const pessoa2 = criaPessoa('Jackeline', 'Gregorio', 26);

// console.log(pessoa1.nome, pessoa2.nome);

// const pessoa1 = {
//   nome: 'Lucas', 
//   sobrenome: 'Batista',
//   idade: 27
// };

// const pessoa2 = {
//   nome: 'Jackeline', 
//   sobrenome: 'Gregorio',
//   idade: 26
// };

// console.log(pessoa1.nome);
//console.log(pessoa1.sobrenome);

// const nome01 = 'Lucas';
// const sobrenome01 = 'Batista';
// const idade01 = 27;

// const nome02 = 'Jackeline';
// const sobrenome02 = 'Gregorio';
// const idade02 = 26;