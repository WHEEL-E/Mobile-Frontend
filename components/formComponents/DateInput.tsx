import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { WrappedFieldProps } from "redux-form";
import colors from "../../utilities/constants/colors";
import { SMALL_MARGIN_VERTICAL } from "../../utilities/constants/spacing";
import InputField from "../inputs/InputField";
import { NormalText } from "../../utilities/types/fontTypes";
import { DEVICE_HEIGHT } from "../../utilities/constants/dimentions";

export const DateInput = (props: WrappedFieldProps) => {
  const { input, meta } = props;
  const { onChange, name, value } = input;
  const { t } = useTranslation();

  return (
    <View style={styles.conainter}>
      <Text style={NormalText}>{t(`form.${name}`)}</Text>
      <View style={styles.inputs}>
        <View style={styles.inputView}>
          <Text style={NormalText}>{t("form.year")}</Text>
          <InputField
            onChangeText={(data: string) => {
              const newValues = [...value];
              newValues[0] = data;
              onChange(newValues);
            }}
            autoComplete="off"
            value={value[0]}
            fieldStyle={styles.text}
            placeHolder="0"
          />
        </View>
        <View style={styles.inputView}>
          <Text style={NormalText}>{t("form.month")}</Text>
          <InputField
            onChangeText={(data: string) => {
              const newValues = [...value];
              newValues[1] = data;
              onChange(newValues);
            }}
            autoComplete="off"
            value={value[1]}
            fieldStyle={styles.text}
            placeHolder="0"
          />
        </View>
        <View style={styles.inputView}>
          <Text style={NormalText}>{t("form.day")}</Text>
          <InputField
            onChangeText={(data: string) => {
              const newValues = [...value];
              newValues[2] = data;
              onChange(newValues);
            }}
            autoComplete="off"
            value={value[2]}
            fieldStyle={styles.text}
            placeHolder="0"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conainter: {
    marginVertical: SMALL_MARGIN_VERTICAL,
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%",
    alignSelf: "center",
    backgroundColor: colors.lightGray,
    padding: "5%",
    borderRadius: DEVICE_HEIGHT * 0.02,
  },
  inputs: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: "5%",
  },
  inputView: {
    flex: 1,
    marginHorizontal: "2%",
    alignItems: "center",
  },
  text: {
    width: "100%",
    height: DEVICE_HEIGHT * 0.08,
    borderRadius: DEVICE_HEIGHT * 0.02,
    textAlign: "center",
    backgroundColor: "white",
  },
});
