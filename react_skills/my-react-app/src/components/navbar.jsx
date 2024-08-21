function NavBar({ pokemonList, setPokemonIndex }) {
  return (
    <nav style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {pokemonList.map((pokemon, index) => (
        <button
          key={pokemon.name}
          onClick={() => setPokemonIndex(index)}
          className="button-pokemon"
        >
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
