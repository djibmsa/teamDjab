// User.js
import React from "react";

class User extends React.Component {
  render() {
    return (
      <><div>Mon composant utilisateur.</div><div>{this.props.name}</div></>
    );
  }
}

export default User;

/*

Définition
1class User extends React.Component
Dans un composant à base de classe, le mot class est toujours requis avant le nom du composant, comme dans l'exemple "class User"
Ensuite, il y a "React.Component" qui étend toutes les propriétés du composant ("Component") intégré de la bibliothèque React.

*/

/*

Méthode render
La méthode render est la seule méthode obligatoire au sein d'un composant à base de classe.
Elle est également responsable de renvoyer l'élément JSX lorsque le composant est initialement rendu.
Elle est responsable du rendu de tout changement qui se produira dans le composant.
Ceci est fait par un processus appelé state, que nous verrons dans les prochaines quêtes.

*/

/*
Composants intelligents et stupides

Composants intelligents (Classe)

Un composant à base de classe est souvent appelé composant "intelligent". Il est réactif et se modifie en fonction des interactions avec l'utilisateur, d'un événement ou lors des manipulations du DOM.

Composants stupides (Fonctionnels)

Un composant fonctionnel est souvent qualifié de composant "stupide". Il reçoit principalement des props et présente ces données visuellement, mais n'est pas capable de les changer ou de les manipuler via une interaction utilisateur.
*/