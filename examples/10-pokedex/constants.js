const API = "https://pokeapi.co/api/v2/";
const itemsPerPage = 30;

const ApiGetPokemons = API + "pokemon?offset=0&limit=" + itemsPerPage;
const ApiGetMoves = API + "move?offset=0&limit=" + itemsPerPage;
const ApiGetPokemonByName = API + "pokemon/";

const FullPokemonsAPI =
  "https://gamepress.gg/sites/default/files/aggregatedjson/pokemon-data-full-en-PoGO.json";
const FullMovesAPI =
  "https://gamepress.gg/sites/default/files/aggregatedjson/move-data-full-PoGO.json";

const PokemonTypeIcon = {
  bug: require("./images/type-bug.png"),
  dark: require("./images/type-dark.png"),
  dragon: require("./images/type-dragon.png"),
  electric: require("./images/type-electric.png"),
  fairy: require("./images/type-fairy.png"),
  fighting: require("./images/type-fighting.png"),
  fire: require("./images/type-fire.png"),
  flying: require("./images/type-flying.png"),
  ghost: require("./images/type-ghost.png"),
  grass: require("./images/type-grass.png"),
  ground: require("./images/type-ground.png"),
  ice: require("./images/type-ice.png"),
  normal: require("./images/type-normal.png"),
  poison: require("./images/type-poison.png"),
  psychic: require("./images/type-psychic.png"),
  rock: require("./images/type-rock.png"),
  steel: require("./images/type-steel.png"),
  water: require("./images/type-water.png"),
  default: require("./images/type-ice.png"),
};

export {
  ApiGetPokemons,
  ApiGetMoves,
  ApiGetPokemonByName,
  FullPokemonsAPI,
  FullMovesAPI,
  PokemonTypeIcon,
};
