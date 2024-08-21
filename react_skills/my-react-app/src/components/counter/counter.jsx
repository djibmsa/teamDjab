import React from "react";

// Définition d'une classe React appelée Counter qui étend React.Component
class Counter extends React.Component {
  // Le constructeur est appelé à l'initialisation de la classe
  constructor(props) {
    super(props); // Appel au constructeur parent (React.Component)
    
    // Initialisation de l'état local du composant avec une valeur 'count' à 0
    this.state = {
      count: 0
    };
  }

  // La méthode render est obligatoire dans les composants de classe, elle retourne le JSX à afficher
  render() {
    return (
      <>
        {/* Affichage d'une chaîne de caractères */}
        <div>Etoffe tes skills.</div>

        {/* Affichage de la prop 'title' passée au composant */}
        <div>{this.props.title}</div>

        {/* Conteneur principal pour l'exemple du compteur */}
        <div>
          {/* Titre de la section */}
          <h1>Counter example</h1>

          {/* Affichage de la valeur actuelle du compteur */}
          <p>Counter value: {this.state.count}</p>

          {/* Bouton pour incrémenter la valeur du compteur */}
          <button
            // Ajout d'un gestionnaire d'événements onClick au bouton
            onClick={event => {
              // Incrémente la valeur du compteur de 1
              const newCount = this.state.count + 1;

              // Met à jour l'état local du composant avec la nouvelle valeur du compteur
              this.setState({ count: newCount });
            }}
          >
            {/* Le texte du bouton */}
            +
          </button>
        </div>
      </>
    );
  }
}

// Exportation du composant pour pouvoir l'utiliser dans d'autres fichiers
export default Counter;
