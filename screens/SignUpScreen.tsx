import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { BackButton } from "../components/UI/BackButton";
import { SignUpProps } from "../navigation/navigationUtils";
import SignUpMainForm from "../components/UI/signUpComponents/signUpMainForm";
import SignUpAdditionalData from "../components/UI/signUpComponents/SignUpAdditionalData";
import { DEVICE_WIDTH } from "../constants/dimentions";

const SignUpScreen = (props: SignUpProps) => {
  const { t } = useTranslation();
  const { navigation } = props;
  const [screen, setScreen] = React.useState("FirstPage");
  const Component =
    screen === "FirstPage" ? (
      <SignUpMainForm navigation={navigation} setScreen={setScreen} />
    ) : (
      <SignUpAdditionalData navigation={navigation} />
    );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/vector-back.png")}
        style={styles.backgroundImage}
        resizeMode="contain"
        imageStyle={styles.imageStyle}
        resizeMethod="auto"
      >
        <Image
          style={styles.logo}
          source={require("../assets/logo-b-app.png")}
        />
        <Text style={styles.title}>{t("createAccount")}</Text>
        <View style={styles.backButton}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        {Component}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    textAlignVertical: "top",
    alignContent: "stretch",
  },
  backgroundImage: {
    alignItems: "center",
    paddingTop: "30%",
    flex: 1,
    alignSelf: "center",
    width: "100%",
  },
  imageStyle: {
    borderColor: "red",
    position: "absolute",
    top: 0,
    width: DEVICE_WIDTH,
    height: DEVICE_WIDTH * 0.7,
  },
  backButton: {
    position: "absolute",
    top: "7%",
    left: "8%",
  },
  logo: {
    height: 40,
    resizeMode: "center",
    width: "70%",
    alignSelf: "center",
  },
  title: {
    fontSize: 27,
    fontFamily: "Cairo-Bold",
  },
});

export default SignUpScreen;
