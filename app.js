const cards = document.querySelectorAll(".card");

let currentCardIndex = 0;
cards[currentCardIndex].classList.add("show");

setInterval(() => {
  cards[currentCardIndex].classList.remove("show");
  currentCardIndex = (currentCardIndex + 1) % cards.length;
  cards[currentCardIndex].classList.add("show");
}, 5000);