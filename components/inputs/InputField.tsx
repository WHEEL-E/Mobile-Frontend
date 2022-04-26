import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { InputFieldProps } from "../../utilities/componentsUtils";
import colors from "../../utilities/constants/colors";

const InputField = (props: InputFieldProps) => {
  const {
    placeHolder,
    fieldStyle,
    autoComplete,
    value,
    onChangeText,
    secureText,
  } = props;

  return (
    <TextInput
      placeholder={placeHolder}
      style={{ ...styles.input, ...fieldStyle }}
      autoCompleteType={autoComplete}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureText}
    />
  );
};

export default InputField;

const styles = StyleSheet.create({
  input: {
    borderRadius: 15,
    padding: 20,
    backgroundColor: colors.lightGray,
  },
});
