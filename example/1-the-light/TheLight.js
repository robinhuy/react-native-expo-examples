import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Text, Image, Switch } from "react-native";
import { StatusBar } from "expo-status-bar";
import bulbOff from "../../assets/the-light-images/bulb-off.jpg";
import bulbOn from "../../assets/the-light-images/bulb-on.jpg";

export default function TheLight() {
  // https://reactjs.org/docs/hooks-reference.html#usestate
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    // https://reactnative.dev/docs/safeareaview
    <SafeAreaView style={styles.container}>
      {/* https://reactnative.dev/docs/statusbar */}
      <StatusBar style="light" />

      {/* https://reactnative.dev/docs/text */}
      <Text style={styles.title}>The Light</Text>

      {/* https://reactnative.dev/docs/image */}
      <Image
        fadeDuration={0}
        source={isEnabled ? bulbOn : bulbOff}
        style={styles.image}
      />

      {/* https://reactnative.dev/docs/switch */}
      <Switch
        trackColor={{ false: "#fff", true: "#52d964" }}
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{ alignSelf: "center" }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "black",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 40,
    marginBottom: 10,
  },
  image: {
    maxWidth: "100%",
    maxHeight: 500,
    resizeMode: "contain",
    marginBottom: 20,
  },
});
