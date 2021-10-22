import React, { useEffect, useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  Alert,
} from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import { uniqBy } from "lodash";

import MainHeader from "../components/MainHeader";
import { FullMovesAPI } from "../constants";
import { PokemonTypeIcon } from "../constants";

import { debounce } from "lodash";

export default function MoveList({ navigation }) {
  const [displayMoves, setDisplayMoves] = useState([]);
  const [moves, setMoves] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");

  const renderItem = ({ item, index }) => {
    return (
      <ListItem
        containerStyle={styles.listItem}
        onPress={() => {
          navigation.navigate("MoveDetail", {
            move: moves[index],
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

  const searchMove = useCallback(
    debounce((keyword) => {
      if (keyword == "") {
        setDisplayMoves(moves);
      } else {
        const filteredMoves = moves.filter((move) => {
          return move.title.toLowerCase().includes(keyword.toLowerCase());
        });
        setDisplayMoves(filteredMoves);
      }
    }, 1000),
    [moves]
  );

  const inputSearchMove = (keyword) => {
    setKeyword(keyword);
    searchMove(keyword);
  };

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        const responseJson = await response.json();
        const removeDuplicated = uniqBy(responseJson, "nid");

        setMoves(removeDuplicated);
        setDisplayMoves(removeDuplicated);
        setKeyword("");
        setLoading(false);
      } catch (error) {
        Alert.alert("Cannot connect to Server!");
      }
    };

    fetchData(FullMovesAPI);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MainHeader title="Moves" isMain={true} navigation={navigation} />

      <SearchBar
        placeholder="Find Move by name ..."
        inputContainerStyle={{ backgroundColor: "#e9e9e9" }}
        containerStyle={{ backgroundColor: "transparent" }}
        lightTheme={true}
        round={true}
        value={keyword}
        onChangeText={inputSearchMove}
      />

      {!isLoading ? (
        <FlatList
          data={displayMoves}
          renderItem={renderItem}
          keyExtractor={(item) => item.nid}
          initialNumToRender={10}
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
