import React from "react";
import { ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
import { PokemonTypeIcon } from "../constants";

export default function PokemonType({ type }) {
  return (
    <Image
      source={PokemonTypeIcon[type.toLowerCase()] || PokemonTypeIcon["default"]}
      style={{ width: 50, height: 50 }}
      placeholderStyle={{ backgroundColor: "transparent" }}
      PlaceholderContent={<ActivityIndicator />}
    />
  );
}
