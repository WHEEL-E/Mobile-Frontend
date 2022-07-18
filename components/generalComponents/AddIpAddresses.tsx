import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { SquareButton } from "../buttons/SquareButton";
import InputField from "../inputs/InputField";
import colors from "../../utilities/constants/colors";
import { NormalText, TitleText } from "../../utilities/types/fontTypes";
import { RootState } from "../../store/reducers/rootReducer";
import { DEVICE_HEIGHT } from "../../utilities/constants/dimentions";
import { SMALL_MARGIN_VERTICAL } from "../../utilities/constants/spacing";
import { ModalBase } from "../generalComponents/ModalBase";
import { hideIpModal, setIpData } from "../../store/actions/addresses";

export const AddIpAddresses = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch<any>();

  const modalVisible = useSelector(
    (state: RootState) => state.addressesReducer.isModalVisible
  );

  const [ip, setIp] = React.useState("");

  const editHandler = (title: string) => {
    setIp(title);
  };

  const submitHandler = () => {
    dispatch(setIpData(ip));
    dispatch(hideIpModal());
  };

  return (
    <ModalBase setModalVisible={() => {}} modalVisible={modalVisible}>
      <Text style={styles.modalTitle}>Add your Ip addresses</Text>
      <InputField
        placeHolder="Backend"
        value={ip}
        onChangeText={editHandler}
        fieldStyle={styles.titleFieldStyle}
        autoComplete="off"
      />
      <View style={styles.buttonsList}>
        <SquareButton
          title={t("notesScreen.cancel")}
          titleStyle={styles.buttonTitleStyle}
          onPress={() => dispatch(hideIpModal())}
          buttonStyle={styles.cancelButton}
        />
        <SquareButton
          title={t("notesScreen.submit")}
          titleStyle={styles.buttonTitleStyle}
          onPress={() => submitHandler()}
          buttonStyle={styles.sendButton}
        />
      </View>
    </ModalBase>
  );
};

const styles = StyleSheet.create({
  descriptionFieldStyle: {
    width: "100%",
    backgroundColor: "white",
    height: DEVICE_HEIGHT * 0.15,
    marginBottom: SMALL_MARGIN_VERTICAL,
  },
  titleFieldStyle: {
    width: "100%",
    backgroundColor: "white",
    marginBottom: SMALL_MARGIN_VERTICAL,
  },
  buttonTitleStyle: {
    ...NormalText,
    color: "white",
  },
  modalTitle: {
    ...TitleText,
    lineHeight: 22,
    textAlign: "center",
    marginBottom: "5%",
  },
  cancelButton: {
    backgroundColor: colors.darkPink,
    width: "30%",
    height: DEVICE_HEIGHT * 0.06,
  },
  sendButton: {
    backgroundColor: colors.lightGreen,
    width: "30%",
    height: DEVICE_HEIGHT * 0.06,
  },
  buttonsList: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "9%",
  },
});
