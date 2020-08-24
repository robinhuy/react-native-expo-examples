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

const BMI_ADULT_TABLE = [];

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

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>BMI CALCULATOR</Text>
        </View>

        <GenderSelection
          style={styles.gender}
          gender={gender}
          setGender={setGender}
        />

        <HeightSelection
          style={styles.height}
          height={height}
          setHeight={setHeight}
        />

        <WeightAndAgeSelection
          style={styles.weightAndAge}
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
  },
  header: {
    ...CENTER,
    height: 70,
    marginBottom: 15,
    borderBottomWidth: 5,
    borderBottomColor: "#16192e",
  },
  headerText: {
    ...TEXT,
    fontSize: 24,
    fontWeight: "500",
  },
  gender: {
    flex: 1,
  },
  height: {
    flex: 1,
  },
  weightAndAge: {
    flex: 1,
  },
  calculateButton: {
    ...BUTTON,
    marginTop: 10,
    marginBottom: Platform.OS === 'ios' ? 0 : 15,
  },
  calculateButtonText: {
    ...BUTTON_TEXT,
  },
});
