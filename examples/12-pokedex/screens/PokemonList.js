import React, { useEffect, useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Avatar, ListItem, SearchBar } from "react-native-elements";

import MainHeader from "../components/MainHeader";
import PokemonType from "../components/PokemonType";
import pokeballIcon from "../../../assets/pokedex/pokeball.png";
import { FullPokemonsAPI } from "../constants";

import { debounce } from "lodash";

export default function PokemonList({ navigation }) {
  const [displayPokemons, setDisplayPokemons] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");

  const renderItem = ({ item, index }) => {
    const pokemonTypes = item.field_pokemon_type.split(", ");
    const PokemonTypeElement = pokemonTypes.map((type, index) => {
      return (
        <View key={index}>
          <PokemonType type={type} />
        </View>
      );
    });

    return (
      <ListItem
        bottomDivider={true}
        onPress={() => {
          navigation.navigate("PokemonDetail", {
            pokemon: displayPokemons[index],
          });
        }}
      >
        <Avatar
          source={item.uri ? { uri: item.uri } : pokeballIcon}
          size="medium"
        />

        <ListItem.Content>
          <ListItem.Title>{item.title_1}</ListItem.Title>

          <ListItem.Subtitle style={styles.listItemSubtitle}>
            #
            {item.number.length <= 3
              ? ("00" + item.number).slice(-3)
              : item.number}
          </ListItem.Subtitle>
        </ListItem.Content>

        <View style={{ flexDirection: "row" }}>{PokemonTypeElement}</View>
      </ListItem>
    );
  };

  const searchPokemon = useCallback(
    debounce((keyword) => {
      if (keyword == "") {
        setDisplayPokemons(pokemons);
      } else {
        const filteredPokemons = pokemons.filter((pokemon) => {
          return pokemon.title_1.toLowerCase().includes(keyword.toLowerCase());
        });
        setDisplayPokemons(filteredPokemons);
      }
    }, 1000),
    [pokemons]
  );

  const inputSearchPokemon = (keyword) => {
    setKeyword(keyword);
    searchPokemon(keyword);
  };

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        const responseJson = await response.json();

        setPokemons(responseJson);
        setDisplayPokemons(responseJson);
        setKeyword("");
        setLoading(false);
      } catch (error) {
        Alert.alert("Cannot connect to Server!");
      }
    };

    fetchData(FullPokemonsAPI);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MainHeader title="Pokemons" isMain={true} navigation={navigation} />

      <SearchBar
        placeholder="Find Pokemon by name ..."
        inputContainerStyle={{ backgroundColor: "#e9e9e9" }}
        containerStyle={{ backgroundColor: "transparent" }}
        lightTheme={true}
        round={true}
        value={keyword}
        onChangeText={inputSearchPokemon}
      />

      {!isLoading ? (
        <FlatList
          data={displayPokemons}
          renderItem={renderItem}
          keyExtractor={(item) => item.nid}
          initialNumToRender={10}
        />
      ) : (
        <ActivityIndicator animating size="large" style={{ marginTop: 20 }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  listItemSubtitle: { marginTop: 10, color: "#939393" },
});
