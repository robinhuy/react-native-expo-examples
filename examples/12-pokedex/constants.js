const FullPokemonsAPI =
  "https://gamepress.gg/sites/default/files/aggregatedjson/pokemon-data-full-en-PoGO.json";
const FullMovesAPI =
  "https://gamepress.gg/sites/default/files/aggregatedjson/move-data-full-PoGO.json";

const PokemonTypeIcon = {
  bug: require("../../assets/pokedex/type-bug.png"),
  dark: require("../../assets/pokedex/type-dark.png"),
  dragon: require("../../assets/pokedex/type-dragon.png"),
  electric: require("../../assets/pokedex/type-electric.png"),
  fairy: require("../../assets/pokedex/type-fairy.png"),
  fighting: require("../../assets/pokedex/type-fighting.png"),
  fire: require("../../assets/pokedex/type-fire.png"),
  flying: require("../../assets/pokedex/type-flying.png"),
  ghost: require("../../assets/pokedex/type-ghost.png"),
  grass: require("../../assets/pokedex/type-grass.png"),
  ground: require("../../assets/pokedex/type-ground.png"),
  ice: require("../../assets/pokedex/type-ice.png"),
  normal: require("../../assets/pokedex/type-normal.png"),
  poison: require("../../assets/pokedex/type-poison.png"),
  psychic: require("../../assets/pokedex/type-psychic.png"),
  rock: require("../../assets/pokedex/type-rock.png"),
  steel: require("../../assets/pokedex/type-steel.png"),
  water: require("../../assets/pokedex/type-water.png"),
  default: require("../../assets/pokedex/type-ice.png"),
};

const BackgroundColor = "#559EDF";

export { FullPokemonsAPI, FullMovesAPI, PokemonTypeIcon, BackgroundColor };
