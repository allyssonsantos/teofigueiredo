function addClass(element, name) {
  element.classList.add(name);
}

function removeClass(element, name) {
  element.classList.remove(name);
}

module.exports = { addClass, removeClass };