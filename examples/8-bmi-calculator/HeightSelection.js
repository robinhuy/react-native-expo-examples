import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { BOX, TEXT_VALUE, TEXT_LABEL } from "./style";

const MIN_HEIGHT = 50;
const MAX_HEIGHT = 250;

export default function HeightSelection({ style, height, setHeight }) {
  return (
    <View style={style}>
      <View style={styles.heightSelection}>
        <Text style={styles.label}>HEIGHT</Text>

        <Text style={styles.value}>
          {height}
          <Text style={styles.unit}> cm</Text>
        </Text>

        {/* https://github.com/react-native-community/react-native-slider */}
        <Slider
          style={{ width: "100%", height: 40 }}
          minimumValue={MIN_HEIGHT}
          maximumValue={MAX_HEIGHT}
          minimumTrackTintColor="#9a5871"
          maximumTrackTintColor="#000000"
          onValueChange={(value) => setHeight(Math.round(value))}
          value={height}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heightSelection: {
    ...BOX,
    margin: 15,
  },
  label: {
    ...TEXT_LABEL,
  },
  value: {
    ...TEXT_VALUE,
  },
  unit: {
    fontSize: 16,
  },
});
