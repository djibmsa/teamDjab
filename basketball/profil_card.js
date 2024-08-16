function createCard(profil) {
  // Cette fonction doit créer un élément de carte (card) pour un bien à louer.

  let card = document.createElement("div");
  // Crée un élément 'div' pour représenter la carte.

  card.classList.add("card");
  // Ajoute la classe 'card' à la div pour lui appliquer les styles CSS associés.

  let cardHeader = document.createElement("div");
  // Crée un élément 'div' pour représenter l'en-tête de la carte.

  cardHeader.classList.add("card-header");
  // Ajoute la classe 'card-header' à l'en-tête pour lui appliquer les styles CSS associés.

  let cardImg = document.createElement("div");
  // Crée un élément 'div' pour représenter l'image de la carte.

  cardImg.classList.add("card-img");
  // Ajoute la classe 'card-img' à la div pour lui appliquer les styles CSS associés.

  cardImg.style.backgroundImage = "url('" + profil.img + "')";
  // Définit l'image de fond de la div 'card-img' en utilisant l'URL de l'image contenue dans l'objet 'rent'.

  let cardBody = document.createElement("div");
  // Crée un élément 'div' pour représenter le corps de la carte.

  cardBody.classList.add("card-body");
  // Ajoute la classe 'card-body' à la div pour lui appliquer les styles CSS associés.

  let h3 = document.createElement("h3");
  // Crée un élément 'h2' pour le titre de la carte.

  h3.classList.add("card-title");
  // Ajoute la classe 'card-title' au 'h2' pour lui appliquer les styles CSS associés.

  h3.innerText = profil.name;
  // Définit le texte du 'h2' comme étant le nom du bien à louer (rent.name).

  let h4 = document.createElement("h4");
  // Crée un élément 'h2' pour le titre de la carte.

  h4.classList.add("team");
  // Ajoute la classe 'card-title' au 'h2' pour lui appliquer les styles CSS associés.

  h4.innerText = profil.team;

  let h5 = document.createElement("h5");
  // Crée un élément 'h2' pour le titre de la carte.

  h5.classList.add("post");
  // Ajoute la classe 'card-title' au 'h2' pour lui appliquer les styles CSS associés.

  h5.innerText = profil.type;
  // Définit le texte du 'h2' comme étant le nom du bien à louer (rent.name).

  card.appendChild(cardHeader);
  // Ajoute l'en-tête de la carte (cardHeader) comme premier enfant de la carte.

  card.appendChild(cardImg);
  // Ajoute l'image de la carte (cardImg) à l'intérieur de la carte, après l'en-tête.

  card.appendChild(cardBody);
  // Ajoute le corps de la carte (cardBody) comme troisième enfant de la carte.

  cardBody.appendChild(h3);
  // Ajoute le titre (h2) à l'intérieur du corps de la carte.

  cardBody.appendChild(h4);
  // Ajoute le titre (h2) à l'intérieur du corps de la carte.

  cardBody.appendChild(h5);
  // Ajoute le titre (h2) à l'intérieur du corps de la carte.

  return card;
  // Retourne l'élément 'div' complet qui constitue la carte pour l'utiliser ailleurs dans le DOM.
}
