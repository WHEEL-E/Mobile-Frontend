import React from "react";
import { StyleSheet, Modal, Text, View, ImageBackground } from "react-native";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../utilities/constants/colors";
import fonts from "../../utilities/constants/fonts";
import { SquareButton } from "../buttons/SquareButton";
import { NormalText } from "../../utilities/types/fontTypes";
import { useDispatch } from "react-redux";
import { RemoveUserModalProps } from "../../utilities/types/associatedUsersTypes";
import {
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
} from "../../utilities/constants/dimentions";

export const RemoveUserModal = (props: RemoveUserModalProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<any>();
  const { modalVisible, setModalVisible, name } = props;

  const removeHandler = () => {};

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <ImageBackground
            source={require("../../assets/images/Union.png")}
            style={styles.background}
          >
            <Text style={styles.title}>{t("associatedUsers.removeUser")}</Text>
            <Ionicons
              name="person-remove"
              size={DEVICE_WIDTH * 0.25}
              color={colors.darkBlue}
            />
            <Text style={styles.mainText}>
              {t("associatedUsers.confirmremoveUser", { name: name })}
            </Text>
            <View style={styles.buttonsList}>
              <SquareButton
                title={t("associatedUsers.cancel")}
                titleStyle={styles.buttonTitleStyle}
                onPress={() => setModalVisible(false)}
                buttonStyle={styles.cancelButton}
              />
              <SquareButton
                title={t("associatedUsers.remove")}
                titleStyle={styles.buttonTitleStyle}
                onPress={removeHandler}
                buttonStyle={styles.sendButton}
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
  image: {
    width: DEVICE_WIDTH * 0.8,
    height: DEVICE_HEIGHT * 0.5,
    alignItems: "center",
    justifyContent: "center",
    padding: "10%",
  },
  background: {
    width: DEVICE_WIDTH * 0.8,
    height: DEVICE_HEIGHT * 0.5,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "7%",
    paddingVertical: "20%",
  },
  title: {
    flex: 1,
    color: "black",
    fontFamily: fonts.CairoBold,
    fontSize: DEVICE_WIDTH * 0.08,
    textAlign: "center",
  },
  mainText: {
    color: colors.darkBlue,
    fontFamily: fonts.CairoBold,
    fontSize: DEVICE_WIDTH * 0.04,
    textAlign: "center",
    lineHeight: DEVICE_WIDTH * 0.06,
  },

  cancelButton: {
    backgroundColor: colors.darkPink,
    flex: 1,
    height: 50,
  },
  sendButton: {
    backgroundColor: colors.lightGreen,
    flex: 1,
    height: 50,
  },
  buttonsList: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 25,
    paddingHorizontal: "10%",
  },
  buttonTitleStyle: {
    ...NormalText,
    color: "#fff",
  },
});
