import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WrappedFieldProps } from "redux-form";
import { Ionicons } from "@expo/vector-icons";
import fonts from "../../utilities/constants/fonts";
import colors from "../../utilities/constants/colors";
import { EmergencyContactField } from "./EmergencyContactsField";
import { useTranslation } from "react-i18next";

export const RenderEmergencyContactsList = (props: WrappedFieldProps) => {
  const { input } = props;
  const { onChange, value } = input;
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
    padding: 20,
    backgroundColor: colors.lightGray,
    marginVertical: 10,
  },
  title: {
    fontFamily: fonts.CairoRegular,
    fontSize: 17,
    color: "black",
  },
});
