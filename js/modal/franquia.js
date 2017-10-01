var Modal = require('../helpers/modal');

(function() {
  const franquia = document.querySelectorAll('.franquia');

  const options = {
    headerClass: 'header',
    event: 'click',
    title: 'O que é Franquia?',
    message: 'Em caso de sinistro, se não houver indenização integral, o segurado fica responsável por pagar apenas a franquia e a seguradora o restante do reparo.',
    button: 'Ok, entendi!'
  };

  if (franquia) {
    franquia.forEach(element => new Modal(element, options));
  }
})();
