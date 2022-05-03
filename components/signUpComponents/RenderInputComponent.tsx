import React from "react";
import { StyleSheet, View } from "react-native";
import { useTranslation } from "react-i18next";
import { WrappedFieldProps } from "redux-form";
import InputField from "../inputs/InputField";
import { Text } from "react-native";
import fonts from "../../utilities/constants/fonts";

export const RenderInputComponent = (props: WrappedFieldProps) => {
  const { input, meta } = props;
  const { onChange, name, value } = input;
  const { t } = useTranslation();

  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InputField
        fieldStyle={styles.inputField}
        onChangeText={onChange}
        placeHolder={t(`signUpScreen.${name}`)}
        autoComplete="name"
        value={value}
      />
      <Text style={styles.validationText}>
        {meta.invalid && t(meta.warning, { name: t(`signUpScreen.${name}`) })}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    width: "80%",
    height: 70,
    marginVertical: 10,
  },
  validationText: {
    color: "red",
    fontFamily: fonts.CairoRegular,
    width: "80%",
    textAlign: "center",
    fontSize: 10,
  },
});
