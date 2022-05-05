import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../utilities/constants/colors";
import { PickerProps } from "../../utilities/types/signUpTypes";
import { PADDING_VERTICAL } from "../../utilities/constants/spacing";
import { NormalText, NoteText } from "../../utilities/types/fontTypes";
import DropDownPicker from "react-native-dropdown-picker";
import { useTranslation } from "react-i18next";

const PickerComponent = (props: PickerProps) => {
  const { fieldProps, labels } = props;
  const { meta, input } = fieldProps;
  const { name, onChange, value } = input;
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState(
    labels.map((prop) => {
      return { label: t(`signUpScreen.${prop}`), value: prop };
    })
  );

  return (
    <View style={styles.mainView}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={onChange}
        setItems={setItems}
        textStyle={NormalText}
        dropDownContainerStyle={styles.pickerContainer}
        style={styles.picker}
        placeholder={t(`signUpScreen.${name}`)}
        listMode="SCROLLVIEW"
      />

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
  },
  pickerContainer: {
    width: "80%",
    backgroundColor: colors.lightGray,
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 15,
    padding: PADDING_VERTICAL,
    zIndex: 1,
  },
  picker: {
    width: "80%",
    height: 70,
    backgroundColor: colors.lightGray,
    alignSelf: "center",
    borderWidth: 0,
    borderRadius: 15,
    zIndex: 0,
  },
  validationText: {
    color: "red",
    ...NoteText,
  },
});
export default PickerComponent;
