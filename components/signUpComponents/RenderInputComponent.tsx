import React from "react";
import { StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import { WrappedFieldProps } from "redux-form";
import InputField from "../InputField";

export const RenderInputComponent = (props: WrappedFieldProps) => {
  const { t } = useTranslation();
  return (
    <InputField
      fieldStyle={styles.inputField}
      onChangeText={props.input.onChange}
      placeHolder={t(`signupScreen.${props.input.name}`)}
      autoComplete="name"
      value={props.input.value}
    />
  );
};

const styles = StyleSheet.create({
  inputField: {
    width: "80%",
    height: 70,
    marginVertical: 10,
  },
});
