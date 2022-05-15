import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  ImageBackgroundComponent,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SetPasswordProps } from "../utilities/types/navigationTypes/getStartedNavigationTypes";
import { changePassword } from "../store/actions/forgetPassword";
import * as Linking from "expo-linking";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  NormalText,
  NoteText,
  ScreenNameText,
} from "../utilities/types/fontTypes";
import {
  validatePassword,
  validateMatching,
} from "../utilities/dataValidators";
import { ShowModal } from "../store/actions/errorModal";
import colors from "../utilities/constants/colors";
import {
  BIG_MARGIN_VERTICAL,
  SMALL_MARGIN_VERTICAL,
} from "../utilities/constants/spacing";
import { RoundEdgedButton } from "../components/buttons/RoundEdgedButton";
import InputField from "../components/inputs/InputField";
import ChangedPasswordModal from "../components/ForgetPasswordComponents/ChangedPasswordModal";

export const SetPasswordScreen = (props: SetPasswordProps) => {
  const { navigation } = props;
  const [modalVisible, setModalVisible] = React.useState(false);

  const link = Linking.useURL();
  const dispatch = useDispatch<any>();
  const { t } = useTranslation();

  const [userData, setUserData] = React.useState({
    password: "",
    confirmPassword: "",
  });

  const [isValid, setIsValid] = React.useState({
    confirmPassword: true,
    password: false,
  });

  const passwordChangeHandler = (value: string) => {
    setUserData({ ...userData, password: value });
    setIsValid({
      password: validatePassword(value) ? false : true,
      confirmPassword: validateMatching(value, userData.password)
        ? false
        : true,
    });
  };

  const confirmPasswordChangeHandler = (value: string) => {
    setUserData({ ...userData, confirmPassword: value });
    setIsValid({
      ...isValid,
      confirmPassword: validateMatching(value, userData.password)
        ? false
        : true,
    });
  };

  const submitResetPasswordHandler = () => {
    if (!(isValid.confirmPassword && isValid.password)) {
      return;
    }
    try {
      const token = Linking.parse(link!).queryParams!.token?.toString()!;

      if (!token) {
        dispatch(ShowModal("errorModal.resetPassword"));
      }

      dispatch(
        changePassword({
          password: userData.password,
          token: token,
        })
      );
      navigation.navigate("SignIn");
    } catch (e) {
      dispatch(ShowModal("errorModal.resetPassword"));
      throw e;
    }
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/cloud-background.png")}
        style={styles.backgroundImage}
      >
        <ChangedPasswordModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          navigation={navigation}
        />

        <Image
          style={styles.logo}
          source={require("../assets/images/logo-b-app.png")}
        />
        <Text style={styles.title}>{t("forgetPassword.resetPassword")}</Text>
        <Image
          source={require("../assets/images/forgot-password-ICON.png")}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.fieldTitle}>{t("forgetPassword.password")}</Text>
        <InputField
          placeHolder="********"
          value={userData.password}
          onChangeText={passwordChangeHandler}
          fieldStyle={styles.inputField}
          autoComplete="email"
          secureText
        />
        {!isValid.password && (
          <Text style={styles.validationText}>
            {t("forgetPassword.validPassword")}
          </Text>
        )}
        <Text style={styles.fieldTitle}>
          {t("forgetPassword.confirmPassword")}
        </Text>
        <InputField
          placeHolder="********"
          value={userData.confirmPassword}
          onChangeText={confirmPasswordChangeHandler}
          fieldStyle={styles.inputField}
          autoComplete="email"
          secureText
        />
        {!isValid.confirmPassword && (
          <Text style={styles.validationText}>
            {t("forgetPassword.validConfirmPassword")}
          </Text>
        )}
        <RoundEdgedButton
          title={t("forgetPassword.submit")}
          backgroundColor={colors.darkGreen}
          onPress={submitResetPasswordHandler}
        />
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: "20%",
  },
  logo: {
    height: 50,
    resizeMode: "center",
    width: "100%",
    alignSelf: "center",
  },
  title: {
    ...ScreenNameText,
    marginVertical: BIG_MARGIN_VERTICAL,
  },
  image: {
    flex: 1,
    marginVertical: BIG_MARGIN_VERTICAL,
  },
  validationText: {
    color: "red",
    marginBottom: BIG_MARGIN_VERTICAL,
    textAlign: "center",
    width: "80%",
    ...NoteText,
  },
  inputField: {
    width: "80%",
    backgroundColor: colors.lightPurple,
    marginBottom: SMALL_MARGIN_VERTICAL,
  },
  fieldTitle: {
    ...NormalText,
    width: "80%",
    marginBottom: SMALL_MARGIN_VERTICAL,
  },
});
