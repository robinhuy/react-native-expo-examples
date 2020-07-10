import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  ViewStyle,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import Story from "./Story";
import Article from "./Article";

import data from "./data";

const INSTAGRAM_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png";

export default function Instagram() {
  data.feeds.unshift({ id: 0 });

  return (
    <SafeAreaView style={{ flex: 1 }}>
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

      <FlatList
        data={data.feeds}
        renderItem={({ item, index }) => {
          if (index === 0) {
            return (
              <View style={styles.stories}>
                <Story stories={data.stories} />
              </View>
            );
          } else {
            return <Article item={item} />;
          }
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const BORDER_BOTTOM: ViewStyle = {
  borderBottomWidth: 1,
  borderBottomColor: "#dbdbdb",
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 44,
    ...BORDER_BOTTOM,
  },
  logo: {
    flex: 1,
    height: 30,
    resizeMode: "contain",
  },
  stories: {
    height: 104,
    padding: 10,
    backgroundColor: "#fafafa",
    ...BORDER_BOTTOM,
  },
});
