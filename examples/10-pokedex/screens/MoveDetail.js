import React, { Component } from "react";
import { View, Text, StyleSheet, Platform, ScrollView } from "react-native";
import { Icon, Image } from "react-native-elements";
import { exp } from "react-native-reanimated";

import { PokemonTypeIcon } from "../constants";

export default function MoveDetail({ navigation, route }) {
  const { move = {} } = route.params;

  return (
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.backButton}>
          <Icon
            name="keyboard-arrow-left"
            size={40}
            color="#fff"
            underlayColor="transparent"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.moveName}>{move.title}</Text>

          <View style={styles.moveType}>
            <Image
              source={
                PokemonTypeIcon[move.move_type.toLowerCase()] ||
                PokemonTypeIcon["default"]
              }
            />
            <Text>{move.move_type.toUpperCase()}</Text>
          </View>

          <View>
            <Text style={styles.description}>
              This move is belong to {move.move_category}.{"\n"}
              Dodge window is {move.dodge_window} and {"\n"}
              Damage window is {move.damage_window}.
            </Text>
          </View>

          <View style={styles.hr}></View>

          <View style={styles.moveCompare}>
            <View style={styles.movePart}>
              <Text style={styles.movePartTitle}>Power</Text>
              <Text>{move.power}</Text>
            </View>
            <View style={styles.movePart}>
              <Text style={styles.movePartTitle}>Cooldown</Text>
              <Text>{move.cooldown}</Text>
            </View>
            <View style={[styles.movePart, styles.borderRightNone]}>
              <Text style={styles.movePartTitle}>Energy</Text>
              <Text>{move.energy_gain}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backButton: {
    alignItems: "flex-start",
    paddingTop: 40,
    marginBottom: -40,
  },
  body: {
    backgroundColor: "#559EDF",
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: 50,
    position: "relative",
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
  },
  avatar: {
    position: "absolute",
    width: 150,
    height: 150,
    alignSelf: "center",
    top: -100,
  },
  moveName: {
    marginTop: 25,
    alignSelf: "center",
    fontSize: 40,
    fontFamily: "Avenir",
    color: "#4f4f4f",
  },
  moveType: {
    alignItems: "center",
  },
  moveTypes: {
    backgroundColor: "#559EDF",
    borderRadius: 20,
    padding: 10,
    width: 120,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 8,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: "rgba(85,158, 223, .9)",
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  textWhite: {
    color: "white",
  },
  description: {
    color: "#4F4F4F",
    textAlign: "center",
    lineHeight: 22,
    marginTop: 15,
    marginBottom: 35,
  },
  moveStatus: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  moveHP: {
    color: "#1a87d9",
    fontWeight: "bold",
    flex: 1,
  },
  moveScore: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
  },
  moveProgress: {
    flex: 5,
  },
  moveDigital: {
    marginBottom: 15,
  },
  moveCompare: {
    flexDirection: "row",
  },
  movePart: {
    flex: 1,
    alignItems: "center",
    borderRightColor: "#F0F0F0",
    borderRightWidth: 1,
  },
  borderRightNone: {
    borderRightWidth: 0,
  },
  movePartTitle: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    color: "#1a87d9",
    fontWeight: "bold",
  },
  hr: {
    height: 1,
    backgroundColor: "#F0F0F0",
  },
});
