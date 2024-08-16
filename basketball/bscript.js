document.querySelector(".burger").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("active");
});

let cards = document.getElementsByClassName("cards")[0];

for (profil of player) {
  let card = createCard(profil);
  cards.appendChild(card);
}
