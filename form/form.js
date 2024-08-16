// Fonction pour gérer la soumission du formulaire
function handleSubmit(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Ajoutez ici votre logique pour traiter les données du formulaire
    console.log("Formulaire soumis avec succès !");

    // Afficher l'overlay du logo après la soumission du formulaire
    const logoOverlay = document.getElementById("logoOverlay");
    if (logoOverlay) {
        logoOverlay.style.display = "flex"; // Affiche l'overlay
    }

    // Masquer l'overlay du logo après un délai de 3 secondes
    setTimeout(function() {
        // Redirection vers la page d'accueil après le délai
        window.location.href = "/index/index.html";
    }, 3000); // 3000 ms = 3 secondes
}

// Ajouter un écouteur d'événement à la soumission du formulaire
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".formSport");
    if (form) {
        form.addEventListener("submit", handleSubmit);
    }
});
