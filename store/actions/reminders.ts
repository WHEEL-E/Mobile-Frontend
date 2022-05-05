import { Dispatch } from "redux";
import {
  Reminder,
  RemindersActionTypes,
  RemindersActionData,
} from "../../utilities/types/remindersTypes";

export const getReminders = () => {
  return async (
    dispatch: Dispatch<{
      type: RemindersActionTypes;
      data: RemindersActionData;
    }>
  ) => {
    const response = await fetch(
      "https://wheel--e-default-rtdb.firebaseio.com/reminders.json"
    );

    if (!response.ok) {
    }
    const resData = await response.json();
    const allReminders: Reminder[] = [];
    for (const data in resData) {
      allReminders.push({
        id: data,
        supervisorId: resData[data].supervisorId,
        supervisorName: resData[data].supervisorName,
        patientId: resData[data].patientId,
        reminderBody: resData[data].reminderBody,
        reminderTitle: resData[data].reminderTitle,
      });
    }

    dispatch({
      type: RemindersActionTypes.GET_ALL,
      data: { allReminders: allReminders },
    });
  };
};

export const removeReminder = (reminderId: string) => {
  try {
    return async (
      dispatch: Dispatch<{
        type: RemindersActionTypes;
        data: RemindersActionData;
      }>
    ) => {
      const response = await fetch(
        `https://wheel--e-default-rtdb.firebaseio.com/reminders/${reminderId}.json`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        throw new Error("Can't delete reminder");
      }

      dispatch({
        type: RemindersActionTypes.REMOVE_REMINDER,
        data: { removedId: reminderId },
      });
    };
  } catch (err) {
    throw err;
  }
};

export const addReminder = (newReminder: Reminder) => {
  return async (
    dispatch: Dispatch<{
      type: RemindersActionTypes;
      data: RemindersActionData;
    }>
  ) => {
    const response = await fetch(
      "https://wheel--e-default-rtdb.firebaseio.com/reminders.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReminder),
      }
    );

    const resData = await response.json();

    dispatch({
      type: RemindersActionTypes.ADD_REMINDER,
      data: {
        addedReminder: {
          ...newReminder,
          id: resData.name,
        },
      },
    });
  };
};

export const updateReminder = (newReminder: Partial<Reminder>) => {
  return async (
    dispatch: Dispatch<{
      type: RemindersActionTypes;
      data: RemindersActionData;
    }>
  ) => {
    const response = await fetch(
      `https://wheel--e-default-rtdb.firebaseio.com/reminders/${newReminder.id}.json`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReminder),
      }
    );

    const resData = await response.json();

    dispatch({
      type: RemindersActionTypes.UPDATE_REMINDER,
      data: {
        updatedReminder: newReminder,
      },
    });
  };
};
