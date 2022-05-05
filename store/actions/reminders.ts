import { Dispatch } from "redux";
import {
  Reminder,
  RemindersActionTypes,
} from "../../utilities/types/remindersTypes";
import { ErrorModalActionTypes } from "../../utilities/types/errorModalTypes";

export const getReminders = () => {
  try {
    return async (dispatch: Dispatch<any>) => {
      const response = await fetch(
        "https://wheel--e-default-rtdb.firebaseio.com/reminders.json"
      );

      if (!response.ok) {
        dispatch({
          type: ErrorModalActionTypes.SHOW_MODAL,
          data: "errorModal.fetchingReminders",
        });
        throw new Error("can't get reminders");
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
  } catch (err) {
    throw err;
  }
};

export const removeReminder = (reminderId: string) => {
  try {
    return async (dispatch: Dispatch<any>) => {
      const response = await fetch(
        `https://wheel--e-default-rtdb.firebaseio.com/reminders/${reminderId}.json`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        dispatch({
          type: ErrorModalActionTypes.SHOW_MODAL,
          data: "errorModal.deletingReminder",
        });
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
  try {
    return async (dispatch: Dispatch<any>) => {
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

      if (!response.ok) {
        dispatch({
          type: ErrorModalActionTypes.SHOW_MODAL,
          data: "errorModal.addingReminder",
        });
        throw new Error("can't add reminder");
      }
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
  } catch (err) {
    throw err;
  }
};

export const updateReminder = (newReminder: Partial<Reminder>) => {
  return async (dispatch: Dispatch<any>) => {
    try {
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

      if (!response.ok) {
        dispatch({
          type: ErrorModalActionTypes.SHOW_MODAL,
          data: "errorModal.updatingReminder",
        });
        throw new Error("can't update reminders");
      }

      dispatch({
        type: RemindersActionTypes.UPDATE_REMINDER,
        data: {
          updatedReminder: newReminder,
        },
      });
    } catch (err) {
      throw err;
    }
  };
};
