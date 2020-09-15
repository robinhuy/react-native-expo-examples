import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Image, Icon } from "react-native-elements";
import ProgressBar from "react-native-progress/Bar";

import { PokemonTypeIcon } from "../constants";

export default function PokemonDetail({ navigation, route }) {
  const maxSTA = 400;
  const maxATK = 400;
  const maxDEF = 400;
  const maxCP = 4000;
console.log(route.params)
  const { pokemon = {} } = route.params;
  const pokemonTypes = pokemon.field_pokemon_type.split(", ");

  const PokemonTypeElement = pokemonTypes.map((type, index) => {
    return (
      <View style={styles.pokemonType} key={index}>
        <Image
          source={
            PokemonTypeIcon[type.toLowerCase()] || PokemonTypeIcon["default"]
          }
        />
        <Text>{type.toUpperCase()}</Text>
      </View>
    );
  });

  return (
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.backButton}>
          <Icon
            name="keyboard-arrow-left"
            size={40}
            color="#fff"
            underlayColor="transparent"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>

        <View style={styles.content}>
          <Image
            style={styles.avatar}
            placeholderStyle={{ backgroundColor: "transparent" }}
            PlaceholderContent={<ActivityIndicator />}
            source={{ uri: pokemon.uri }}
          />

          <Text style={styles.pokemonName}>{pokemon.title_1}</Text>

          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            {PokemonTypeElement}
          </View>

          <View>
            <Text style={styles.description}>
              {pokemon.title_1} is a pokemon {pokemon.field_pokemon_generation}.
              {"\n"}
              Capture Rate: {pokemon.catch_rate}, Flee Rate:{" "}
              {pokemon.field_flee_rate}
            </Text>
          </View>

          <View>
            <View style={styles.pokemonStatus}>
              <Text style={styles.pokemonStatusName}>STA</Text>
              <Text style={styles.pokemonStatusPoint}>{pokemon.sta}</Text>
              <View style={styles.pokemonStatusBar}>
                <ProgressBar
                  progress={+pokemon.sta / maxSTA}
                  height={8}
                  color="#559EDF"
                  unfilledColor="#F0F0F0"
                  borderWidth={0}
                  animated={true}
                  width={null}
                />
              </View>
            </View>
            <View style={styles.pokemonStatus}>
              <Text style={styles.pokemonStatusName}>ATK</Text>
              <Text style={styles.pokemonStatusPoint}>{pokemon.atk}</Text>
              <View style={styles.pokemonStatusBar}>
                <ProgressBar
                  progress={+pokemon.atk / maxATK}
                  height={8}
                  color="#559EDF"
                  unfilledColor="#F0F0F0"
                  borderWidth={0}
                  animated={true}
                  width={null}
                />
              </View>
            </View>
            <View style={styles.pokemonStatus}>
              <Text style={styles.pokemonStatusName}>DEF</Text>
              <Text style={styles.pokemonStatusPoint}>{pokemon.def}</Text>
              <View style={styles.pokemonStatusBar}>
                <ProgressBar
                  progress={+pokemon.def / maxDEF}
                  height={8}
                  color="#559EDF"
                  unfilledColor="#F0F0F0"
                  borderWidth={0}
                  animated={true}
                  width={null}
                />
              </View>
            </View>
            <View style={styles.pokemonStatus}>
              <Text style={styles.pokemonStatusName}>CP</Text>
              <Text style={styles.pokemonStatusPoint}>{pokemon.cp}</Text>
              <View style={styles.pokemonStatusBar}>
                <ProgressBar
                  progress={+pokemon.cp / maxCP}
                  height={8}
                  color="#559EDF"
                  unfilledColor="#F0F0F0"
                  borderWidth={0}
                  animated={true}
                  width={null}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backButton: {
    alignItems: "flex-start",
    paddingTop: 40,
    marginBottom: -40,
  },
  body: {
    position: "relative",
    backgroundColor: "#559EDF",
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: 150,
    position: "relative",
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
  },
  avatar: {
    position: "absolute",
    width: 200,
    height: 200,
    alignSelf: "center",
    top: -130,
    zIndex: 9999
  },
  pokemonName: {
    marginTop: 90,
    alignSelf: "center",
    fontSize: 30,
    fontFamily: "Avenir",
    color: "#4f4f4f",
  },
  description: {
    color: "#4F4F4F",
    textAlign: "center",
    lineHeight: 22,
    marginTop: 15,
    marginBottom: 35,
  },
  pokemonType: {
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  pokemonStatus: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  pokemonStatusName: {
    color: "#1a87d9",
    fontWeight: "bold",
    flex: 1,
  },
  pokemonStatusPoint: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
  },
  pokemonStatusBar: {
    flex: 5,
  },
});
