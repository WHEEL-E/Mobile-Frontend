import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import colors from "../../utilities/constants/colors";
import ReminderCard from "./ReminderCard";
import {
  Reminder,
  RemindersListProps,
} from "../../utilities/types/remindersTypes";

export const RemindersList = (props: RemindersListProps) => {
  const { enableEdit, receiver } = props;

  const reminders: Reminder[] = useSelector(
    (state: RootState) => state.reminders.allReminders
  );

  return (
    <FlatList
      contentContainerStyle={styles.listContainer}
      data={reminders}
      keyExtractor={(itemData) => itemData._id}
      renderItem={(itemData) => {
        return (
          <ReminderCard
            identifier={itemData.item._id}
            sender={enableEdit ? undefined : itemData.item.supervisorName}
            receiver={receiver}
            title={itemData.item.title}
            due_date={new Date(itemData.item.due_date)}
            description={itemData.item.description}
            backgroundColor={
              itemData.index % 2 == 0 ? colors.darkGreen : colors.lightPurple
            }
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
