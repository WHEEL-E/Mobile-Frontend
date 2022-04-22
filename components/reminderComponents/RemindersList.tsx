import React from "react";
import { FlatList, StyleSheet } from "react-native";
import colors from "../../utilities/constants/colors";
import { Reminder } from "../../utilities/types/Reminder";
import ReminderCard from "./ReminderCard";

export const RemindersList = () => {
  const reminders: Reminder[] = [
    {
      reminderBody: "take the medicine",
      reminderTitle: "medicine",
      patientId: "1",
      supervisorId: "2",
      id: "3",
    },
    {
      reminderBody: "Visit your doctor",
      reminderTitle: "visit",
      patientId: "1",
      supervisorId: "2",
      id: "3",
    },
  ];

  return (
    <FlatList
      contentContainerStyle={styles.listContainer}
      data={reminders}
      keyExtractor={(itemData) => itemData.id}
      renderItem={(itemData) => {
        return (
          <ReminderCard
            identifier={itemData.item.id}
            sender={itemData.item.supervisorId}
            reminderTitle={itemData.item.reminderTitle}
            reminderBody={itemData.item.reminderBody}
            backgroundColor={colors.darkGreen}
            enableEdit={true}
          />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    alignItems: "center",
  },
});
