import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { InputFieldProps } from "../../utilities/componentsUtils";
import colors from "../../utilities/constants/colors";

const InputField = (props: InputFieldProps) => {
  const { placeHolder, fieldStyle, autoComplete, value, onChangeText } = props;

  return (
    <TextInput
      placeholder={placeHolder}
      style={{ ...styles.input, ...fieldStyle }}
      autoCompleteType={autoComplete}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default InputField;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 55,
    backgroundColor: "#ccc",
    textAlign: "center",
  },
  input: {
    borderRadius: 15,
    textAlign: "left",
    padding: 20,
    backgroundColor: colors.lightGray,
  },
});
