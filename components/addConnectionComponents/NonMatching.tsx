import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../utilities/constants/colors";
import { ScreenNameText } from "../../utilities/types/fontTypes";

export const NonMatching = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t("addConnection.noMatchingText")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    backgroundColor: colors.lightPurple,
    borderRadius: 50,
    marginVertical: "20%",
    padding: "5%",
  },
  text: { ...ScreenNameText, textAlign: "center" },
});
