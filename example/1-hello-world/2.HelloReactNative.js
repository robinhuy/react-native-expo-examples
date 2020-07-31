import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import Constants from "expo-constants";

export default function HelloReactNative() {
  return (
    // https://reactnative.dev/docs/safeareaview
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>
        Hello <Text style={styles.highlightText1}>World</Text>
      </Text>

      <Text style={[styles.heading, { color: "#616166" }]}>
        Hello <Text style={styles.highlightText2}>World</Text>
      </Text>
    </SafeAreaView>
  );
}

// https://reactnative.dev/docs/stylesheet
const styles = StyleSheet.create({
  container: {
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
    color: "red",
  },
  highlightText2: {
    color: "#fff",
    backgroundColor: "#616166",
  },
});
