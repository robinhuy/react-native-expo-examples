import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function RegisterForm() {
  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />

      <StatusBar style="light" />

      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Register</Text>
        </View>

        {/* https://github.com/APSL/react-native-keyboard-aware-scroll-view */}
        <KeyboardAwareScrollView
          style={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.formGroup}>
            <Text style={styles.label}>First Name</Text>

            <TextInput style={styles.input} />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Last Name</Text>

            <TextInput style={styles.input} />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Email Address</Text>

            <TextInput style={styles.input} />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Password</Text>

            <TextInput style={styles.input} />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Confirm Password</Text>

            <TextInput style={styles.input} />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SUBMIT</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
}
