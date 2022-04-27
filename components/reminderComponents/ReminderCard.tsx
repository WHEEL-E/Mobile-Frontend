import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../../utilities/constants/colors";
import fonts from "../../utilities/constants/fonts";
import { ReminderCardProps } from "../../utilities/types/remindersTypes";
import ReminderModal from "./ReminderModal";
import { DEVICE_WIDTH } from "../../utilities/constants/dimentions";
import { useTranslation } from "react-i18next";

const ReminderCard = (props: ReminderCardProps) => {
  const {
    identifier,
    sender,
    reminderTitle,
    reminderBody,
    backgroundColor,
    enableEdit,
  } = props;

  const [modalVisible, setModalVisible] = useState(false);

  const { t } = useTranslation();

  const deleteReminderHandler = () => {
    //dispatch the DELETE request
  };

  const textColor =
    backgroundColor === colors.darkGreen ? "white" : colors.darkGreen;

  return (
    <View style={{ ...styles.container, backgroundColor }}>
      <ReminderModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        identifier={identifier}
      />
      <TouchableOpacity onPress={deleteReminderHandler} style={styles.close}>
        <Ionicons name="ios-close" color={textColor} size={25} />
      </TouchableOpacity>
      <Text style={{ ...styles.title, color: textColor }}>
        {t("remindersScreen.from")} {sender}
      </Text>
      <Text style={{ ...styles.title, color: textColor }}>{reminderTitle}</Text>
      <Text style={{ ...styles.body, color: textColor }}>{reminderBody}</Text>
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
    borderRadius: 10,
    backgroundColor: "white",
    marginVertical: 10,
    padding: 10,
    overflow: "hidden",
    width: DEVICE_WIDTH * 0.8,
  },
  title: {
    fontFamily: fonts.CairoBold,
    fontSize: 18,
  },
  body: {
    fontFamily: fonts.CairoRegular,
    fontSize: 15,
  },
  close: {
    alignItems: "flex-end",
  },
  edit: {
    marginVertical: 5,
  },
});

export default ReminderCard;
