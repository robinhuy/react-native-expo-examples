import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  ViewStyle,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import Constants from "expo-constants";
import Stories from "./Stories";
import Article from "./Article";

import { articles } from "./data";

const INSTAGRAM_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png";

export default function Instagram() {
  const renderItem = ({ item }) => <Article item={item} />;
  const renderHeader = () => (
    <View style={styles.stories}>
      <Stories />
    </View>
  );
  const keyExtractor = (item) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="camera" size={24} />
        </TouchableOpacity>

        <Image source={{ uri: INSTAGRAM_LOGO }} style={styles.logo} />

        <TouchableOpacity>
          <Feather name="send" size={24} />
        </TouchableOpacity>
      </View>

      {/* https://reactnative.dev/docs/flatlist */}
      <FlatList
        data={articles}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const BORDER_BOTTOM: ViewStyle = {
  borderBottomWidth: 1,
  borderBottomColor: "#dbdbdb",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    ...BORDER_BOTTOM,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 44,
  },
  logo: {
    flex: 1,
    height: 30,
    resizeMode: "contain",
  },
  stories: {
    ...BORDER_BOTTOM,
    height: 104,
    padding: 10,
    backgroundColor: "#fafafa",
  },
});
