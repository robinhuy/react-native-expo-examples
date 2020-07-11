import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const addZeroBefore = (time) => {
  if (time < 10) {
    return "0" + time;
  }

  return "" + time;
};

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setRunning] = useState(false);
  const [timer, setTimer] = useState(null);
  const [results, setResults] = useState([]);

  const handleRightButtonPress = () => {
    if (isRunning) {
      clearInterval(timer);
    } else {
      const interval = setInterval(() => {
        setTime((previousTime) => previousTime + 1);
      }, 10);
      setTimer(interval);
    }

    setRunning((previousState) => !previousState);
  };

  const handleLeftButtonPress = () => {
    if (isRunning) {
      setResults((previousResults) => {
        previousResults.unshift(time);
        return previousResults;
      });
    } else {
      setResults([]);
      setTime(0);
    }
  };

  const displayTime = (centisecond) => {
    let minutes = 0;
    let seconds = 0;

    if (centisecond < 0) {
      centisecond = 0;
    }

    if (centisecond < 100) {
      return "00:00," + addZeroBefore(centisecond);
    }

    let remainCentisecond = centisecond % 100;
    seconds = (centisecond - remainCentisecond) / 100;

    if (seconds < 60) {
      return (
        "00:" + addZeroBefore(seconds) + "," + addZeroBefore(remainCentisecond)
      );
    }

    let remainSecond = seconds % 60;
    minutes = (seconds - remainSecond) / 60;

    return (
      addZeroBefore(minutes) +
      ":" +
      addZeroBefore(remainSecond) +
      ":" +
      addZeroBefore(remainCentisecond)
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.display}>
        <Text style={styles.displayText}>{displayTime(time)}</Text>
      </View>

      <View style={styles.control}>
        <TouchableOpacity
          style={[
            styles.controlButtonBorder,
            { backgroundColor: isRunning ? "#333333" : "#1c1c1e" },
          ]}
          onPress={handleLeftButtonPress}
        >
          <View style={styles.controlButton}>
            <Text style={{ color: isRunning ? "#fff" : "#9d9ca2" }}>
              {isRunning ? "Vòng" : "Đặt lại"}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.controlButtonBorder,
            { backgroundColor: isRunning ? "#340e0d" : "#0a2a12" },
          ]}
          onPress={handleRightButtonPress}
        >
          <View style={styles.controlButton}>
            <Text style={{ color: isRunning ? "#ea4c49" : "#37d05c" }}>
              {isRunning ? "Dừng" : "Bắt đầu"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.result}>
        <ScrollView>
          <View style={styles.resultItem} />

          {results.map((item, index) => (
            <View key={index} style={styles.resultItem}>
              <Text style={styles.resultItemText}>
                Vòng {results.length - index}
              </Text>
              <Text style={styles.resultItemText}>{displayTime(item)}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const CENTER_STYLE = {
  justifyContent: "center",
  alignItems: "center",
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  display: {
    flex: 3,
    ...CENTER_STYLE,
  },
  displayText: {
    color: "#fff",
    fontSize: 70,
    fontWeight: "200",
    fontFamily: "Helvetica Neue",
  },
  control: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  controlButtonBorder: {
    width: 70,
    height: 70,
    borderRadius: 70,
    ...CENTER_STYLE,
  },
  controlButton: {
    width: 65,
    height: 65,
    borderRadius: 65,
    borderColor: "#000",
    borderWidth: 1,
    ...CENTER_STYLE,
  },
  result: { flex: 2 },
  resultItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#313131",
    height: 50,
    paddingHorizontal: 15,
  },
  resultItemText: { color: "#fff" },
});
