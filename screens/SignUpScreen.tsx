import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTranslation } from "react-i18next";
import { BackButton } from "../components/buttons/BackButton";
import { SignUpProps } from "../utilities/types/navigationTypes/getStartedNavigationTypes";
import SignUpMainForm from "../components/signUpComponents/SignUpMainForm";
import SignUpAdditionalData from "../components/signUpComponents/SignUpAdditionalData";
import { DEVICE_WIDTH } from "../utilities/constants/dimentions";
import { HeadingText, NormalText } from "../utilities/types/fontTypes";
import { DataStatus } from "../components/generalComponents/DataStatus";
import {
  PADDING_HORIZONTAL,
  PADDING_VERTICAL,
} from "../utilities/constants/spacing";
import colors from "../utilities/constants/colors";

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
        source={require("../assets/images/vector-back.png")}
        style={styles.backgroundImage}
        resizeMode="contain"
        imageStyle={styles.imageStyle}
        resizeMethod="auto"
      >
        <DataStatus>
          <Image
            style={styles.logo}
            source={require("../assets/images/logo-b-app.png")}
          />
          <Text style={styles.title}>{t("signUpScreen.createAccount")}</Text>
          {Component}
          <View style={styles.signIn}>
            <Text style={styles.isMemberText}>
              {t("signUpScreen.isMember")}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <Text style={styles.signInText}>{t("signUpScreen.signIn")}</Text>
            </TouchableOpacity>
          </View>
        </DataStatus>
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
    paddingBottom: "10%",
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
  title: HeadingText,
  signIn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  isMemberText: {
    ...NormalText,
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  signInText: {
    ...NormalText,
    paddingHorizontal: PADDING_HORIZONTAL,
    color: colors.darkGreen,
  },
});

export default SignUpScreen;
