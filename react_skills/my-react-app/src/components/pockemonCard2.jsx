import PropTypes from "prop-types";

function PokemonCard2({ pokemon }) {
  return (
    <figure className="card5">
      {pokemon.imgSrc != null ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} className="card5-img" />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

PokemonCard2.propTypes = {
  pokemon2: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard2;

//Maintenant, si nous voulions rendre obligatoire nos deux props attendues ainsi que leurs types, on procèderait comme ci-dessus
//Nous avons vu comment utiliser les propTypesde manière basique, avec les types string et number et l'option isRequired. Il existe des types définis pour tous les types de props "primitifs" : string, number, bool... Tu découvriras vite d'autres types plus complexes comme shape pour les objets 