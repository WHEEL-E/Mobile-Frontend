import React, { Dispatch, SetStateAction } from "react";
import { StyleSheet, View } from "react-native";
import { useTranslation } from "react-i18next";
import { WrappedFieldProps } from "redux-form";
import InputField from "../inputs/InputField";

export const RenderInputComponent = (props: WrappedFieldProps) => {
  const { input } = props;
  const { onChange, name, value } = input;
  const { t } = useTranslation();

  return (
    <InputField
      fieldStyle={styles.inputField}
      onChangeText={onChange}
      placeHolder={t(`signUpScreen.${name}`)}
      autoComplete="name"
      value={value}
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
