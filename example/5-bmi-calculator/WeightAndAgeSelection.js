import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { BOX, ROW, CENTER, TEXT_LABEL, TEXT_VALUE } from "./style";

const MIN_WEIGHT = 10;
const MAX_WEIGHT = 150;
const MIN_AGE = 1;
const MAX_AGE = 150;

export default function WeightAndAgeSelection({
  style,
  weight,
  setWeight,
  age,
  setAge,
}) {
  const [timer, setTimer] = useState(null);

  function decreaseWeight() {
    setWeight((value) => {
      if (value > MIN_WEIGHT) {
        return value - 1;
      } else {
        return MIN_WEIGHT;
      }
    });
  }

  function increaseWeight() {
    setWeight((value) => {
      if (value < MAX_WEIGHT) {
        return value + 1;
      } else {
        return MAX_WEIGHT;
      }
    });
  }

  function decreaseAge() {
    setAge((value) => {
      if (value > MIN_AGE) {
        return value - 1;
      } else {
        return MIN_AGE;
      }
    });
  }

  function increaseAge() {
    setAge((value) => {
      if (value < MAX_AGE) {
        return value + 1;
      } else {
        return MAX_AGE;
      }
    });
  }

  function fastChangeValue(type, isIncrease) {
    const timer = setInterval(() => {
      if (isIncrease) {
        if (type === "age") {
          increaseAge();
        } else {
          increaseWeight();
        }
      } else {
        if (type === "age") {
          decreaseAge();
        } else {
          decreaseWeight();
        }
      }
    }, 50);

    setTimer(timer);
  }

  function clearTimer() {
    clearInterval(timer);
    setTimer(null);
  }

  return (
    <View style={style}>
      <View style={styles.weightAndAgeSelection}>
        <View style={styles.weightAndAgeBox}>
          <Text style={styles.label}>WEIGHT</Text>

          <Text style={styles.value}>{weight}</Text>

          <View style={styles.weightAndAgeButtonGroup}>
            <TouchableOpacity
              style={styles.weightAndAgeButton}
              onPress={decreaseWeight}
              onLongPress={() => fastChangeValue("weight", false)}
              onPressOut={clearTimer}
            >
              <FontAwesome5 name="minus" size={20} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.weightAndAgeButton}
              onPress={increaseWeight}
              onLongPress={() => fastChangeValue("weight", true)}
              onPressOut={clearTimer}
            >
              <FontAwesome5 name="plus" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.weightAndAgeBox}>
          <Text style={styles.label}>AGE</Text>

          <Text style={styles.value}>{age}</Text>

          <View style={styles.weightAndAgeButtonGroup}>
            <TouchableOpacity
              style={styles.weightAndAgeButton}
              onPress={decreaseAge}
              onLongPress={() => fastChangeValue("age", false)}
              onPressOut={clearTimer}
            >
              <FontAwesome5 name="minus" size={20} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.weightAndAgeButton}
              onPress={increaseAge}
              onLongPress={() => fastChangeValue("age", true)}
              onPressOut={clearTimer}
            >
              <FontAwesome5 name="plus" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  weightAndAgeSelection: {
    ...ROW,
  },
  weightAndAgeBox: {
    ...CENTER,
    ...BOX,
    margin: 15,
  },
  label: {
    ...TEXT_LABEL,
  },
  value: {
    ...TEXT_VALUE,
  },
  weightAndAgeButtonGroup: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  weightAndAgeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#5e606e",
    ...CENTER,
  },
});
