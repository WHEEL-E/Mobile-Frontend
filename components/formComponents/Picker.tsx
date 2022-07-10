import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../utilities/constants/colors";
import { PickerProps } from "../../utilities/types/signUpTypes";
import { PADDING_VERTICAL } from "../../utilities/constants/spacing";
import { NormalText, NoteText } from "../../utilities/types/fontTypes";
import DropDownPicker from "react-native-dropdown-picker";
import { useTranslation } from "react-i18next";
import { UserTypes } from "../../utilities/types/userTypes";
import { DEVICE_HEIGHT } from "../../utilities/constants/dimentions";

const PickerComponent = (props: PickerProps) => {
  const { fieldProps, labels, setType } = props;
  const { meta, input } = fieldProps;
  const { name, onChange, value } = input;
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState(
    labels.map((prop) => {
      let data: any = prop;

      if (prop === "yes") {
        data = true;
      } else if (prop === "no") {
        data = false;
      }

      return { label: t(`form.${prop}`), value: data };
    })
  );

  const onValChange = (value: any) => {
    onChange(value);
    if (setType) {
      setType(value as UserTypes);
    }
  };

  return (
    <View style={styles.mainView}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={onValChange}
        setItems={setItems}
        textStyle={NormalText}
        dropDownContainerStyle={styles.pickerContainer}
        style={styles.picker}
        placeholder={t(`form.${name}`)}
        listMode="SCROLLVIEW"
        testID={`signIn${name}`}
      />

      <Text style={styles.validationText} testID="warningText">
        {meta.invalid && t(meta.warning, { name: t(`form.${name}`) })}
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
    borderRadius: DEVICE_HEIGHT * 0.02,
    padding: PADDING_VERTICAL,
    position: "relative",
    top: 0,
  },
  picker: {
    width: "80%",
    height: DEVICE_HEIGHT * 0.08,
    backgroundColor: colors.lightGray,
    alignSelf: "center",
    borderWidth: 0,
    borderRadius: DEVICE_HEIGHT * 0.02,
    zIndex: 0,
  },
  validationText: {
    color: "red",
    ...NoteText,
  },
});
export default PickerComponent;
