import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import Constants from "expo-constants";

export default function HelloWorld2() {
  return (
    // https://reactnative.dev/docs/safeareaview
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>
        Hello <Text style={styles.highlightText1}>World</Text>
      </Text>

      <Text style={styles.heading}>
        Hello <Text style={styles.highlightText2}>World</Text>
      </Text>

      <Text style={[styles.heading, { color: "#59595d" }]}>
        Hello <Text style={styles.highlightText3}>World</Text>
      </Text>
    </SafeAreaView>
  );
}

// https://reactnative.dev/docs/stylesheet
const styles = StyleSheet.create({
  container: {
    // SafeAreaView on Android devices
    paddingTop: Constants.statusBarHeight,
  },
  heading: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  highlightText1: {
    color: "#e74c3c",
  },
  highlightText2: {
    fontStyle: "italic",
    textDecorationLine: "underline",
    color: "#2980b9",
  },
  highlightText3: {
    color: "#fff",
    backgroundColor: "#59595d",
  },
});
