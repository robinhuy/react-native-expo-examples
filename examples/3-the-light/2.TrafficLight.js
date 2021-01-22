import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import trafficLight from "../../assets/the-light/traffic-light.png";
import trafficLightGreen from "../../assets/the-light/traffic-light-green.png";
import trafficLightYellow from "../../assets/the-light/traffic-light-yellow.png";
import trafficLightRed from "../../assets/the-light/traffic-light-red.png";

export default function TrafficLight() {
  const [color, setColor] = useState("");

  let imageSource = trafficLight;
  if (color === "red") {
    imageSource = trafficLightRed;
  } else if (color === "yellow") {
    imageSource = trafficLightYellow;
  } else if (color === "green") {
    imageSource = trafficLightGreen;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <Image fadeDuration={0} source={imageSource} style={styles.image} />

      <View style={styles.buttonGroup}>
        {/* https://reactnative.dev/docs/touchablehighlight */}
        <TouchableHighlight
          style={[styles.button, { backgroundColor: "#ce0100" }]}
          underlayColor="#9b0100"
          onPress={() => setColor("red")}
        >
          <Text style={styles.buttonText}>Red</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.button, { backgroundColor: "#ff8300" }]}
          underlayColor="#cc6900"
          onPress={() => setColor("yellow")}
        >
          <Text style={styles.buttonText}>Yellow</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.button, { backgroundColor: "#54a111" }]}
          underlayColor="#3c730c"
          onPress={() => setColor("green")}
        >
          <Text style={styles.buttonText}>Green</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

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
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    width: 80,
    paddingVertical: 8,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
  },
});
