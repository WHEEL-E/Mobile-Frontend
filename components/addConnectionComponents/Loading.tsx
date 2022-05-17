import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text } from "react-native";
import { HeadingText } from "../../utilities/types/fontTypes";

export const Loading = () => {
  const { t } = useTranslation();
  return <Text style={styles.text}>{t("addConnection.loading")}</Text>;
};

const styles = StyleSheet.create({
  text: HeadingText,
});
