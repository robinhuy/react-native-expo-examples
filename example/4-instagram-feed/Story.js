import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Story({ avatar, name, isCreateStory = false, isSeen }) {
  return (
    <TouchableOpacity style={styles.user}>
      <View>
        <View
          style={[
            styles.avatarBorder,
            {
              borderColor: isCreateStory
                ? "transparent"
                : isSeen
                ? "rgba(0,0,0,.0975)"
                : "#c73191",
            },
          ]}
        >
          <Image source={avatar} style={styles.avatar} />

          {isCreateStory && (
            <View style={styles.plusIcon}>
              <Feather name="plus" size={14} color="#fff" />
            </View>
          )}
        </View>

        <Text numberOfLines={1} style={styles.name}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
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
