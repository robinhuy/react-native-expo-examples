import React from "react";
import { Header, Icon } from "react-native-elements";
import { BackgroundColor } from "../constants";

export default function MainHeader({ navigation, isMain, title }) {
  if (isMain) {
    return (
      <Header
        containerStyle={{
          backgroundColor: BackgroundColor,
        }}
        centerComponent={{ text: title, style: { color: "#fff" } }}
      />
    );
  } else {
    return (
      <Header
        containerStyle={{
          backgroundColor: BackgroundColor,
          borderBottomWidth: 0,
        }}
        leftComponent={
          <Icon
            name="keyboard-arrow-left"
            color="#fff"
            size={40}
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
