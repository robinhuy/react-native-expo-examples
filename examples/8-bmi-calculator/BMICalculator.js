import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { CENTER, TEXT, BUTTON, BUTTON_TEXT } from "./style";
import GenderSelection from "./GenderSelection";
import HeightSelection from "./HeightSelection";
import WeightAndAgeSelection from "./WeightAndAgeSelection";
import ResultModal from "./ResultModal";

export default function BMICalculator() {
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState(150);
  const [weight, setWeight] = useState(50);
  const [age, setAge] = useState(20);
  const [bmiPoint, setBmiPoint] = useState(0);
  const [bmiStatus, setBmiStatus] = useState("NORMAL");
  const [bmiInterpretation, setBmiInterpretation] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function calculate() {
    const point = weight / (height / 100) ** 2;

    if (point < 18.5) {
      setBmiStatus("UNDERWEIGHT");
      setBmiInterpretation(
        "You have a higher than normal body weight.\nTry to exercise more."
      );
    } else if (point < 25) {
      setBmiStatus("NORMAL");
      setBmiInterpretation("You have a normal body weight.\nGood job!");
    } else {
      setBmiStatus("OVERWEIGHT");
      setBmiInterpretation(
        "You have a higher than normal body weight.\nTry to exercise more."
      );
    }

    setBmiPoint(point.toFixed(2));
    setModalVisible(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.headerText}>BMI CALCULATOR</Text>
      </View>

      <View style={styles.content}>
        <GenderSelection
          style={styles.section}
          gender={gender}
          setGender={setGender}
        />

        <HeightSelection
          style={styles.section}
          height={height}
          setHeight={setHeight}
        />

        <WeightAndAgeSelection
          style={styles.section}
          weight={weight}
          setWeight={setWeight}
          age={age}
          setAge={setAge}
        />

        <TouchableOpacity style={styles.calculateButton} onPress={calculate}>
          <Text style={styles.calculateButtonText}>CALCULATE</Text>
        </TouchableOpacity>

        <ResultModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          bmiPoint={bmiPoint}
          bmiStatus={bmiStatus}
          bmiInterpretation={bmiInterpretation}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d2236",
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  header: {
    ...CENTER,
    height: 70,
    borderBottomWidth: 5,
    borderBottomColor: "#16192e",
  },
  headerText: {
    ...TEXT,
    fontSize: 24,
    fontWeight: "500",
  },
  section: {
    flex: 1 / 3,
    marginVertical: 5,
  },
  calculateButton: {
    ...BUTTON,
    marginTop: 15,
    marginBottom: Platform.OS === "ios" ? 0 : 10,
  },
  calculateButtonText: {
    ...BUTTON_TEXT,
  },
});
