import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  CENTER,
  BOX,
  TEXT_LABEL,
  BG_COLOR,
  HIGHLIGHT_BG_COLOR,
} from "../style";

function GenderSelection({ label, iconName, iconColor, isActive, setActive }) {
  return (
    <TouchableOpacity
      style={[
        styles.box,
        {
          backgroundColor: isActive ? HIGHLIGHT_BG_COLOR : BG_COLOR,
        },
      ]}
      onPress={setActive}
    >
      <FontAwesome5 name={iconName} size={80} color={iconColor} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    ...CENTER,
    ...BOX,
    marginHorizontal: 10,
  },
  label: {
    ...TEXT_LABEL,
    marginTop: 10,
  },
});

// https://reactjs.org/docs/react-api.html#reactmemo
export default React.memo(GenderSelection);
