var Modal = require('../helpers/modal');

(function() {
  const sinistro = document.querySelectorAll('.sinistro');

  const options = {
    headerClass: 'header',
    event: 'click',
    title: 'O que é Sinistro?',
    message: 'É o evento em que o bem segurado sofre acidente ou prejuízo material.',
    button: 'Ok, entendi!'
  };

  if (sinistro) {
    sinistro.forEach(element => new Modal(element, options));
  }
})();
