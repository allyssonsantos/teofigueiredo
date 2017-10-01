(function showTestimonials() {
  const testimonials = document.querySelectorAll('.testimonial');

  if (document.body.offsetWidth < 800 && testimonials.length) {
    const testimonialHeight = testimonials[0].offsetHeight;
    const moreButton = document.querySelector('#moreTestimonial');

    testimonials.forEach(function(element) {
      element.style.height = 0;
      element.style.marginBottom = 0;
    });
    testimonials[0].style.height = `${testimonialHeight}px`;
    testimonials[0].style.marginBottom = '20px';

    moreButton.addEventListener('click', function(e) {
      e.preventDefault();
      testimonials.forEach(function(element) {
        element.style.height = `${testimonialHeight}px`;
        element.style.marginBottom = '20px';
      });
      this.classList.add('hidden');
    });

    window.addEventListener('resize', function() {
      setTimeout(function() {
        if (document.body.offsetWidth > 800) {
          testimonials.forEach(function(element) {
            element.style.height = '';
            element.style.marginBottom = '';
          });
        }
      }, 200);
    });

  }
})();
