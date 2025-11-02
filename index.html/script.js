// Basic cart counter functionality
let cartCount = 0;
const cartCountElement = document.getElementById("cart-count");

document.querySelectorAll(".product-card button").forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++;
    cartCountElement.textContent = cartCount;
    // ===== Product Page Search and Sort =====
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const sortSelect = document.getElementById("sortSelect");
  const productList = document.getElementById("productList");
  const products = Array.from(productList.getElementsByClassName("product"));

  // 🔍 Search Filter
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    products.forEach(product => {
      const name = product.dataset.name.toLowerCase();
      product.style.display = name.includes(query) ? "block" : "none";
    });
  });

  // 🔽 Sorting Feature
  sortSelect.addEventListener("change", () => {
    const value = sortSelect.value;
    let sortedProducts = [...products];

    if (value === "name") {
      sortedProducts.sort((a, b) =>
        a.dataset.name.localeCompare(b.dataset.name)
      );
    } else if (value === "priceLowHigh") {
      sortedProducts.sort((a, b) =>
        parseInt(a.dataset.price) - parseInt(b.dataset.price)
      );
    } else if (value === "priceHighLow") {
      sortedProducts.sort((a, b) =>
        parseInt(b.dataset.price) - parseInt(a.dataset.price)
      );
    }

    productList.innerHTML = "";
    sortedProducts.forEach(p => productList.appendChild(p));
  });
});


renderProducts(products);

// Sorting
sortSelect.addEventListener("change", () => {
  let sorted = [...products];
  if (sortSelect.value === "price-low") sorted.sort((a, b) => a.price - b.price);
  if (sortSelect.value === "price-high") sorted.sort((a, b) => b.price - a.price);
  if (sortSelect.value === "popular") sorted.sort((a, b) => b.popularity - a.popularity);
  renderProducts(sorted);
});
    // 🛍️ Product Data
const products = [
  { name: "Blackhead Remover", price: 499, img: "img/blackhead-remover.jpg", popularity: 90 },
  { name: "Vitamin C Serum", price: 799, img: "img/vitamin-c.jpg", popularity: 120 },
  { name: "Aloe Vera Gel", price: 299, img: "img/aloe-vera.jpg", popularity: 80 },
  { name: "Face Cleanser", price: 599, img: "img/cleanser.jpg", popularity: 150 },
  { name: "Charcoal Mask", price: 699, img: "img/mask.jpg", popularity: 110 },
];

const slider = document.getElementById("slider");
const sortSelect = document.getElementById("sort");

function renderProducts(list) {
  slider.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
    `;
    slider.appendChild(card);
  });
}



// Auto-scroll every 3 seconds
setInterval(() => {
  slider.scrollBy({ left: 240, behavior: "smooth" });
  if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
    slider.scrollTo({ left: 0, behavior: "smooth" });
  }
}, 3000);

  });
});
