import {
  RemindersAction,
  RemindersActionTypes,
  RemindersState,
} from "../../utilities/types/remindersTypes";

const initialState = {
  allReminders: [],
};

const userReducer = (
  state: RemindersState = initialState,
  action: RemindersAction
): RemindersState => {
  switch (action.type) {
    case RemindersActionTypes.ADD_REMINDER:
      const newReminder = action.data.addedReminder!;
      const allReminders = [...state.allReminders, newReminder];
      return {
        allReminders,
      };
    case RemindersActionTypes.UPDATE_REMINDER:
      const updatedReminder = action.data.addedReminder!;
      const updatedReminders = [...state.allReminders];
      const updatedReminderIndex = updatedReminders.findIndex(
        (reminder) => reminder.id === updatedReminder.id
      );
      if (updatedReminderIndex > -1) {
        updatedReminders[updatedReminderIndex] = {
          ...updatedReminders[updatedReminderIndex],
          ...updatedReminder,
        };
      }
      return {
        allReminders: updatedReminders,
      };
    case RemindersActionTypes.REMOVE_REMINDER:
      const removedReminder = action.data.removedId;
      const newReminders = [...state.allReminders].filter(
        (reminder) => reminder.id !== removedReminder
      );
      return {
        allReminders: newReminders,
      };
    case RemindersActionTypes.GET_ALL:
      return {
        allReminders: action.data.allReminders!,
      };
  }
  return state;
};

export default userReducer;
