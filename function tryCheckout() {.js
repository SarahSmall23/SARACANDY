function tryCheckout() {
  if(cart.length === 0) {
    alert('Your cart is empty! Please add some candies first.');
    showSection('shop');
  } else {
    showSection('checkout');
  }
}
