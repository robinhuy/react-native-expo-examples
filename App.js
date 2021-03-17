import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  BackHandler,
} from "react-native";
import { Text, ListItem } from "react-native-elements";
import Constants from "expo-constants";
import { EXAMPLE_LIST } from "./example-list";

export default function App() {
  const [exampleIndex, setExampleIndex] = useState(null);

  // Handle when user press Hardware Back Button
  useEffect(() => {
    const backAction = () => {
      // Go back to Example List
      if (exampleIndex !== null) {
        setExampleIndex(null);
      } 
      // Exit app if user currently in Example List
      else {
        BackHandler.exitApp();
      }

      return true;
    };

    // https://reactnative.dev/docs/backhandler
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [exampleIndex]);

  if (exampleIndex !== null) return EXAMPLE_LIST[exampleIndex].component;

  return (
    <SafeAreaView style={styles.container}>
      <Text h4 style={styles.heading}>
        React Native Expo Examples
      </Text>

      <ScrollView>
        {EXAMPLE_LIST.map((l, i) => (
          <ListItem key={i} bottomDivider onPress={() => setExampleIndex(i)}>
            <View>
              <Text>Level {l.level}</Text>
            </View>

            <ListItem.Content>
              <ListItem.Title style={styles.title}>{l.name}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  heading: {
    textAlign: "center",
    padding: 12,
  },
  title: {
    fontWeight: "bold",
  },
});
