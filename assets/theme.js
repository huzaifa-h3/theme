function decreaseQuantity(button) {
  const input = button.parentElement.querySelector('.quantity-input');
  const currentValue = parseInt(input.value);
  if (currentValue > 1) {
    input.value = currentValue - 1;
  }
}

function increaseQuantity(button) {
  const input = button.parentElement.querySelector('.quantity-input');
  const currentValue = parseInt(input.value);
  if (currentValue < 99) {
    input.value = currentValue + 1;
  }
}
