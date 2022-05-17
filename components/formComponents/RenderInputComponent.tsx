import React from "react";
import { StyleSheet, View } from "react-native";
import { useTranslation } from "react-i18next";
import { WrappedFieldProps } from "redux-form";
import InputField from "../inputs/InputField";
import { Text } from "react-native";
import { SMALL_MARGIN_VERTICAL } from "../../utilities/constants/spacing";
import { NoteText } from "../../utilities/types/fontTypes";

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
        placeHolder={t(`form.${name}`)}
        autoComplete="name"
        value={value}
      />
      <Text style={styles.validationText}>
        {meta.invalid && t(meta.warning, { name: t(`form.${name}`) })}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    width: "80%",
    height: 70,
    marginVertical: SMALL_MARGIN_VERTICAL,
  },
  validationText: {
    ...NoteText,
    color: "red",
    width: "80%",
    textAlign: "center",
  },
});
