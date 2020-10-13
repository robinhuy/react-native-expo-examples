import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  CENTER,
  BOX,
  ROW,
  TEXT_LABEL,
  BG_COLOR,
  HIGHLIGHT_BG_COLOR,
  MALE_COLOR,
  FEMALE_COLOR,
} from "./style";

function GenderSelection({ style, gender, setGender }) {
  return (
    <View style={style}>
      <View style={styles.genderSelection}>
        <TouchableOpacity
          style={[
            styles.genderBox,
            {
              backgroundColor:
                gender === "male" ? HIGHLIGHT_BG_COLOR : BG_COLOR,
            },
          ]}
          onPress={() => setGender("male")}
        >
          <FontAwesome5 name="mars" size={80} color={MALE_COLOR} />
          <Text style={styles.genderSelectionText}>MALE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.genderBox,
            {
              backgroundColor:
                gender === "female" ? HIGHLIGHT_BG_COLOR : BG_COLOR,
            },
          ]}
          onPress={() => setGender("female")}
        >
          <FontAwesome5 name="venus" size={80} color={FEMALE_COLOR} />
          <Text style={styles.genderSelectionText}>FEMALE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  genderSelection: {
    ...ROW,
    marginHorizontal: -10,
  },
  genderBox: {
    ...CENTER,
    ...BOX,
    marginHorizontal: 10,
  },
  genderSelectionText: {
    ...TEXT_LABEL,
    marginTop: 10,
  },
});

export default React.memo(GenderSelection);
