import React from "react";
import {
  Image,
  ImageBackground,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useTranslation } from "react-i18next";
import colors from "../utilities/constants/colors";
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
import SignInForm from "../components/signInComponents/SignInForm";

const SignInScreen = (props: SignInProps) => {
  const { t } = useTranslation();
  const { navigation } = props;

  const [isKeyBoardShown, setIsKeyBoardShown] = React.useState(false);

  React.useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setIsKeyBoardShown(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setIsKeyBoardShown(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  let padding = {
    paddingTop: "30%",
    paddingBottom: "10%",
  };

  if (isKeyBoardShown) {
    padding = {
      paddingTop: "15%",
      paddingBottom: "5%",
    };
  } else {
    padding = {
      paddingTop: "30%",
      paddingBottom: "10%",
    };
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        style={styles.container}
        onPress={Keyboard.dismiss}
      >
        <ImageBackground
          source={require("../assets/images/vector-back.png")}
          style={{ ...styles.backgroundImage, ...padding }}
          resizeMode="contain"
          imageStyle={styles.imageStyle}
          resizeMethod="auto"
        >
          <View style={{ width: "100%", alignItems: "center" }}>
            <Image
              style={styles.logo}
              source={require("../assets/images/logo-b-app.png")}
            />
            <Text style={HeadingText}>{t("signInScreen.WelcomeBack")}</Text>
          </View>
          <SignInForm />
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>
              {t("signInScreen.forgotPassword")}
            </Text>
          </TouchableOpacity>
          {!isKeyBoardShown && (
            <View style={styles.signUp}>
              <Text style={styles.notMemberText}>
                {t("signInScreen.notMember")}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text style={styles.signUpText}>
                  {t("signInScreen.signUp")}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </ImageBackground>
      </TouchableWithoutFeedback>
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
  inputField: {
    width: "80%",
    height: 70,
    maxHeight: "30%",
    marginBottom: SMALL_MARGIN_VERTICAL * 2,
  },
  inputs: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flex: 1,
  },
  buttons: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
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
  validationText: {
    color: "red",
    ...NoteText,
  },
});

export default SignInScreen;
