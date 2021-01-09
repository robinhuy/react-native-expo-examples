import React from "react";
import { View, Text } from "react-native";

export default function HelloWorld1() {
  return (
    // https://reactnative.dev/docs/view
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3498db",
      }}
    >
      {/* https://reactnative.dev/docs/text */}
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "#fff",
          textTransform: "uppercase",
        }}
      >
        Hello world!
      </Text>
    </View>
  );
}
