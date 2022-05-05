import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../utilities/constants/colors";
import { EmergencyContactFieldProps } from "../../utilities/types/signUpTypes";
import {
  PADDING_VERTICAL,
  SMALL_MARGIN_VERTICAL,
} from "../../utilities/constants/spacing";

export const EmergencyContactField = (props: EmergencyContactFieldProps) => {
  const { index, value, onChange, setList, list } = props;
  const { t } = useTranslation();

  return (
    <View style={styles.inputView}>
      <TextInput
        onChangeText={(data: string) => {
          const newValues = [...value];
          newValues[index] = data;
          onChange(newValues);
        }}
        placeholder={t(`signUpScreen.emergencyContact`)}
        autoCompleteType="name"
        value={value[index]}
      />
      <Ionicons
        size={24}
        name="remove-circle"
        onPress={() => {
          setList(
            list.filter(
              (value: JSX.Element, index: number) => index !== list.length
            )
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    marginVertical: SMALL_MARGIN_VERTICAL,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 15,
    padding: PADDING_VERTICAL,
    backgroundColor: colors.lightGray,
    width: "100%",
    alignSelf: "center",
  },
});
