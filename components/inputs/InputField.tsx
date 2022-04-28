import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { InputFieldProps } from "../../utilities/types/componentsTypes";
import colors from "../../utilities/constants/colors";

const InputField = (props: InputFieldProps) => {
  const {
    placeHolder,
    fieldStyle,
    autoComplete,
    value,
    onChangeText,
    secureText,
    onBlur,
  } = props;

  return (
    <TextInput
      placeholder={placeHolder}
      style={{ ...styles.input, ...fieldStyle }}
      autoCompleteType={autoComplete}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureText}
      onBlur={onBlur}
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
