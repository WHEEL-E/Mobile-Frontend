import React from "react";
import { useTranslation } from "react-i18next";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { BIG_MARGIN_VERTICAL } from "../../utilities/constants/spacing";
import { NormalText } from "../../utilities/types/fontTypes";

export const Loading = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
      <Text style={styles.text}>{t("addConnection.loading")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    ...NormalText,
    marginTop: BIG_MARGIN_VERTICAL,
  },
});
