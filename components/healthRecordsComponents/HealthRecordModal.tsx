import React from "react";
import {
  StyleSheet,
  Modal,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useTranslation } from "react-i18next";
import * as DocumentPicker from "expo-document-picker";
import { SquareButton } from "../buttons/SquareButton";
import InputField from "../inputs/InputField";
import colors from "../../utilities/constants/colors";
import { NormalText, TitleText } from "../../utilities/types/fontTypes";
import {
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
} from "../../utilities/constants/dimentions";
import {
  BIG_MARGIN_VERTICAL,
  SMALL_MARGIN_VERTICAL,
} from "../../utilities/constants/spacing";
import { HealthRecordModalProps } from "../../utilities/types/healthRecordsTypes";
import { Ionicons } from "@expo/vector-icons";

const HealthRecordModal = (props: HealthRecordModalProps) => {
  const { t } = useTranslation();
  const { modalVisible, setModalVisible } = props;
  const [record, setRecord] = React.useState({
    title: "",
    uri: "",
  });

  const editTitleHandler = (title: string) => {
    setRecord({ ...record, title: title });
  };

  const submitHandler = () => {
    return setModalVisible(false);
  };

  const uploadFileHandler = async () => {
    // TODO: add config steps for files with IOS: https://docs.expo.dev/versions/latest/sdk/document-picker/#managed-workflow
    const file = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });
    if (file.type === "cancel") {
      return;
    }
    console.log(file.uri);
    setRecord({ ...record, uri: file.uri });
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modalView}>
        <ImageBackground
          source={require("../../assets/images/Union.png")}
          style={styles.background}
        >
          <Text style={styles.modalTitle}>
            {t("healthRecords.modalHeader")}
          </Text>
          <InputField
            placeHolder={t("healthRecords.enterTitle")}
            value={record.title}
            fieldStyle={styles.titleFieldStyle}
            onChangeText={editTitleHandler}
            autoComplete="off"
          />
          <TouchableOpacity
            style={styles.uploadContainer}
            onPress={uploadFileHandler}
          >
            <Text style={styles.buttonTitleStyle}>
              {t("healthRecords.upload")}
            </Text>
            <Ionicons
              name="cloud-upload"
              size={DEVICE_HEIGHT * 0.03}
              color={colors.lightGray}
            />
          </TouchableOpacity>
          <View style={styles.buttonsList}>
            <SquareButton
              title={t("healthRecords.cancel")}
              titleStyle={styles.buttonTitleStyle}
              onPress={() => setModalVisible(false)}
              buttonStyle={styles.cancelButton}
            />
            <SquareButton
              title={t("healthRecords.add")}
              titleStyle={styles.buttonTitleStyle}
              onPress={() => submitHandler()}
              buttonStyle={styles.sendButton}
            />
          </View>
        </ImageBackground>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalTitle: {
    ...TitleText,
    lineHeight: 22,
    textAlign: "center",
    marginBottom: BIG_MARGIN_VERTICAL,
  },
  titleFieldStyle: {
    width: "80%",
    marginBottom: SMALL_MARGIN_VERTICAL,
  },
  buttonTitleStyle: {
    ...NormalText,
    color: "#fff",
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
  uploadContainer: {
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    height: "15%",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 30,
    backgroundColor: colors.darkGreen,
    paddingHorizontal: "10%",
    justifyContent: "space-around",
  },
});

export default HealthRecordModal;
