import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useTranslation } from "react-i18next";
import { EventOrValueHandler } from "redux-form";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../utilities/constants/colors";

interface EmergencyContactFieldProps {
  index: number;
  value: string[];
  list: JSX.Element[];
  onChange: EventOrValueHandler<React.ChangeEvent<any>>;
  setList: React.Dispatch<React.SetStateAction<JSX.Element[]>>;
}

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
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 15,
    padding: 20,
    backgroundColor: colors.lightGray,
    width: "100%",
    alignSelf: "center",
  },
});
