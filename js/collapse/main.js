(function collapse() {
  const body = document.body;

  if (body.offsetWidth > 800) {
    return;
  }

  const container = document.querySelectorAll('.collapse');

  container.forEach(function (element) {
console.log('adicionou eventos');
    var subtitle = element.querySelector('.subtitle');
    subtitle.classList.add('collapsed');
    subtitle.parentNode.querySelector('.description').classList.add('collapsed');
    subtitle.addEventListener('click', function () {
console.log('clicou');
      this.classList.toggle('collapsed');
      this.parentNode.querySelector('.description').classList.toggle('collapsed');
    });
  });
})();