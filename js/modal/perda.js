var Modal = require('../helpers/modal');

(function() {
  const perda = document.querySelectorAll('.perda');

  const options = {
    headerClass: 'header',
    event: 'click',
    title: 'O que é Perda total?',
    message: 'É considerado perda total se após uma colisão o reparo do veículo segurado ultrapassar 75% de seu valor na tabela FIPE.',
    button: 'Ok, entendi!'
  };

  if (perda) {
    perda.forEach(element => new Modal(element, options));
  }
})();
