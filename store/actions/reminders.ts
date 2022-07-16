import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { EndPoints } from "../../utilities/constants/endpoints";
import { ShowModal, isLoading, notLoading } from "./dataStatus";
import { RootState } from "../reducers/rootReducer";
import {
  Reminder,
  RemindersActionTypes,
  SentReminder,
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

      const allReminders: Reminder[] = resData;

      thunkAPI.dispatch(notLoading());
      return allReminders;
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
  async (newReminder: SentReminder, thunkAPI) => {
    try {
      const { user } = thunkAPI.getState() as RootState;
      const sentData = { ...newReminder.MainData, due_date: new Date() };
      const response = await axios.post(`${EndPoints.Reminders}`, sentData, {
        headers: { token: user.userData?.token! },
      });

      if (response.data.status !== "Success") {
        throw new Error("can't add note");
      }

      const resData: {
        __v: 0;
        _id: string;
        description: string;
        due_date: Date;
        patient_id: string;
        supervisor_id: string;
        title: string;
        updated_at: Date;
      } = await response.data.data;

      const reminder: Reminder = {
        reminder: resData,
        supervisorName: user.userData?.userMainData.name!,
        patientName: newReminder.PatientName,
      };
      console.log(resData);

      return reminder;
    } catch (err) {
      thunkAPI.dispatch(ShowModal("errorModal.addingReminder"));
      throw err;
    }
  }
);

export const updateReminder = createAsyncThunk(
  RemindersActionTypes.UPDATE_REMINDER,
  async (
    newReminder: {
      reminder: { _id: string; title: string; description: string };
      patientName: string;
    },
    thunkAPI
  ) => {
    try {
      const {
        reminder: { _id, title, description },
        patientName,
      } = newReminder;

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

      const resData = response.data.data;
      const updatedReminder: Reminder = {
        reminder: resData,
        supervisorName: user.userData?.userMainData.name!,
        patientName: patientName,
      };
      return updatedReminder;
    } catch (err) {
      thunkAPI.dispatch(ShowModal("errorModal.updatingNote"));
      throw err;
    }
  }
);
