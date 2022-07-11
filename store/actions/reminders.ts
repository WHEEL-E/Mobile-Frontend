import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { EndPoints } from "../../utilities/constants/endpoints";
import { ShowModal, isLoading, notLoading } from "./dataStatus";
import { RootState } from "../reducers/rootReducer";
import {
  Reminder,
  RemindersActionTypes,
} from "../../utilities/types/remindersTypes";
import { UserTypes } from "../../utilities/types/userTypes";

export const getReminders = createAsyncThunk(
  RemindersActionTypes.GET_ALL,
  async (userId: string, thunkAPI) => {
    try {
      thunkAPI.dispatch(isLoading());
      const { user } = thunkAPI.getState() as RootState;

      let type = "supervisors";
      if (user.userData?.userType === UserTypes.PATIENT) {
        type = "patients";
      }

      const response = await axios.get(
        `${EndPoints.Reminders}/${type}/${userId}`,
        {
          headers: { token: user.userData?.token! },
        }
      );

      if (response.data.status !== "Success") {
        throw new Error("can't get reminders");
      }

      const resData = await response.data.data;
      console.log(resData);
      const allNotes: Reminder[] = resData;

      thunkAPI.dispatch(notLoading());
      return allNotes;
    } catch (err) {
      thunkAPI.dispatch(ShowModal("errorModal.fetchingReminders"));
      throw err;
    }
  }
);

export const removeReminder = createAsyncThunk(
  RemindersActionTypes.REMOVE_REMINDER,
  async (reminder: string, thunkAPI) => {
    try {
      const { user } = thunkAPI.getState() as RootState;

      const response = await axios.delete(
        `${EndPoints.Reminders}/${reminder}`,
        {
          headers: { token: user.userData?.token! },
        }
      );

      if (response.data.status !== "Success") {
        throw new Error("Can't delete reminder");
      }
      return reminder;
    } catch (err) {
      thunkAPI.dispatch(ShowModal("errorModal.deletingReminder"));
      throw err;
    }
  }
);

export const addReminder = createAsyncThunk(
  RemindersActionTypes.ADD_REMINDER,
  async (newReminder: Reminder, thunkAPI) => {
    try {
      const { user } = thunkAPI.getState() as RootState;
      const response = await axios.post(
        `${EndPoints.Reminders}`,
        { ...newReminder, due_date: new Date() },
        {
          headers: { token: user.userData?.token! },
        }
      );

      if (response.data.status !== "Success") {
        throw new Error("can't add note");
      }

      const resData = await response.data.data;
      const note = { ...newReminder, _id: resData._id };

      return note;
    } catch (err) {
      thunkAPI.dispatch(ShowModal("errorModal.addingReminder"));
      throw err;
    }
  }
);

export const updateReminder = createAsyncThunk(
  RemindersActionTypes.UPDATE_REMINDER,
  async (newReminder: Partial<Reminder>, thunkAPI) => {
    try {
      const { _id, title, description } = newReminder;
      const { user } = thunkAPI.getState() as RootState;
      const response = await axios.put(
        `${EndPoints.Reminders}/${_id}`,
        { title, description },
        {
          headers: { token: user.userData?.token! },
        }
      );

      if (response.data.status !== "Success") {
        thunkAPI.dispatch(ShowModal("errorModal.updatingNote"));
        throw new Error("can't update note");
      }

      return newReminder;
    } catch (err) {
      thunkAPI.dispatch(ShowModal("errorModal.updatingNote"));
      throw err;
    }
  }
);
