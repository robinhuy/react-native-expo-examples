import React from "react";
import { StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";

export default function ScannerView({ scanned }) {
  return (
    // https://github.com/oblador/react-native-animatable
    <Animatable.View
      style={styles.scannerView}
      animation={scanned ? "fadeOut" : "pulse"}
      iterationCount={scanned ? 1 : "infinite"}
    >
      <View style={styles.borderTopLeft} />
      <View style={styles.borderTopRight} />
      <View style={styles.borderBottomLeft} />
      <View style={styles.borderBottomRight} />
    </Animatable.View>
  );
}

const BORDER = {
  position: "absolute",
  borderColor: "#fff",
  width: 55,
  height: 55,
};
const BORDER_WIDTH = 10;
const BORDER_RADIUS = 35;

const styles = StyleSheet.create({
  scannerView: {
    width: 220,
    height: 220,
  },
  borderTopLeft: {
    ...BORDER,
    top: 0,
    left: 0,
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopWidth: BORDER_WIDTH,
    borderLeftWidth: BORDER_WIDTH,
  },
  borderTopRight: {
    ...BORDER,
    top: 0,
    right: 0,
    borderTopRightRadius: BORDER_RADIUS,
    borderTopWidth: BORDER_WIDTH,
    borderRightWidth: BORDER_WIDTH,
  },
  borderBottomLeft: {
    ...BORDER,
    bottom: 0,
    left: 0,
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomWidth: BORDER_WIDTH,
    borderLeftWidth: BORDER_WIDTH,
  },
  borderBottomRight: {
    ...BORDER,
    bottom: 0,
    right: 0,
    borderBottomRightRadius: BORDER_RADIUS,
    borderBottomWidth: BORDER_WIDTH,
    borderRightWidth: BORDER_WIDTH,
  },
});
