document.addEventListener('DOMContentLoaded', () => {
  // Initialize Swiper for main slider
  const mainSlider = new Swiper('.main-slider', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: new Swiper('.thumbnail-slider', {
        slidesPerView: 4,
        spaceBetween: 10,
        freeMode: true,
        watchSlidesProgress: true,
      }),
    },
  });

  // Image Zoom Effect
  const images = document.querySelectorAll('.product-image');
  images.forEach(img => {
    img.addEventListener('mousemove', (e) => {
      const rect = img.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      img.style.transformOrigin = `${x}px ${y}px`;
      img.style.transform = 'scale(1.5)';
    });
    img.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
    });
  });

  // Variant Selector Update
  const variantSelector = document.getElementById('variant-selector');
  if (variantSelector) {
    variantSelector.addEventListener('change', () => {
      const form = document.getElementById('product-form');
      fetch(`/products/{{ product.handle }}?variant=${variantSelector.value}`)
        .then(response => response.text())
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const newPrice = doc.querySelector('.price').innerText;
          document.querySelector('.price').innerText = newPrice;
          const button = document.querySelector('.btn-add-to-cart');
          button.disabled = !doc.querySelector('button[type="submit"]').textContent.includes('Add to Cart');
          button.textContent = button.disabled ? 'Out of Stock' : 'Add to Cart';
        });
    });
  }
});