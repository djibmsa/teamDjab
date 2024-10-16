import React, { useState } from "react";

function ControlledForm() {
  // Déclaration des états pour stocker les valeurs du formulaire
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Gestionnaire de soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

    // Affiche les valeurs du formulaire dans la console (ou toute autre logique souhaitée)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Réinitialiser les champs après soumission (facultatif)
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name} // La valeur est contrôlée par l'état
          onChange={(e) => setName(e.target.value)} // Met à jour l'état lorsque l'utilisateur tape
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email} // La valeur est contrôlée par l'état
          onChange={(e) => setEmail(e.target.value)} // Met à jour l'état lorsque l'utilisateur tape
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message} // La valeur est contrôlée par l'état
          onChange={(e) => setMessage(e.target.value)} // Met à jour l'état lorsque l'utilisateur tape
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
