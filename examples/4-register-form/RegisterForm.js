import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { validationSchema } from "./validation";
import { styles } from "./styles";

const ErrorMessage = ({ errorValue }) => {
  return errorValue ? (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{errorValue}</Text>
    </View>
  ) : null;
};

export default function RegisterForm() {
  function onSubmitHandler(values) {
    console.log(values);
  }

  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />

      <StatusBar style="light" />

      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Register</Text>
        </View>

        {/* https://formik.org/docs/overview */}
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values, actions) => {
            onSubmitHandler(values, actions);
          }}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            values,
            errors,
            touched,
            handleSubmit,
            handleBlur,
          }) => (
            // https://github.com/APSL/react-native-keyboard-aware-scroll-view
            <KeyboardAwareScrollView
              style={styles.content}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.formGroup}>
                <Text style={styles.label}>First Name</Text>

                <TextInput
                  style={styles.input}
                  value={values.firstName}
                  onChangeText={handleChange("firstName")}
                  onBlur={handleBlur("firstName")}
                />

                <ErrorMessage
                  errorValue={touched.firstName && errors.firstName}
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Last Name</Text>

                <TextInput
                  style={styles.input}
                  value={values.lastName}
                  onChangeText={handleChange("lastName")}
                  onBlur={handleBlur("lastName")}
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Email Address</Text>

                <TextInput
                  style={styles.input}
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  autoCapitalize="none"
                />

                <ErrorMessage errorValue={touched.email && errors.email} />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Password</Text>

                <TextInput
                  style={styles.input}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  autoCapitalize="none"
                  secureTextEntry={true}
                />

                <ErrorMessage
                  errorValue={touched.password && errors.password}
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Confirm Password</Text>

                <TextInput
                  style={styles.input}
                  value={values.confirmPassword}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  autoCapitalize="none"
                  secureTextEntry={true}
                />

                <ErrorMessage
                  errorValue={touched.confirmPassword && errors.confirmPassword}
                />
              </View>

              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>SUBMIT</Text>
              </TouchableOpacity>
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </SafeAreaView>
    </>
  );
}
