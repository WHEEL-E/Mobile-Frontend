import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import * as FileSystem from "expo-file-system";
import * as IntentLauncher from "expo-intent-launcher";
import colors from "../../utilities/constants/colors";
import {
  PADDING_VERTICAL,
  SMALL_MARGIN_VERTICAL,
} from "../../utilities/constants/spacing";
import { DEVICE_WIDTH } from "../../utilities/constants/dimentions";
import { ImportantText, NoteText } from "../../utilities/types/fontTypes";
import { useTranslation } from "react-i18next";
import { HealthRecordProps } from "../../utilities/types/healthRecordsTypes";
import { ShowModal } from "../../store/actions/errorModal";

const HealthRecordCard = (props: HealthRecordProps) => {
  const { id, title, fileUri, backgroundColor, date } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch<any>();

  const deleteRecordHandler = () => {};

  const textColor =
    backgroundColor === colors.darkGreen ? "white" : colors.darkGreen;
  const dateText = t("healthRecords.dateText") + "\n" + date.toDateString();

  const fileExplorer = async () => {
    // TODO: add functionality for IOS (probably will need to eject)
    try {
      const uri = await FileSystem.getContentUriAsync(fileUri);
      await IntentLauncher.startActivityAsync("android.intent.action.VIEW", {
        data: uri,
        flags: 1,
        type: "application/pdf",
      });
    } catch (e) {
      dispatch(ShowModal("errorModal.openfile"));
      throw e;
    }
  };

  return (
    <TouchableOpacity
      style={{ ...styles.container, backgroundColor }}
      onPress={fileExplorer}
    >
      <TouchableOpacity onPress={deleteRecordHandler} style={styles.close}>
        <Ionicons name="ios-close" color={textColor} size={25} />
      </TouchableOpacity>
      <Text style={{ ...styles.title, color: textColor }}>{title}</Text>
      <Text style={{ ...NoteText, color: textColor }}>{dateText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    justifyContent: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    margin: SMALL_MARGIN_VERTICAL,
    padding: PADDING_VERTICAL,
    overflow: "hidden",
    width: DEVICE_WIDTH * 0.4,
  },
  close: {
    alignItems: "flex-end",
  },
  title: {
    ...ImportantText,
    textAlign: "center",
    paddingVertical: "7%",
  },
});

export default HealthRecordCard;
