const products = [
  {
    name: "Nike Air Max 270",
    price: 150,
    description:
      "The Nike Air Max 270 is a stylish and comfortable sneaker that features a large Air Max unit in the heel for cushioning and support.",
    image: "https://themix.ng/cdn/shop/files/311098_05_sv03.jpg",
  },
  {
    name: "Adidas Ultraboost 21",
    price: 180,
    description:
      "The Adidas Ultraboost 21 is a high-performance running shoe that features a responsive Boost midsole and a Primeknit upper for a comfortable fit.",
    image:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/50/9822914/1.jpg",
  },
  {
    name: "Puma RS-X3",
    price: 110,
    description:
      "The Puma RS-X3 is a retro-inspired sneaker that features a chunky sole and bold colorways for a statement look.",
    image:
      "https://themix.ng/cdn/shop/files/397470_01_af2591e0-9295-4225-893d-9b03ca4927b1.jpg",
  },
  {
    name: "Reebok Nano X1",
    price: 130,
    description:
      "The Reebok Nano X1 is a versatile training shoe that features a lightweight and breathable upper and a responsive midsole for comfort during high-intensity workouts.",
    image:
      "https://img-1.kwcdn.com/product/fancy/60149ea9-0966-40a9-b1bb-7e61a652523e.jpg",
  },
  {
    name: "New Balance 990v5",
    price: 175,
    description:
      "The New Balance 990v5 is a classic running shoe that features a premium suede and mesh upper and a cushioned midsole for all-day comfort.",
    image: "https://i.ebayimg.com/images/g/K34AAeSwinFquuQg/s-l960.webp",
  },
  {
    name: "Asics Gel-Kayano 27",
    price: 160,
    description:
      "The Asics Gel-Kayano 27 is a stability running shoe that features a supportive upper and a responsive midsole for a smooth ride.",
    image: "https://i.ebayimg.com/images/g/kgoAAeSwZOZqxqMv/s-l960.webp",
  },
];

const productTrack = document.getElementById("productTrack");

products.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <p class="price">$${product.price}</p>
    <button class="add-to-cart">View Details</button>
    `;

  productTrack.appendChild(card);
});

let currentIndex = 0;

let visibleCards = 3;

const maxIndex = products.length - visibleCards;

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function updateVisibleCards() {
  if (window.innerWidth <= 600) {
    visibleCards = 1;
  } else if (window.innerWidth <= 900) {
    visibleCards = 2;
  } else {
    visibleCards = 3;
  }
}

function renderCarousel() {
  const card = productTrack.querySelector(".product-card");
  const gap = window.innerWidth <= 600 ? 15 : 20;
  const cardWidth = card.offsetWidth + gap;

  const distance = currentIndex * cardWidth * visibleCards;

  productTrack.style.transform = `translateX(-${distance}px)`;
}

// renderCarousel();

nextBtn.addEventListener("click", () => {
  updateVisibleCards();

  const maxIndex = Math.ceil(products.length / visibleCards) - 1;

  if (currentIndex < maxIndex) {
    currentIndex++;
    renderCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderCarousel();
  }
});

window.addEventListener("resize", () => {
  currentIndex = 0;

  updateVisibleCards();

  renderCarousel();
});
