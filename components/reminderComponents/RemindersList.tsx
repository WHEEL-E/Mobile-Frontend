import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getReminders } from "../../store/actions/reminders";
import { RootState } from "../../store/reducers/rootReducer";
import colors from "../../utilities/constants/colors";
import {
  Reminder,
  RemindersListProps,
} from "../../utilities/types/remindersTypes";
import ReminderCard from "./ReminderCard";

export const RemindersList = (props: RemindersListProps) => {
  const dispatch = useDispatch<any>();
  const { enableEdit, receiver } = props;

  const reminders: Reminder[] = useSelector(
    (state: RootState) => state.reminders.allReminders
  );

  const userId = useSelector(
    (state: RootState) => state.user.userData?.mainData.userId
  )!;

  React.useEffect(() => {
    dispatch(getReminders(userId));
  }, [dispatch, getReminders]);

  return (
    <FlatList
      contentContainerStyle={styles.listContainer}
      data={reminders}
      keyExtractor={(itemData) => itemData.id}
      renderItem={(itemData) => {
        return (
          <ReminderCard
            identifier={itemData.item.id}
            sender={enableEdit ? undefined : itemData.item.supervisorName}
            receiver={receiver}
            reminderTitle={itemData.item.reminderTitle}
            reminderBody={itemData.item.reminderBody}
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
