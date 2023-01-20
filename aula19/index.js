/*
Primitivos (imutáveis)  - string, number, boolean, undefined, 
null (bigint, symbol) - Valores copiados

Referência (mutável)-array, object, function - Passado por referência
*/
// let a = [1, 2, 3];
// let b = a;
// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

const a = {
  nome: 'Lucas',
  sobrenome: 'Batista'
};
const b = {...a};

a.nome = 'João';
console.log(a);
console.log(b);