const FullPokemonsAPI =
  "https://gamepress.gg/sites/default/files/aggregatedjson/pokemon-data-full-en-PoGO.json";
const FullMovesAPI =
  "https://gamepress.gg/sites/default/files/aggregatedjson/move-data-full-PoGO.json";

const PokemonTypeIcon = {
  bug: require("./assets/type-bug.png"),
  dark: require("./assets/type-dark.png"),
  dragon: require("./assets/type-dragon.png"),
  electric: require("./assets/type-electric.png"),
  fairy: require("./assets/type-fairy.png"),
  fighting: require("./assets/type-fighting.png"),
  fire: require("./assets/type-fire.png"),
  flying: require("./assets/type-flying.png"),
  ghost: require("./assets/type-ghost.png"),
  grass: require("./assets/type-grass.png"),
  ground: require("./assets/type-ground.png"),
  ice: require("./assets/type-ice.png"),
  normal: require("./assets/type-normal.png"),
  poison: require("./assets/type-poison.png"),
  psychic: require("./assets/type-psychic.png"),
  rock: require("./assets/type-rock.png"),
  steel: require("./assets/type-steel.png"),
  water: require("./assets/type-water.png"),
  default: require("./assets/type-ice.png"),
};

const BackgroundColor = "#559EDF";

export { FullPokemonsAPI, FullMovesAPI, PokemonTypeIcon, BackgroundColor };
