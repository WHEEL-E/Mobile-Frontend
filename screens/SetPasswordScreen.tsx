import React from "react";
import { StyleSheet, Text } from "react-native";
import { SetPasswordProps } from "../utilities/types/navigationTypes/getStartedNavigationTypes";
import * as Linking from "expo-linking";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { NormalText, NoteText } from "../utilities/types/fontTypes";
import {
  validatePassword,
  validateMatching,
} from "../utilities/dataValidators";
import colors from "../utilities/constants/colors";
import {
  BIG_MARGIN_VERTICAL,
  SMALL_MARGIN_VERTICAL,
} from "../utilities/constants/spacing";
import { RoundEdgedButton } from "../components/buttons/RoundEdgedButton";
import InputField from "../components/inputs/InputField";
import ChangedPasswordModal from "../components/ForgetPasswordComponents/ChangedPasswordModal";
import { BaseScreen } from "../components/ForgetPasswordComponents/BaseScreen";
import { submitResetPasswordHandler } from "../utilities/forgetPasswordUtils";

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

  return (
    <BaseScreen title={t("forgetPassword.resetPassword")}>
      <ChangedPasswordModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        navigation={navigation}
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
        onPress={() =>
          submitResetPasswordHandler(
            dispatch,
            link!,
            setModalVisible,
            isValid,
            userData.password
          )
        }
      />
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
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
