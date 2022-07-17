import React from "react";
import {
  StyleSheet,
  Modal,
  Text,
  View,
  ImageBackground,
  Image,
} from "react-native";
import { useTranslation } from "react-i18next";
import { SquareButton } from "../buttons/SquareButton";
import colors from "../../utilities/constants/colors";
import {
  NormalText,
  NoteText,
  TitleText,
} from "../../utilities/types/fontTypes";
import {
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
} from "../../utilities/constants/dimentions";
import { useDispatch } from "react-redux";
import { signOut } from "../../store/actions/user";
import { SignOutModalProps } from "../../utilities/types/signOutTypes";
import { ModalBase } from "../generalComponents/ModalBase";

export const SignOutModal = (props: SignOutModalProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<any>();
  const { modalVisible, setModalVisible } = props;

  const submitHandler = () => {
    dispatch(signOut());
  };

  const cancelHandler = () => {
    setModalVisible(false);
  };

  return (
    <ModalBase modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <Image
        source={require("../../assets/images/logo-b-app.png")}
        style={styles.logo}
      />
      <Text style={styles.confirmText}>{t("signOut.confirmText")}</Text>
      <Text style={styles.noteText}>{t("signOut.noteText")}</Text>
      <View style={styles.buttonsList}>
        <SquareButton
          title={t("signOut.cancel")}
          titleStyle={styles.buttonTitle}
          onPress={cancelHandler}
          buttonStyle={styles.cancelButton}
        />
        <SquareButton
          title={t("signOut.confirm")}
          titleStyle={styles.buttonTitle}
          onPress={submitHandler}
          buttonStyle={styles.confirmButton}
        />
      </View>
    </ModalBase>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: DEVICE_HEIGHT * 0.1,
    resizeMode: "center",
    width: "80%",
  },
  confirmText: {
    ...TitleText,
    textAlign: "center",
  },
  noteText: {
    ...NoteText,
    marginTop: "10%",
  },
  buttonsList: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 25,
  },
  buttonTitle: {
    ...NormalText,
    color: "white",
  },
  cancelButton: {
    backgroundColor: colors.darkPink,
    flex: 1,
    height: DEVICE_HEIGHT * 0.06,
  },
  confirmButton: {
    backgroundColor: colors.lightGreen,
    flex: 1,
    height: DEVICE_HEIGHT * 0.06,
  },
});
