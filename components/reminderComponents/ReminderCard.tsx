import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../../utilities/constants/colors";
import EditReminderModal from "./EditReminderModal";

interface IReminderCardProps {
  identifier: string;
  sender: string;
  reminderTitle: string;
  reminderBody: string;
  backgroundColor: string;
  onDelete: () => void;
  onSave: (
    reminderId: string,
    newReminderTitle: string,
    newReminderBody: string
  ) => void;
  enableEdit?: boolean;
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
}

const ReminderCard = (props: IReminderCardProps) => {
  const {
    identifier,
    sender,
    reminderTitle,
    reminderBody,
    backgroundColor,
    onDelete,
    enableEdit,
    onSave,
    modalVisible,
    setModalVisible,
  } = props;

  const [reminderTitleEdit, setReminderTitle] = useState(reminderTitle);
  const [reminderBodyEdit, setReminderBody] = useState(reminderBody);

  const editTitleHandler = (title: string) => {
    setReminderTitle(title);
  };

  const editBodyHandler = (body: string) => {
    setReminderBody(body);
  };

  return (
    <View style={{ ...styles.container, backgroundColor }}>
      <EditReminderModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        identifier={identifier}
        reminderTitleEdit={reminderTitleEdit}
        editTitleHandler={editTitleHandler}
        reminderBodyEdit={reminderBodyEdit}
        editBodyHandler={editBodyHandler}
        onSave={onSave}
      />
      <TouchableOpacity onPress={onDelete} style={styles.close}>
        <Ionicons name="ios-close" color="#fff" size={25} />
      </TouchableOpacity>
      <Text
        style={
          backgroundColor === colors.darkGreen
            ? styles.whiteTitle
            : styles.title
        }
      >
        From {sender}
      </Text>
      <Text
        style={
          backgroundColor === colors.darkGreen
            ? styles.whiteTitle
            : styles.title
        }
      >
        {reminderTitle}
      </Text>
      <Text
        style={
          backgroundColor === colors.darkGreen ? styles.whiteBody : styles.body
        }
      >
        {reminderBody}
      </Text>
      {enableEdit && (
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.edit}
        >
          <Ionicons name="ios-create" color="#fff" size={30} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ReminderCard;

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    flexDirection: "column",
    justifyContent: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    marginVertical: 10,
    padding: 10,
    overflow: "hidden",
    width: 320,
  },
  title: { fontFamily: "Cairo-Bold", fontSize: 18, color: colors.darkGreen },
  whiteTitle: { fontFamily: "Cairo-Bold", fontSize: 18, color: "#fff" },
  body: { fontFamily: "Cairo-Regular", fontSize: 15, color: colors.darkGreen },
  whiteBody: { fontFamily: "Cairo-Regular", fontSize: 15, color: "#fff" },
  close: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  edit: {
    marginVertical: 5,
  },
});
