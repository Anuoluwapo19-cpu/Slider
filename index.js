const sliderImage = document.querySelector("#sliderImage");
const prevButton = document.querySelector("#prevBtn");
const nextButton = document.querySelector("#nextBtn");
const pagination = document.querySelector("#pagination");

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active")
})

const images = [
  "https://davidjoelschools.com/images/log1.png",
  "https://davidjoelschools.com/images/log30.jpeg",
  "https://davidjoelschools.com/images/log24.jpeg",
  "https://davidjoelschools.com/images/log25.jpeg",
  "https://davidjoelschools.com/images/log32.jpg",
  "https://davidjoelschools.com/images/log23.jpeg",
];

let currentIndex = 0;

function showImage() {
  sliderImage.src = images[currentIndex];

  const paginationButtons = document.querySelectorAll(".pagination-button");

  paginationButtons.forEach(function (button, index) {
    button.classList.remove("active");

    if (index === currentIndex) {
      button.classList.add("active");
    }
  });
}

// currentIndex = currentIndex + 1;
// currentIndex++;

nextButton.addEventListener("click", function () {
  // currentIndex++;
  // showImage();

  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage();
});

prevButton.addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showImage();
});

images.forEach(function (image, index) {
  const button = document.createElement("button");
  // button.textContent = index + 1;
  button.classList.add("pagination-button");
  button.dataset.index = index;

  button.addEventListener("click", function () {
    currentIndex = index;
    showImage();
  });

  pagination.appendChild(button);
});

showImage();
