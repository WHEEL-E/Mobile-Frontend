import React from "react";
import { useTranslation } from "react-i18next";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import colors from "../../utilities/constants/colors";
import { DEVICE_WIDTH } from "../../utilities/constants/dimentions";
import { BIG_MARGIN_VERTICAL } from "../../utilities/constants/spacing";
import { HeadingText } from "../../utilities/types/fontTypes";

export const Loading = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <ActivityIndicator size={DEVICE_WIDTH * 0.4} color={colors.darkGreen} />
      <Text style={styles.text}>{t("dataStatus.loading")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    ...HeadingText,
    marginTop: BIG_MARGIN_VERTICAL,
  },
});
