var Modal = require('../helpers/modal');

(function() {
  const fipe = document.querySelectorAll('.fipe');

  const options = {
    headerClass: 'header',
    event: 'click',
    title: 'O que é Tabela Fipe?',
    message: 'A Fundação Instituto de Pesquisa Econômica (FIPE) elabora por meio de pesquisas mensais uma tabela de referência com preços médios dos veículos no mercado nacional.',
    button: 'Ok, entendi!'
  };

  if (fipe) {
    fipe.forEach(element => new Modal(element, options));
  }
})();
