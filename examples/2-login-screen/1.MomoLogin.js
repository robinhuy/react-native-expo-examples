import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";
import Constants from "expo-constants";

export default function MomoLogin() {
  return (
    <SafeAreaView style={styles.container}>
      {/* https://docs.expo.io/versions/latest/sdk/status-bar */}
      <StatusBar style="light" />

      <View style={styles.content}>
        <View style={styles.textWrapper}>
          <Text style={styles.hiText}>Xin chào!</Text>
          <Text style={styles.userText}>DANG QUANG HUY</Text>
          <Text style={styles.userText}>0123456789</Text>
        </View>

        <View style={styles.form}>
          {/* https://docs.expo.io/guides/icons */}
          <FontAwesome5 name="lock" style={styles.iconLock} />

          {/* https://reactnative.dev/docs/textinput */}
          <TextInput
            style={styles.inputPassword}
            keyboardType="numeric"
            secureTextEntry={true}
            autoFocus={true}
            placeholder="Nhập mật khẩu"
            placeholderTextColor="#929292"
          />

          {/* https://reactnative.dev/docs/touchableopacity */}
          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.buttonLoginText}>ĐĂNG NHẬP</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.action}>
          <TouchableOpacity>
            <Text style={styles.userText}>QUÊN MẬT KHẨU</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.userText} numberOfLines={1} adjustsFontSizeToFit>THOÁT TÀI KHOẢN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const TEXT = {
  color: "#fff",
  textAlign: "center",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b0006d",
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    paddingHorizontal: 30,
  },
  textWrapper: {
    marginTop: 60,
    marginBottom: 30,
  },
  hiText: {
    ...TEXT,
    fontSize: 20,
    lineHeight: 50,
    fontWeight: "bold",
  },
  userText: {
    ...TEXT,
    fontSize: 15,
    lineHeight: 30,
  },
  form: {
    marginBottom: 30,
  },
  iconLock: {
    color: "#929292",
    position: "absolute",
    fontSize: 16,
    top: 22,
    left: 22,
    zIndex: 10,
  },
  inputPassword: {
    height: 60,
    borderRadius: 30,
    paddingHorizontal: 30,
    fontSize: 20,
    color: "#929292",
    backgroundColor: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
  },
  buttonLogin: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "#8d015a",
    justifyContent: "center",
    marginTop: 15,
  },
  buttonLoginText: {
    ...TEXT,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
