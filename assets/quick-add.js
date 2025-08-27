(function () {
  const AddToCart = {
    // Configuration defaults
    config: {
      cartEndpoint: '/cart/add.js',
      cartFetchEndpoint: '/cart.js',
      successTimeout: 400,
      cartItemSelector: '.cart_item-count',
      addedIcon: 'https://cdn.shopify.com/s/files/1/0555/5555/5555/files/added-to-cart.png',
      defaultIcon: 'https://cdn.shopify.com/s/files/1/0555/5555/5555/files/add-to-cart.png',
    },

    // Initialize all add-to-cart forms
    init() {
      const forms = document.querySelectorAll('.add-to-cart-form');
      console.debug('AddToCart: Found', forms.length, 'forms');
      forms.forEach(form => this.setupForm(form));
    },

    // Setup event listeners for a single form
    setupForm(form) {
      const button = form.querySelector('.quick_add');
      if (!button) {
        console.warn('AddToCart: No .quick_add button found in form', form);
        return;
      }

      console.debug('AddToCart: Setting up form for product ID', form.dataset.productId);

      // Get config from data attributes
      const config = {
        addedIcon: button.dataset.addedIcon || this.config.addedIcon,
        defaultIcon: button.dataset.defaultIcon || this.config.defaultIcon,
        successTimeout: parseInt(button.dataset.successTimeout) || this.config.successTimeout,
      };

      // Store original button content
      const originalContent = button.innerHTML;
      const ariaLabel = button.getAttribute('aria-label') || 'Add to cart';

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (button.disabled) {
          console.debug('AddToCart: Button disabled, skipping submit for product ID', form.dataset.productId);
          return;
        }

        button.disabled = true;

        try {
          const formData = new FormData(form);
          const response = await fetch(this.config.cartEndpoint, {
            method: 'POST',
            body: formData,
          });

          if (!response.ok) {
            throw new Error('Failed to add to cart');
          }

          console.debug('AddToCart: Successfully added product ID', form.dataset.productId);

          // Update button to success state immediately
          button.innerHTML = `<img src="${config.addedIcon}" alt="Added to cart" height="24" width="24">`;
          button.setAttribute('aria-label', 'Added to cart');

          // Update cart UI
          await this.updateCartUI();

          // Dispatch custom event
          const event = new CustomEvent('cart:added', { detail: { formData } });
          document.dispatchEvent(event);

          // Revert button after timeout
          setTimeout(() => {
            button.innerHTML = originalContent;
            button.setAttribute('aria-label', ariaLabel);
            button.disabled = false;
            console.debug('AddToCart: Button reverted for product ID', form.dataset.productId);
          }, config.successTimeout);
        } catch (error) {
          console.error('AddToCart: Error for product ID', form.dataset.productId, error);
          this.showErrorMessage(error.message, form);
          button.innerHTML = originalContent;
          button.setAttribute('aria-label', ariaLabel);
          button.disabled = false;
        }
      });
    },

    // Update cart UI (cart item count)
    async updateCartUI() {
      const cartItems = document.querySelectorAll(this.config.cartItemSelector);
      if (!cartItems.length) {
        console.warn('AddToCart: No .cart_item-count elements found');
        return;
      }

      try {
        const response = await fetch(this.config.cartFetchEndpoint);
        const cart = await response.json();

        cartItems.forEach(el => {
          if (cart.item_count > 0) {
            el.textContent = cart.item_count > 99 ? '99+' : cart.item_count;
            el.style.display = 'inline-block';
          } else {
            el.style.display = 'none';
          }
        });
        console.debug('AddToCart: Cart updated with', cart.item_count, 'items');
      } catch (error) {
        console.error('AddToCart: Error updating cart UI:', error);
      }
    },

    // Show error message
    showErrorMessage(message, form) {
      const errorDiv = document.createElement('div');
      errorDiv.className = 'cart-error';
      errorDiv.setAttribute('role', 'alert');
      errorDiv.textContent = message || 'Error adding to cart. Please try again.';
      form.appendChild(errorDiv);
      setTimeout(() => errorDiv.remove(), 3000);
    }
  };

  // Initialize on DOM load
  document.addEventListener('DOMContentLoaded', () => AddToCart.init());

  // Re-initialize for dynamically loaded sections
  document.addEventListener('shopify:section:load', (event) => {
    const section = event.target;
    const forms = section.querySelectorAll('.add-to-cart-form');
    forms.forEach(form => AddToCart.setupForm(form));
  });

  // Expose AddToCart globally
  window.AddToCart = AddToCart;
})();
