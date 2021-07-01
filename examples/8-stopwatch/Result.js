import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { displayTime } from "./util";

function Result({ results }) {
  // console.log(results);
  return (
    <ScrollView>
      <View style={styles.resultItem} />

      {results.map((item, index) => (
        <View key={index} style={styles.resultItem}>
          <Text style={styles.resultItemText}>
            Step {results.length - index}
          </Text>

          <Text style={styles.resultItemText}>{displayTime(item)}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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

// https://reactjs.org/docs/react-api.html#reactmemo
export default React.memo(Result);
