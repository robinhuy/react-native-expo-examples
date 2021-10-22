import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProgressBar from "react-native-progress/Bar";

export default function PokemonStatus({ title, value, progress }) {
  return (
    <View style={styles.pokemonStatus}>
      <Text style={styles.pokemonStatusName}>{title}</Text>
      <Text style={styles.pokemonStatusPoint}>{value}</Text>
      <View style={styles.pokemonStatusBar}>
        {/* https://github.com/oblador/react-native-progress */}
        <ProgressBar
          progress={progress}
          height={8}
          color="#559EDF"
          unfilledColor="#F0F0F0"
          borderWidth={0}
          animated={true}
          width={null}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pokemonStatus: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  pokemonStatusName: {
    color: "#1a87d9",
    fontWeight: "bold",
    flex: 1 / 7,
  },
  pokemonStatusPoint: {
    paddingHorizontal: 10,
    flex: 1 / 7,
  },
  pokemonStatusBar: {
    flex: 5 / 7,
  },
});
