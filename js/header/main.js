var addClass = require('../helpers/shadows').addClass;
var removeClass = require('../helpers/shadows').removeClass;

(function menuShadow() {
  const header = document.querySelector('.page-header');
  const mainBox = document.querySelector('.main-box');
  const button = header.querySelector('.item.button');
  const headerHeight = header.offsetHeight;
  const mainBoxHeight = mainBox.offsetHeight;
  let scrollDistance = 0;

  window.addEventListener('scroll', function() {
    setTimeout(function() {
      scrollDistance = window.scrollY;

      if (scrollDistance > mainBoxHeight - headerHeight) {
        addClass(header, '-shadow');
        addClass(header, 'home');
        addClass(button, '-show');
      } else {
        removeClass(header, '-shadow');
        removeClass(header, 'home');
        removeClass(button, '-show');
      }

    }, 50);
  });

})();