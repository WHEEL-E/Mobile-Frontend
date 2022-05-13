import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { useTranslation } from "react-i18next";
import { AddNewConnectionProps } from "../utilities/types/navigationTypes/mainNavigationTypes";

const AddNewConnectionScreen = (props: AddNewConnectionProps) => {
  const { navigation } = props;
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <ImageBackground
        testID="backgroundImage"
        source={require("../assets/images/cloud-background.png")}
        style={styles.backgroundImage}
        resizeMode="stretch"
      ></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  backgroundImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
export default AddNewConnectionScreen;
