import React, { Component } from "react";
import { Header, Icon } from "react-native-elements";

export default function MainHeader({ navigation, isMain, title }) {
  if (isMain) {
    return (
      <Header
        centerComponent={{ text: title, style: { color: "#fff" } }}
        backgroundColor="#559EDF"
      />
    );
  } else {
    return (
      <Header
        leftComponent={
          <Icon
            name="keyboard-arrow-left"
            color="#fff"
            onPress={() => {
              navigation.goBack();
            }}
          />
        }
        centerComponent={{ text: title, style: { color: "#fff" } }}
      />
    );
  }
}
