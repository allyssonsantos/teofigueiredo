var toggle = require('../helpers/toggle');

(function toggleMenu() {
  var body = document.body;
  var menuButton = document.querySelector('.hamburguer');
  var menu = document.querySelector('.menu');

  menuButton.addEventListener('click', function () {
    var xlink = this.querySelector('.hamburguericon use');
    toggle(menu);

    if (xlink.getAttributeNS('http://www.w3.org/1999/xlink', 'href').indexOf('hamburguer') > 0) {
      this.querySelector('.hamburguericon use').setAttributeNS('http://www.w3.org/1999/xlink', 'href', '/img/icons.svg#close');
    } else {
      this.querySelector('.hamburguericon use').setAttributeNS('http://www.w3.org/1999/xlink', 'href', '/img/icons.svg#hamburguer');
    }
  });
})();