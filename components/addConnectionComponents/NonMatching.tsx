import React from "react";
import { useTranslation } from "react-i18next";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../../utilities/constants/colors";
import { BIG_MARGIN_VERTICAL } from "../../utilities/constants/spacing";
import { ScreenNameText, TitleText } from "../../utilities/types/fontTypes";

export const NonMatching = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/search.png")}
        style={{
          resizeMode: "contain",
          width: "50%",
          height: "40%",
          marginVertical: BIG_MARGIN_VERTICAL,
        }}
      />
      <Text style={styles.mainText}>
        {t("addConnection.noMatchingMainText")}
      </Text>
      <Text style={styles.text}>{t("addConnection.noMatchingText")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  mainText: {
    ...ScreenNameText,
    textAlign: "center",
    color: colors.darkBlue,
  },
  text: {
    ...TitleText,
    textAlign: "center",
    color: colors.darkBlue,
  },
});
