function toggle(element) {
  if (element.classList.contains('-hide')) {
    element.classList.remove('-hide');
    element.classList.add('-show');
  } else {
    element.classList.remove('-show');
    element.classList.add('-hide');
  }
}

module.exports = toggle;