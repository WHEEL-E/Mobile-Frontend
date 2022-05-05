import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import colors from "../../utilities/constants/colors";
import { Reminder } from "../../utilities/types/remindersTypes";
import ReminderCard from "./ReminderCard";

interface RemindersListProps {
  enableEdit: boolean;
}

export const RemindersList = (props: RemindersListProps) => {
  const reminders: Reminder[] = useSelector(
    (state: RootState) => state.reminders.allReminders
  );
  const { enableEdit } = props;

  return (
    <FlatList
      contentContainerStyle={styles.listContainer}
      data={reminders}
      keyExtractor={(itemData) => itemData.id}
      renderItem={(itemData) => {
        return (
          <ReminderCard
            identifier={itemData.item.id}
            sender={itemData.item.supervisorName}
            reminderTitle={itemData.item.reminderTitle}
            reminderBody={itemData.item.reminderBody}
            backgroundColor={colors.darkGreen}
            enableEdit={enableEdit}
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
