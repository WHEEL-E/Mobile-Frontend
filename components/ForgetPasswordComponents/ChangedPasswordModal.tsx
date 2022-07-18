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
import colors from "../../utilities/constants/colors";
import { TitleText } from "../../utilities/types/fontTypes";
import {
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
} from "../../utilities/constants/dimentions";
import { BIG_MARGIN_VERTICAL } from "../../utilities/constants/spacing";
import { RoundEdgedButton } from "../buttons/RoundEdgedButton";
import { ChangedPasswordModalProps } from "../../utilities/forgetPasswordUtils";
import { ModalBase } from "../generalComponents/ModalBase";

const ChangedPasswordModal = (props: ChangedPasswordModalProps) => {
  const { t } = useTranslation();
  const { modalVisible, setModalVisible, navigation } = props;

  return (
    <ModalBase modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <Image
        source={require("../../assets/images/logo-b-app.png")}
        style={styles.image}
      />
      <Text style={styles.modalTitle}>{t("forgetPassword.modalText")}</Text>
      <RoundEdgedButton
        title={t("forgetPassword.backToLogin")}
        onPress={() => {
          navigation.navigate("SignIn");
          setModalVisible(false);
        }}
        backgroundColor={colors.darkGreen}
      />
    </ModalBase>
  );
};

const styles = StyleSheet.create({
  modalTitle: {
    ...TitleText,
    lineHeight: 22,
    textAlign: "center",
    marginBottom: BIG_MARGIN_VERTICAL,
  },
  image: {
    resizeMode: "center",
    width: "80%",
    height: "40%",
  },
  background: {
    width: DEVICE_WIDTH * 0.8,
    height: DEVICE_HEIGHT * 0.5,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: "10%",
  },
  modalView: {
    width: "80%",
    height: "50%",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginVertical: "50%",
    borderRadius: 50,
    overflow: "hidden",
    borderWidth: 2,
    paddingHorizontal: "5%",
    paddingBottom: "5%",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default ChangedPasswordModal;
