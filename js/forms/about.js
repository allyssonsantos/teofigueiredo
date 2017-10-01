var addClass = require('../helpers/shadows').addClass;
var removeClass = require('../helpers/shadows').removeClass;
var Modal = require('../helpers/modal');
var Validate = require('../validations/Validate');

(function() {
  const form = document.querySelector('#fale');
  if (form) {
    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const telInput = form.querySelector('#tel');
    const infoInput = form.querySelector('#info');
    const contactSelect = form.querySelector('#contact');
    const periodSelect = form.querySelector('#period');

    const modalOptions = {
      iconClass: 'icon',
      title: 'Obrigado pela mensagem',
      message: 'Em breve entraremos em contato :)',
      button: 'Ok, entendi!'
    };

    const modal = new Modal(form, modalOptions);

    nameInput.addEventListener('blur', function() {
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

    infoInput.addEventListener('blur', function() {
      if (!Validate.info(this.value)) {
        return addClass(this, 'error');
      }

      return removeClass(this, 'error');
    });

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const validateName = Validate.name(nameInput.value);
      const validateEmail = Validate.email(emailInput.value);
      const validateTel = Validate.tel(telInput.value);
      const validateInfo = Validate.info(infoInput.value);

      if (!validateName || !validateEmail || !validateTel || !validateInfo) {
        return false;
      }

      const data = `message=Nome: ${nameInput.value}
      Telefone: ${telInput.value}
      E-mail: ${emailInput.value}
      Opção de contato: ${contactSelect.options[contactSelect.selectedIndex].text}
      Período: ${periodSelect.options[periodSelect.selectedIndex].text}
      Mensagem: ${infoInput.value}`;

      let request = new XMLHttpRequest();
      request.open('POST', 'https://formspree.io/aallysson0@gmail.com', true);
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
      request.setRequestHeader('Accept', 'application/json');
      request.send(data);

      modal.render();
    });
  }
})();