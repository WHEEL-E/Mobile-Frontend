import React from "react";
import { StyleSheet, View } from "react-native";
import { useTranslation } from "react-i18next";
import { WrappedFieldProps } from "redux-form";
import InputField from "../inputs/InputField";
import { Text } from "react-native";
import { SMALL_MARGIN_VERTICAL } from "../../utilities/constants/spacing";
import { NoteText } from "../../utilities/types/fontTypes";
import { DEVICE_HEIGHT } from "../../utilities/constants/dimentions";

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
        autoComplete="off"
        value={value}
        testId={`signIn${name}`}
        secureText={name === "password"}
      />
      {meta.invalid && (
        <Text style={styles.validationText} testID="warningText">
          {t(meta.warning, { name: t(`form.${name}`) })}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    width: "80%",
    height: DEVICE_HEIGHT * 0.08,
    marginVertical: SMALL_MARGIN_VERTICAL,
  },
  validationText: {
    ...NoteText,
    color: "red",
    width: "80%",
    textAlign: "center",
  },
});
