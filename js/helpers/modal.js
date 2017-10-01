class Modal {
  constructor(trigger, options) {
    this.trigger = trigger;
    this.options = options;
    this.open = false;

    if (options.event) {
      this.loadTriggerEvent();
    }
  }

  loadTriggerEvent() {
    this.trigger.addEventListener(this.options.event, event => {
      event.preventDefault();
      this.render();
    });
  }

  loadPostEvents() {
    const overlay = document.querySelector('.overlay');
    const button = document.querySelector('.btn-ok');
    overlay.addEventListener('click', () => this.destroy());
    button.addEventListener('click', () => this.destroy());
  }

  create(content) {
    return `
      <div class="overlay"></div>
      <div class="modal">
        <h2 class="title ${content.headerClass} ${content.iconClass}">${content.title}</h2>
        <p class="message">${content.message}</p>
        <button class="btn-ok">${content.button}</button>
      </div>
    `;
  }

  destroy() {
    const overlay = document.querySelector('.overlay');
    const modal = document.querySelector('.modal');
    overlay.remove();
    modal.remove();
    this.open = false;
  }

  render() {
    if (this.open) {
      return false;
    }

    const modal = this.create(this.options);
    document.body.insertAdjacentHTML('beforeend', modal);
    this.open = true;
    this.loadPostEvents();
  }
}

module.exports = Modal;