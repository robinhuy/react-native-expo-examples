import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Story({ stories }) {
  return (
    <FlatList
      data={stories}
      renderItem={({ item, index }) => (
        <TouchableOpacity style={styles.user}>
          <View>
            <View
              style={[
                styles.avatarBorder,
                {
                  borderColor:
                    index === 0
                      ? "transparent"
                      : item.isSeen
                      ? "rgba(0,0,0,.0975)"
                      : "#c73191",
                },
              ]}
            >
              <Image source={item.avatar} style={styles.avatar} />

              {index === 0 && (
                <View style={styles.plusIcon}>
                  <Feather name="plus" size={14} color="#fff" />
                </View>
              )}
            </View>

            <Text numberOfLines={1} style={styles.name}>
              {index === 0 ? "Tin của bạn" : item.name}
            </Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true}
    />
  );
}

const styles = StyleSheet.create({
  user: {
    width: 80,
    paddingHorizontal: 4,
  },
  avatarBorder: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 1,
    margin: 4,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  plusIcon: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 18,
    height: 18,
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3e95f6",
  },
  name: {
    textAlign: "center",
    fontSize: 10,
    lineHeight: 14,
    color: "#262626",
    maxWidth: 64,
  },
});
