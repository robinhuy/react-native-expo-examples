import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

const INSTAGRAM_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png";

export default function Header() {
  return (
    <>
      <TouchableOpacity>
        <Feather name="camera" size={24} />
      </TouchableOpacity>

      <Image source={{ uri: INSTAGRAM_LOGO }} style={styles.logo} />

      <TouchableOpacity>
        <Feather name="send" size={24} />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    height: 30,
    resizeMode: "contain",
  },
});
