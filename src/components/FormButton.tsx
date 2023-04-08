import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { windowHeight } from "../utils/Dimensions";

const FormButton = ({
  buttonTitle = "Submit",
  disabled = false,
  onPress = () => {},
}) => (
  <TouchableOpacity
    style={[styles.buttonContainer, disabled && styles.disabledContainer]}
     onPress={onPress}
  >
    <Text style={[styles.buttonText, disabled && styles.disabledText]}>
      {buttonTitle}
    </Text>
  </TouchableOpacity>
);

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: "100%",
    height: windowHeight / 15,
    backgroundColor: "#2e64e5",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
  disabledContainer: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    fontFamily: "Lato-Regular",
  },
  disabledText: {
    color: "#aaaaaa",
  },
});
