// document.addEventListener('DOMContentLoaded', function () {
//   // Initialize Swiper for this specific product
//   const swiperElement = document.querySelector('.product-swiper-{{ product.id }}');
//   if (swiperElement) {
//     new Swiper(swiperElement, {
//       slidesPerView: 1,
//       spaceBetween: 0,
//       loop: true,
//       speed: 400,
//       on: {
//         init: function () {
//           // Swiper initialized successfully
//         },
//       },
//     });
//   }

//   // Handle Add to Cart
//   const addToCartForms = document.querySelectorAll('.add-to-cart-form');
//   addToCartForms.forEach((form) => {
//     form.addEventListener('submit', async (event) => {
//       event.preventDefault();
//       const button = form.querySelector('.quick_add');
//       button.disabled = true;
//       button.textContent = 'Adding...';

//       try {
//         const formData = new FormData(form);
//         const response = await fetch('/cart/add.js', {
//           method: 'POST',
//           body: formData,
//         });

//         if (!response.ok) {
//           throw new Error('Failed to add product to cart');
//         }

//         // Update cart UI (e.g., cart count)
//         await updateCartUI();
//         showSuccessMessage();
//       } catch (error) {
//         showErrorMessage(error.message);
//       } finally {
//         button.disabled = false;
//         button.textContent = 'Quick Add';
//       }
//     });
//   });

//   async function updateCartUI() {
//     try {
//       const response = await fetch('/cart.js');
//       const cart = await response.json();
//       // Update cart count in the UI (e.g., header cart icon)
//       const cartCountElement = document.querySelector('.cart-count');
//       if (cartCountElement) {
//         cartCountElement.textContent = cart.item_count;
//       }
//     } catch (error) {
//       console.error('Error updating cart:', error);
//     }
//   }

//   function showSuccessMessage() {
//     // Simple alert for now; replace with a modal or toast notification
//     alert('Product added to cart!');
//     // Optionally, redirect to cart: window.location.href = '/cart';
//   }

//   function showErrorMessage(message) {
//     // Simple alert for now; replace with a better UI
//     alert(`Error: ${message}`);
//   }
// });