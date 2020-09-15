import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Avatar, ListItem, SearchBar } from "react-native-elements";

import MainHeader from "../components/MainHeader";

import { FullPokemonsAPI } from "../constants";
import { PokemonTypeIcon } from "../constants";

export default function PokemonList({ navigation }) {
  const [pokemons, setPokemons] = useState([]);
  const [listPokemons, setListPokemons] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isLoadMore, setLoadMore] = useState(false);
  const [nextApi, setNextApi] = useState("");
  const [search, setSearch] = useState("");

  _fetchData = async (url) => {
    try {
      setLoadMore(true);

      let response = await fetch(url);
      let responseJson = await response.json();

      setLoading(false);
      setLoadMore(false);
      setPokemons((data) => data.concat(responseJson));
      setListPokemons(responseJson);
      setNextApi(responseJson.next);
      setSearch("");
    } catch (error) {
      Alert.alert("Cannot connect to Server!");
    }
  };

  _renderItem = ({ item, index }) => {
    const pokemonTypes = item.field_pokemon_type.split(", ");
    const PokemonTypeElement = pokemonTypes.map((type, index) => {
      return (
        <Image
          key={index}
          source={
            PokemonTypeIcon[type.toLowerCase()] || PokemonTypeIcon["default"]
          }
          placeholderStyle={{ backgroundColor: "transparent" }}
          PlaceholderContent={<ActivityIndicator />}
        />
      );
    });

    return (
      <ListItem
        containerStyle={styles.listItem}
        onPress={() => {
          navigation.navigate("PokemonDetail", {
            pokemon: pokemons[index],
          });
        }}
      >
        <Avatar source={{ uri: item.uri }} size="medium" />

        <ListItem.Content>
          <ListItem.Title>{item.title_1}</ListItem.Title>

          <ListItem.Subtitle style={{ marginTop: 10, color: "#939393" }}>
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

  _updateSearch = (search) => {
    if (search == "") {
      setSearch(search);
      setPokemons(listPokemons);
    } else {
      let found = listPokemons.filter((x) => {
        return x.title_1.toLowerCase().includes(search.toLowerCase());
      });
      setSearch(search);
      setPokemons(found);
    }
  };

  _loadMoreItem = () => {
    if (nextApi) {
      _fetchData(nextApi);
    }
  };

  _renderFooter = () => {
    if (!isLoadMore) return null;

    return <ActivityIndicator animating size="large" />;
  };

  useEffect(() => {
    _fetchData(FullPokemonsAPI);
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
        onChangeText={_updateSearch}
        value={search}
      />

      {!isLoading ? (
        <FlatList
          data={pokemons}
          renderItem={_renderItem}
          keyExtractor={(item) => item.nid}
          onEndReached={_loadMoreItem}
          onEndReachedThreshold={0.5}
          initialNumToRender={10}
          ListFooterComponent={_renderFooter}
        />
      ) : (
        <ActivityIndicator animating size="large" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
