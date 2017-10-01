var addClass = require('../helpers/shadows').addClass;
var removeClass = require('../helpers/shadows').removeClass;
var Modal = require('../helpers/modal');
var Validate = require('../validations/Validate');

(function() {
  let name;
  const formCotacao = document.querySelector('#cotacao');
  if (formCotacao) {
    const nameInput = formCotacao.querySelector('#name');
    const emailInput = formCotacao.querySelector('#email');
    const telInput = formCotacao.querySelector('#tel');
    const contactSelect = formCotacao.querySelector('#contact');
    const periodSelect = formCotacao.querySelector('#period');
    const insuranceSelect = formCotacao.querySelector('#insurance');

    const options = {
      iconClass: 'icon',
      title: 'Pedido de cotação enviado',
      button: 'Ok, entendi!'
    };

    const modal = new Modal(formCotacao, options);

    nameInput.addEventListener('blur', function() {
      name = this.value;
      options.message = `Obrigado ${name}, vamos entrar em contato em breve e solicitaremos mais algumas informações para te enviar as opções de seguro.`;

      if (!Validate.name(this.value)) {
        return addClass(this, 'error');
      }

      return removeClass(this, 'error');
    });

    emailInput.addEventListener('blur', function() {
      if (!Validate.email(this.value)) {
        return addClass(this, 'error');
      }

      return removeClass(this, 'error');
    });

    telInput.addEventListener('blur', function() {
      if (!Validate.tel(this.value)) {
        return addClass(this, 'error');
      }

      return removeClass(this, 'error');
    });

    formCotacao.addEventListener('submit', function(event) {
      event.preventDefault();
      const validateName = Validate.name(nameInput.value);
      const validateEmail = Validate.email(emailInput.value);
      const validateTel = Validate.tel(telInput.value);

      if (!validateName || !validateEmail || !validateTel) {
        return false;
      }

      const data = `message=Nome: ${nameInput.value}
      Telefone: ${telInput.value}
      E-mail: ${emailInput.value}
      Opção de contato: ${contactSelect.options[contactSelect.selectedIndex].text}
      Período: ${periodSelect.options[periodSelect.selectedIndex].text}
      Tipo de seguro: ${insuranceSelect.options[insuranceSelect.selectedIndex].text}`;

      let request = new XMLHttpRequest();
      request.open('POST', 'https://formspree.io/aallysson0@gmail.com', true);
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
      request.setRequestHeader('Accept', 'application/json');
      request.send(data);

      modal.render();
    });
  }
})();