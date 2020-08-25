import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import {
  BOX,
  TEXT_VALUE,
  TEXT_LABEL,
  TEXT,
  BUTTON_TEXT,
  BUTTON,
} from "./style";

export default function ResultModal({
  modalVisible,
  setModalVisible,
  bmiPoint,
  bmiStatus,
  bmiInterpretation,
}) {
  return (
    // https://reactnative.dev/docs/modal
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Your Result</Text>

        <View style={styles.content}>
          <Text
            style={[
              styles.bmiStatusText,
              { color: bmiStatus === "NORMAL" ? "#7ac79d" : "#f5ac40" },
            ]}
          >
            {bmiStatus}
          </Text>

          <Text style={styles.bmiPointText}>{bmiPoint}</Text>

          <Text style={styles.bmiInterpretationText}>{bmiInterpretation}</Text>
        </View>

        <TouchableOpacity
          style={styles.recalculateButton}
          onPress={() => setModalVisible(false)}
        >
          <Text style={styles.recalculateButtonText}>RE-CALCULATE</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d2236",
  },
  headerText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 15,
    marginBottom: 10,
  },
  content: {
    ...BOX,
    justifyContent: "space-evenly",
    margin: 15,
  },
  bmiStatusText: {
    ...TEXT,
    fontSize: 18,
    fontWeight: "bold",
  },
  bmiPointText: {
    ...TEXT,
    fontSize: 70,
    fontWeight: "bold",
  },
  bmiInterpretationText: {
    ...TEXT,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "500",
  },
  recalculateButton: {
    ...BUTTON,
    marginTop: 10,
    marginBottom: Platform.OS === "ios" ? 0 : 15,
  },
  recalculateButtonText: {
    ...BUTTON_TEXT,
  },
});
