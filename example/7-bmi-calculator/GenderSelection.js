import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { CENTER, BOX, ROW, TEXT_LABEL } from "./style";

export default function GenderSelection({ style, gender, setGender }) {
  return (
    <View style={style}>
      <View style={styles.genderSelection}>
        <TouchableOpacity
          style={[
            styles.genderBox,
            { backgroundColor: gender === "male" ? "#24263b" : "#323344" },
          ]}
          onPress={() => setGender("male")}
        >
          <FontAwesome5 name="mars" size={80} color="#51caef" />
          <Text style={styles.genderSelectionText}>MALE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.genderBox,
            { backgroundColor: gender === "female" ? "#24263b" : "#323344" },
          ]}
          onPress={() => setGender("female")}
        >
          <FontAwesome5 name="venus" size={80} color="#f15123" />
          <Text style={styles.genderSelectionText}>FEMALE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  genderSelection: {
    ...ROW,
  },
  genderBox: {
    ...CENTER,
    ...BOX,
    margin: 15,
    marginTop: 0,
  },
  genderSelectionText: {
    ...TEXT_LABEL,
    marginTop: 10,
  },
});
