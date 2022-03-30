import React from "react";
import { StyleSheet, TextInput } from "react-native";
import colors from "../../constants/colors";
import { AutoCompleteType } from "../../utilities/types/AutoCompleteType";
interface InputFieldProps {
  placeHolder: string;
  fieldStyle: object;
  autoComplete: AutoCompleteType;
  value: string;
  onChangeText: (text: string) => void;
}

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
