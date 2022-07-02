import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { navigationComponentProps } from "../../utilities/types/navigationTypes/navigationComponentsTypes";
import { useTranslation } from "react-i18next";
import colors from "../../utilities/constants/colors";
import { NoteText } from "../../utilities/types/fontTypes";
import { PADDING_HORIZONTAL } from "../../utilities/constants/spacing";

export const NavigationComponent = (props: navigationComponentProps) => {
  const { navigation, title, isFocused, iconName } = props;

  const color = isFocused ? "white" : colors.darkGreen;
  const backgroundColor = isFocused ? colors.darkGreen : "transparent";

  const { t } = useTranslation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.reset({
          index: 0,
          routes: [{ name: title }],
        });
      }}
      style={styles.container}
      testID={title}
    >
      <View
        testID="view"
        style={{
          ...styles.iconBackground,
          backgroundColor: backgroundColor,
        }}
      >
        <Ionicons testID="icon" name={iconName} size={24} color={color} />
      </View>
      <Text testID="text" style={styles.title}>
        {t(`navigationBar.${title}`)}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "17%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    ...NoteText,
  },
  iconBackground: {
    width: "80%",
    height: "100%",
    padding: PADDING_HORIZONTAL,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
