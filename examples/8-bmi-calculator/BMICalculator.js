import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import GenderSelection from "./components/GenderSelection";
import HeightSelection from "./components/HeightSelection";
import UnitSelection from "./components/UnitSelection";
import Button from "./components/Button";
import ResultModal from "./components/ResultModal";
import { ROW, CENTER, TEXT } from "./style";
import {
  DEFAULT_VALUE,
  MAX_AGE,
  MAX_WEIGHT,
  MIN_AGE,
  MIN_WEIGHT,
} from "./const";

export default function BMICalculator() {
  const [gender, setGender] = useState(DEFAULT_VALUE.gender);
  const [height, setHeight] = useState(DEFAULT_VALUE.height);
  const [weight, setWeight] = useState(DEFAULT_VALUE.weight);
  const [age, setAge] = useState(DEFAULT_VALUE.age);
  const [bmiPoint, setBmiPoint] = useState(0);
  const [bmiStatus, setBmiStatus] = useState("NORMAL");
  const [bmiInterpretation, setBmiInterpretation] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const calculate = () => {
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
  };

  const reset = () => {
    setGender(DEFAULT_VALUE.gender);
    setHeight(DEFAULT_VALUE.height);
    setWeight(DEFAULT_VALUE.weight);
    setAge(DEFAULT_VALUE.age);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.headerText}>BMI CALCULATOR</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <View style={styles.genderSelection}>
            <GenderSelection
              label="MALE"
              iconName="mars"
              iconColor="#51caef"
              isActive={gender === "male"}
              setActive={() => setGender("male")}
            />
            <GenderSelection
              label="FEMALE"
              iconName="venus"
              iconColor="#f15123"
              isActive={gender === "female"}
              setActive={() => setGender("female")}
            />
          </View>
        </View>

        <HeightSelection
          style={styles.section}
          height={height}
          setHeight={setHeight}
        />

        <View style={styles.section}>
          <View style={styles.weightAndAgeSelection}>
            <UnitSelection
              label="WEIGHT"
              value={weight}
              minValue={MIN_WEIGHT}
              maxValue={MAX_WEIGHT}
              setValue={setWeight}
            />
            <UnitSelection
              label="AGE"
              value={age}
              minValue={MIN_AGE}
              maxValue={MAX_AGE}
              setValue={setAge}
            />
          </View>
        </View>

        <Button title="CALCULATE" onPress={calculate} />

        <ResultModal
          modalVisible={modalVisible}
          bmiPoint={bmiPoint}
          bmiStatus={bmiStatus}
          bmiInterpretation={bmiInterpretation}
          onModalConfirm={reset}
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
  genderSelection: {
    ...ROW,
    marginHorizontal: -10,
  },
  weightAndAgeSelection: {
    ...ROW,
    marginHorizontal: -10,
  },
});
