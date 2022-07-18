import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../../utilities/constants/colors";
import fonts from "../../utilities/constants/fonts";
import ReminderModal from "./ReminderModal";
import { ReminderCardProps } from "../../utilities/types/remindersTypes";
import { DEVICE_WIDTH } from "../../utilities/constants/dimentions";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { removeReminder } from "../../store/actions/reminders";
import { ImportantText, NormalText } from "../../utilities/types/fontTypes";

const ReminderCard = (props: ReminderCardProps) => {
  const {
    identifier,
    sender,
    receiver,
    title,
    description,
    due_date,
    backgroundColor,
    enableEdit,
  } = props;

  const [modalVisible, setModalVisible] = useState(false);

  const { t } = useTranslation();
  const dispatch = useDispatch<any>();

  const deleteReminderHandler = () => {
    dispatch(removeReminder(identifier));
  };

  const textColor =
    backgroundColor === colors.darkGreen ? "white" : colors.darkGreen;

  return (
    <View style={{ ...styles.container, backgroundColor }}>
      <ReminderModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        identifier={identifier}
        reminderData={{ title, description, due_date }}
        patientName={receiver!}
      />
      <TouchableOpacity onPress={deleteReminderHandler} style={styles.close}>
        <Ionicons name="ios-close" color={textColor} size={25} />
      </TouchableOpacity>
      {sender && (
        <Text style={{ ...styles.title, color: textColor }}>
          {t("remindersScreen.from")} {sender}
        </Text>
      )}
      {receiver && (
        <Text style={{ ...styles.title, color: textColor }}>
          {t("remindersScreen.to")} {receiver}
        </Text>
      )}
      <Text style={{ ...styles.title, color: textColor }}>{title}</Text>
      <Text style={{ ...styles.body, color: textColor }}>{description}</Text>
      {enableEdit && (
        <Ionicons
          name="ios-create"
          color={textColor}
          size={30}
          style={styles.edit}
          onPress={() => setModalVisible(true)}
        />
      )}
    </View>
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
    borderRadius: DEVICE_WIDTH * 0.04,
    backgroundColor: "white",
    marginVertical: "5%",
    padding: "5%",
    overflow: "hidden",
    width: DEVICE_WIDTH * 0.8,
  },
  title: {
    ...ImportantText,
  },
  body: {
    ...NormalText,
  },
  close: {
    alignItems: "flex-end",
  },
  edit: {
    marginVertical: "2%",
  },
});

export default ReminderCard;
