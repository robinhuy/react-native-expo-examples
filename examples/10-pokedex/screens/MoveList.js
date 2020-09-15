import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  Alert,
} from "react-native";
import { ListItem } from "react-native-elements";

import MainHeader from "../components/MainHeader";

import { FullMovesAPI } from "../constants";
import { PokemonTypeIcon } from "../constants";

export default function MoveList({ navigation }) {
  const [moves, setMoves] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isLoadMore, setLoadMore] = useState(false);
  const [nextApi, setNextApi] = useState("");

  _fetchData = async (url) => {
    try {
      setState({ isLoadMore: true });

      let response = await fetch(url);
      let responseJson = await response.json();

      setState({
        isLoading: false,
        isLoadMore: false,
        moves: state.moves.concat(responseJson),
        nextApi: responseJson.next,
      });
    } catch (error) {
      Alert.alert("Cannot connect to Server!");
    }
  };

  _renderItem = ({ item, index }) => {
    return (
      <ListItem
        containerStyle={styles.listItem}
        onPress={() => {
          navigation.navigate("MoveDetail", {
            move: state.moves[index],
          });
        }}
      >
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>

        <View style={{ flexDirection: "row" }}>
          <Image source={PokemonTypeIcon[item.move_type.toLowerCase()]} />
        </View>
      </ListItem>
    );
  };

  _loadMoreItem = () => {
    if (state.nextApi) {
      _fetchData(state.nextApi);
    }
  };

  _renderFooter = () => {
    if (!state.isLoadMore) return null;

    return <ActivityIndicator animating size="large" />;
  };

  useEffect(() => {
    _fetchData(FullMovesAPI);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MainHeader title="Moves" isMain={true} navigation={navigation} />

      {!isLoading ? (
        <FlatList
          data={moves}
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
