function meuEscopo () {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  const pessoas = [];

//   form.onsubmit = function (evento) {
//     evento.preventDefault();
//     alert(1);
//     console.log('Foi enviado.');
//   };

  function recebeEventoForm (evento) {
    evento.preventDefault();
    
    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    console.log(pessoas);
  }
  
  form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();