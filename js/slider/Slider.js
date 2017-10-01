class Slider {
  constructor(element, bulletsContainer) {
    this.elements = {
      sliderContainer: element,
      sliderBulletsContainer: bulletsContainer,
      slides: element.querySelector('.slides'),
      slide: element.querySelectorAll('.slide'),
    }

    this.config = {
      currentPosition: 0,
      currentSlide: 0,
      finalPosition: 0,
      initPosition: 0,
      mouseDown: false,
      previousPosition: 0,
      slideWidth: 0,
      slideQuantity: 0,
      isMobile: false,
    }
  }

  init() {
    this.isMobile();
    this.initialMsTranslate(200);
    this.setSlidesConfiguration();
    this.createBullets(this.elements.slide.length);
    this.setActiveSlide(this.config.currentSlide);
    this.changeByBullet();
    this.loadEvents();
  }

  initialMsTranslate(ms) {
    this.elements.slides.style.transitionDuration = `${ms}ms`;
  }

  setSlidesConfiguration() {
    const styles = window.getComputedStyle(this.elements.slide[1]);
    this.config.slideWidth = this.elements.slide[1].offsetWidth + parseInt(styles.marginLeft);
    this.config.slideQuantity = this.elements.slide.length;
  }

  setActiveSlide(currentIndex) {
    this.elements.bullet.forEach(element => element.classList.remove('active'));
    this.elements.bullet[currentIndex].classList.add('active');
    this.elements.slide.forEach(element => element.classList.remove('active'));
    this.elements.slide[currentIndex].classList.add('active');
  }

  loadEvents() {
    this.elements.slide.forEach(element => {
      element.addEventListener('mousedown', this.start.bind(this));
      element.addEventListener('mousemove', this.move.bind(this));
      element.addEventListener('mouseup', this.end.bind(this));

      element.addEventListener('touchstart', this.start.bind(this));
      element.addEventListener('touchmove', this.move.bind(this));
      element.addEventListener('touchend', this.end.bind(this));
    });
    window.addEventListener('resize', () => {
      this.setSlidesConfiguration();
      this.initialMsTranslate(0);
      this.translate(-(this.config.slideWidth * this.config.currentSlide));
    });
  }

  start(event) {
    const clickEvent = event.touches || event;
    const distance = clickEvent[0] ? clickEvent[0].pageX : clickEvent.pageX;
    this.config.mouseDown = true;
    this.config.initPosition = distance;
    this.config.previousPosition = this.config.currentPosition;
    this.initialMsTranslate(0);
  }

  move(event) {
    if (!this.config.mouseDown) {
      return false;
    }

    const clickEvent = event.touches || event;
    const distance = clickEvent[0] ? clickEvent[0].pageX : clickEvent.pageX;
    this.config.finalPosition = distance - this.config.initPosition;
    this.config.finalPosition += this.config.currentPosition;
    this.elements.slides.style.transform = `translate3d(${this.config.finalPosition}px, 0, 0)`;
  }

  end(event) {
    this.config.mouseDown = false;
    this.initialMsTranslate(200);

    if (this.config.finalPosition > this.config.previousPosition) {
      this.moveBackward();
    } else if (this.config.finalPosition < this.config.previousPosition) {
      this.moveForward();
    }
  }

  moveBackward() {
    if (this.config.currentSlide === 0) {
      return this.translate(this.config.currentPosition);
    }

    this.config.currentPosition += this.config.slideWidth;
    --this.config.currentSlide;
    this.setActiveSlide(this.config.currentSlide);
    this.translate(this.config.currentPosition);
  }

  moveForward() {
    if (!this.config.isMobile) {
      if (this.config.currentSlide === (this.config.slideQuantity -2)) {
        return this.translate(this.config.currentPosition);
      }
    }

    if (this.config.isMobile) {
      if (this.config.currentSlide === (this.config.slideQuantity -1)) {
        return this.translate(this.config.currentPosition);
      }
    }

    this.config.currentPosition += (-this.config.slideWidth);
    ++this.config.currentSlide;
    this.setActiveSlide(this.config.currentSlide);
    this.translate(this.config.currentPosition);
  }

  createBullets(number) {
    if (this.config.isMobile) {
      for (let i = 0; i < number; i++) {
        const bullet = document.createElement('span');
        bullet.classList.add('bullet');
        this.elements.sliderBulletsContainer.appendChild(bullet);
      }
    }

    if (!this.config.isMobile) {
      for (let i = 0; i < number -1 ; i++) {
        const bullet = document.createElement('span');
        bullet.classList.add('bullet');
        this.elements.sliderBulletsContainer.appendChild(bullet);
      }
    }

    this.elements.bullet = document.querySelectorAll('.bullet');
  }

  changeByBullet() {
    this.elements.bullet.forEach((element, index) => {
      element.addEventListener('click', () => {
        this.setActiveSlide(index);
        this.translate(-(this.config.slideWidth * index));
        this.config.currentSlide = index;
      });
    })
  }

  translate(offset) {
    this.elements.slides.style.transform = `translate3d(${offset}px, 0, 0)`;
    this.config.currentPosition = offset;
  }

  isMobile() {
    if (document.body.offsetWidth < 800) {
      return this.config.isMobile = true;
    }

    return this.config.isMobile = false;
  }
}

window.onload = function () {
  const sliderElement = document.querySelector('.slider-container');
  const bulletsContainer = document.querySelector('.bullets');
  if (sliderElement) {
    const slider = new Slider(sliderElement, bulletsContainer);
    slider.init();
  }
}