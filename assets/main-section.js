  document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.horizontal-slide');
    if (sections.length > 0) {
      const wrapper = document.createElement('div');
      wrapper.className = 'swiper-wrapper';
      sections.forEach((section) => {
        wrapper.appendChild(section);
      });

      const grandWrapper = document.createElement('div');
      grandWrapper.className = 'swiper-grand';

      // inject arrows
      const prev = document.createElement('div');
      prev.className = 'swiper-button-prev';
      const next = document.createElement('div');
      next.className = 'swiper-button-next';

      grandWrapper.appendChild(wrapper);
      wrapper.appendChild(prev);
      wrapper.appendChild(next);

      document.body.prepend(grandWrapper);

      // init swiper
      new Swiper('.swiper-grand', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        keyboard: {
          enabled: true,
        },
      });
    }
  }); 