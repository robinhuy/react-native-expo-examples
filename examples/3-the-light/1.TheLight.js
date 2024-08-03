import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Switch,
} from "react-native";
import bulbOff from "./assets/bulb-off.jpg";
import bulbOn from "./assets/bulb-on.jpg";

export default function TheLight() {
  // https://reactjs.org/docs/hooks-reference.html#usestate
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <Image
        fadeDuration={0}
        source={isEnabled ? bulbOn : bulbOff}
        style={styles.image}
      />

      {/* https://reactnative.dev/docs/switch */}
      <Switch
        trackColor={{ false: "#fff", true: "#52d964" }}
        thumbColor={"#fff"}
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch}
      />
    </SafeAreaView>
  );
}

// https://reactnative.dev/docs/dimensions
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Constants.statusBarHeight,
  },
  image: {
    maxWidth: "100%",
    maxHeight: screenHeight - Constants.statusBarHeight - 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  switch: {
    alignSelf: "center",
    // https://reactnative.dev/docs/transforms
    // https://reactnative.dev/docs/platform-specific-code
    transform: Platform.OS === "android" ? [{ scale: 1.5 }] : [],
  },
});
