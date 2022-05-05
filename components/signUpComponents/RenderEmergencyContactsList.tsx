import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WrappedFieldProps } from "redux-form";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import fonts from "../../utilities/constants/fonts";
import colors from "../../utilities/constants/colors";
import { EmergencyContactField } from "./EmergencyContactsField";
import {
  PADDING_VERTICAL,
  SMALL_MARGIN_VERTICAL,
} from "../../utilities/constants/spacing";
import { NormalText, NoteText } from "../../utilities/types/fontTypes";

export const RenderEmergencyContactsList = (props: WrappedFieldProps) => {
  const { input, meta } = props;
  const { onChange, value, name } = input;
  const placeHolder: JSX.Element[] = [];
  const [list, setList] = React.useState(placeHolder);
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>{t("signUpScreen.emergencyContacts")}</Text>
        <Ionicons
          size={24}
          name="add-circle"
          onPress={() =>
            setList([
              ...list,
              <EmergencyContactField
                index={list.length}
                onChange={onChange}
                list={list}
                setList={setList}
                value={value}
                key={list.length.toString()}
              />,
            ])
          }
        />
      </View>
      {list}
      <Text style={styles.validationText}>
        {meta.invalid && t(meta.warning, { name: t(`signUpScreen.${name}`) })}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: "80%" },
  titleView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 15,
    padding: PADDING_VERTICAL,
    backgroundColor: colors.lightGray,
    marginVertical: SMALL_MARGIN_VERTICAL,
  },
  title: {
    ...NormalText,
    color: "black",
  },
  validationText: {
    ...NoteText,
    color: "red",
    width: "100%",
    textAlign: "center",
  },
});
