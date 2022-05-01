import React from "react";
import { Picker } from "@react-native-picker/picker";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import colors from "../../utilities/constants/colors";
import { PickerProps } from "../../utilities/types/signUpTypes";

const PickerComponent = (props: PickerProps) => {
  const { fieldProps, labels, setType } = props;
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
    <View style={styles.pickerContainer}>
      <Picker
        selectedValue={fieldProps.input.value}
        style={styles.picker}
        mode="dropdown"
        onValueChange={(name) => {
          if (name !== placeHolder) {
            fieldProps.input.onChange(name);
            setType && setType(name);
          }
        }}
      >
        {pickers}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    width: "80%",
    height: 70,
    marginVertical: 10,
    borderRadius: 20,
    overflow: "hidden",
  },
  picker: {
    flex: 1,
    color: "black",
    backgroundColor: colors.lightGray,
  },
});
export default PickerComponent;
