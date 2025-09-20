document.addEventListener('DOMContentLoaded', () => {
    if (!window.verticalSwipers) {
      window.verticalSwipers = [];
    }

    const verticalSwiperElements = document.querySelectorAll('.vertical-swiper');

    verticalSwiperElements.forEach((element, index) => {
      const swiperInstance = new Swiper(element, {
        direction: 'vertical',
        mousewheel: true,
        speed: 800,
        easing: 'ease-out',
        grabCursor: true,
        keyboard: {
          enabled: true,
        },
        on: {
          setTranslate(swiper, translate) {
            swiper.slides.forEach((slide, i) => {
              const slideProgress = slide.progress;

              // overlap effect
              if (slideProgress > 0) {
                // neeche wala slide upar aa raha hai
                slide.style.transform = `translateY(${slideProgress * -100}%)`;
                slide.style.zIndex = 10 + i;
              } else {
                // jo slide upar chala gaya
                slide.style.transform = `translateY(0%)`;
                slide.style.zIndex = i;
              }
            });
          },
        },
      });

      window.verticalSwipers[index] = swiperInstance;
    });

    if (window.verticalSwipers.length > 0) {
      window.verticalSwiper = window.verticalSwipers[0];
    }
  });