import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { InputFieldProps } from "../../utilities/types/componentsTypes";
import colors from "../../utilities/constants/colors";
import { PADDING_VERTICAL } from "../../utilities/constants/spacing";
import { NormalText } from "../../utilities/types/fontTypes";

const InputField = (props: InputFieldProps) => {
  const {
    placeHolder,
    fieldStyle,
    autoComplete,
    value,
    onChangeText,
    secureText,
    onBlur,
    testId,
  } = props;

  return (
    <TextInput
      placeholder={placeHolder}
      style={{ ...styles.input, ...fieldStyle }}
      autoComplete={autoComplete}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureText}
      onBlur={onBlur}
      testID={testId}
      multiline={!secureText}
    />
  );
};

export default InputField;

const styles = StyleSheet.create({
  input: {
    borderRadius: 15,
    padding: PADDING_VERTICAL,
    backgroundColor: colors.lightGray,
    ...NormalText,
  },
});
