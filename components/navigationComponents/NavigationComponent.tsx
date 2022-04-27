import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { navigationComponentProps } from "../../utilities/types/navigationTypes/navigationComponentsTypes";
import { useTranslation } from "react-i18next";
import colors from "../../utilities/constants/colors";

export const NavigationComponent = (props: navigationComponentProps) => {
  const { navigation, title, isFocused, iconName } = props;

  const color = isFocused ? "white" : colors.darkGreen;
  const backgroundColor = isFocused ? colors.darkGreen : "transparent";

  const { t } = useTranslation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(title);
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
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 13,
    fontFamily: "Cairo-Light",
  },
  iconBackground: {
    width: 45,
    height: 45,
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
