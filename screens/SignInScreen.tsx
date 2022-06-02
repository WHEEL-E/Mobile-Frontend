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
import colors from "../utilities/constants/colors";
import SignInForm from "../components/signInComponents/SignInForm";
import { SignInProps } from "../utilities/types/navigationTypes/getStartedNavigationTypes";
import { DEVICE_WIDTH } from "../utilities/constants/dimentions";
import {
  HeadingText,
  NormalText,
  NoteText,
} from "../utilities/types/fontTypes";
import {
  PADDING_HORIZONTAL,
  PADDING_VERTICAL,
  SMALL_MARGIN_VERTICAL,
} from "../utilities/constants/spacing";

const SignInScreen = (props: SignInProps) => {
  const { t } = useTranslation();
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/vector-back.png")}
        style={styles.backgroundImage}
        resizeMode="contain"
        imageStyle={styles.imageStyle}
        resizeMethod="auto"
      >
        <View style={{ width: "100%", alignItems: "center" }}>
          <Image
            style={styles.logo}
            source={require("../assets/images/logo-b-app.png")}
          />
          <Text style={HeadingText} testID="welcomeBackText">
            {t("signInScreen.WelcomeBack")}
          </Text>
        </View>
        <SignInForm />
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>
            {t("signInScreen.forgotPassword")}
          </Text>
        </TouchableOpacity>
        <View style={styles.signUp}>
          <Text style={styles.notMemberText}>
            {t("signInScreen.notMember")}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signUpText}>{t("signInScreen.signUp")}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backgroundImage: {
    alignItems: "center",
    flex: 1,
    alignSelf: "center",
    width: "100%",
    paddingTop: "30%",
  },
  imageStyle: {
    position: "absolute",
    top: 0,
    width: DEVICE_WIDTH,
    height: DEVICE_WIDTH * 0.7,
  },
  logo: {
    height: 40,
    resizeMode: "center",
    width: "70%",
    alignSelf: "center",
  },
  forgotPasswordText: {
    ...NoteText,
    marginVertical: SMALL_MARGIN_VERTICAL,
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  signUp: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: PADDING_VERTICAL,
  },
  notMemberText: {
    ...NormalText,
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  signUpText: {
    ...NormalText,
    paddingHorizontal: PADDING_HORIZONTAL,
    color: colors.darkGreen,
  },
});

export default SignInScreen;
