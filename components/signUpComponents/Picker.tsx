import React from "react";
import { Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import colors from "../../utilities/constants/colors";
import { PickerProps } from "../../utilities/types/signUpTypes";
import fonts from "../../utilities/constants/fonts";

const PickerComponent = (props: PickerProps) => {
  const { fieldProps, labels, setType } = props;
  const { input, meta } = fieldProps;
  const { onChange, value, name } = input;
  const { t } = useTranslation();
  const pickers = [];
  const placeHolder = labels[0];

  for (const label of labels) {
    pickers.push(
      <Picker.Item
        key={label}
        label={t(`signUpScreen.${label}`)}
        value={label}
      />
    );
  }

  return (
    <View style={styles.mainView}>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={value}
          style={styles.picker}
          mode="dropdown"
          onValueChange={(name) => {
            if (name !== placeHolder) {
              onChange(name);
              setType && setType(name);
            }
          }}
        >
          {pickers}
        </Picker>
      </View>
      <Text style={styles.validationText}>
        {meta.invalid && t(meta.warning, { name: t(`signUpScreen.${name}`) })}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pickerContainer: {
    width: "80%",
    height: 70,
    marginVertical: 10,
    borderRadius: 20,
    overflow: "hidden",
  },
  picker: {
    width: "100%",
    height: 70,
    backgroundColor: colors.lightGray,
    color: "black",
  },
  validationText: {
    color: "red",
    fontFamily: fonts.CairoRegular,
    fontSize: 10,
  },
});
export default PickerComponent;
