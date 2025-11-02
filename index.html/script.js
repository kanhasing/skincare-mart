// Basic cart counter functionality
let cartCount = 0;
const cartCountElement = document.getElementById("cart-count");

document.querySelectorAll(".product-card button").forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++;
    cartCountElement.textContent = cartCount;
  });
});
