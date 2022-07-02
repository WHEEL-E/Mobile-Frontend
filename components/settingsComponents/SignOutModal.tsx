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
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <ImageBackground
            source={require("../../assets/images/Union.png")}
            style={styles.background}
          >
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
          </ImageBackground>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 50,
    overflow: "hidden",
    borderWidth: 2,
    paddingHorizontal: "5%",
    paddingBottom: "5%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  background: {
    width: DEVICE_WIDTH * 0.8,
    height: DEVICE_HEIGHT * 0.5,
    alignItems: "center",
    justifyContent: "center",
    padding: "10%",
  },
  logo: {
    flex: 1,
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
    color: "#fff",
  },
  cancelButton: {
    backgroundColor: colors.darkPink,
    flex: 1,
    height: 50,
  },
  confirmButton: {
    backgroundColor: colors.lightGreen,
    flex: 1,
    height: 50,
  },
});
