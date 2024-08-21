function NavBar({ pokemonList, setPokemonIndex }) {
  // Fonction de gestion du clic sur un bouton Pokémon
  const handleButtonClick = (index, name) => {
    // Met à jour l'index du Pokémon sélectionné
    setPokemonIndex(index);
  
    // Vérifie le nom du Pokémon sélectionné et affiche une alerte correspondante
    if (name === "pikachu") {
      // Affiche l'alerte pour Pikachu
      alert('pika pikachu !!!');
    } else if (name === "charmander") {
      // Affiche l'alerte pour Charmander
      alert('charrrrrr maaannnder!!!');
    }
    // Aucune action pour les autres Pokémon
  };
  

  return (
    <nav style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {pokemonList.map((pokemon, index) => (
        <button
          key={pokemon.name}
          onClick={() => handleButtonClick(index, pokemon.name)}
          className="button-pokemon"
        >
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
