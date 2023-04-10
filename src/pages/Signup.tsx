import React, { FC, useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import SocialButton from "../components/SocialButton";

interface SignupScreenProps {
  navigation: {
    navigate: (screen: string, params?: object) => void;
  };
}

const SignupScreen: FC<SignupScreenProps> = ({ navigation }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState();

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "Kufam-SemiBoldItalic": require("../../assets/fonts/Kufam-SemiBoldItalic.ttf"),
        "Lato-Regular": require("../../assets/fonts/Lato-Regular.ttf"),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // or a loading indicator
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>

      <FormInput
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(userEmail) => setEmail(userEmail)}
      />

      <FormInput
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
        onChangeText={(userPassword) => setPassword(userPassword)}
      />

      <FormInput
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
        onChangeText={(userPassword) => setPassword(userPassword)}
      />

      <FormButton
        buttonTitle="Sign Up"
        onPress={() => alert("Sign Up Clicked")}
      />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our
        </Text>
        <TouchableOpacity onPress={() => alert("Terms Clicked!")}>
          <Text style={[styles.color_textPrivate, { color: "#e88832" }]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <TouchableOpacity onPress={() => alert("Policy Clicked!")}>
          <Text style={[styles.color_textPrivate, { color: "#e88832" }]}>
            Privacy Policy
          </Text>
        </TouchableOpacity>
      </View>

      <SocialButton
        buttonTitle="Sign Up with Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => {}}
      />

      <SocialButton
        buttonTitle="Sign Up with Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {}}
      />

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9fafd",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontFamily: "Kufam-SemiBoldItalic",
    fontSize: 28,
    marginBottom: 10,
    color: "#051d5f",
  },
  navButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
    fontFamily: "Lato-Regular",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 35,
    justifyContent: "center",
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: "400",
    fontFamily: "Lato-Regular",
    color: "grey",
  },
});
