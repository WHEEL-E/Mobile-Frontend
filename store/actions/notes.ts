import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { EndPoints } from "../../utilities/constants/endpoints";
import { Note, NotesActionTypes } from "../../utilities/types/notesTypes";
import { ShowModal, isLoading, notLoading } from "./dataStatus";
import { RootState } from "../reducers/rootReducer";

export const getNotes = createAsyncThunk(
  NotesActionTypes.GET_ALL,
  async (userId: string, thunkAPI) => {
    try {
      thunkAPI.dispatch(isLoading());
      const { user } = thunkAPI.getState() as RootState;

      const response = await axios.get(`${EndPoints.Notes}/user/${userId}`, {
        headers: { token: user.userData?.token! },
      });

      if (response.data.status !== "Success") {
        thunkAPI.dispatch(ShowModal("errorModal.fetchingNotes"));
        throw new Error("can't get notes");
      }

      const resData = await response.data.data;
      const allNotes: Note[] = resData;

      thunkAPI.dispatch(notLoading());
      return allNotes;
    } catch (err) {
      thunkAPI.dispatch(ShowModal("errorModal.fetchingNotes"));
      throw err;
    }
  }
);

export const removeNote = createAsyncThunk(
  NotesActionTypes.REMOVE_NOTE,
  async (noteId: string, thunkAPI) => {
    try {
      const { user } = thunkAPI.getState() as RootState;

      const response = await axios.delete(`${EndPoints.Notes}/${noteId}`, {
        headers: { token: user.userData?.token! },
      });

      if (response.data.status !== "Success") {
        thunkAPI.dispatch(ShowModal("errorModal.deletingNote"));
        throw new Error("Can't delete note");
      }
      return noteId;
    } catch (err) {
      thunkAPI.dispatch(ShowModal("errorModal.deletingNote"));
      throw err;
    }
  }
);

export const addNote = createAsyncThunk(
  NotesActionTypes.ADD_NOTE,
  async (newNote: Note, thunkAPI) => {
    try {
      const { user } = thunkAPI.getState() as RootState;
      const response = await axios.post(`${EndPoints.Notes}`, newNote, {
        headers: { token: user.userData?.token! },
      });

      if (response.data.status !== "Success") {
        thunkAPI.dispatch(ShowModal("errorModal.addingNote"));
        throw new Error("can't add note");
      }

      const resData = await response.data.data;
      const note = { ...newNote, _id: resData._id };

      return note;
    } catch (err) {
      thunkAPI.dispatch(ShowModal("errorModal.addingNote"));
      throw err;
    }
  }
);

export const updateNote = createAsyncThunk(
  NotesActionTypes.UPDATE_NOTE,
  async (
    newNote: { id: string; title: string; description: string },
    thunkAPI
  ) => {
    try {
      const { user } = thunkAPI.getState() as RootState;
      const response = await axios.put(`${EndPoints.Notes}`, newNote, {
        headers: { token: user.userData?.token! },
      });

      if (response.data.status !== "Success") {
        thunkAPI.dispatch(ShowModal("errorModal.updatingNote"));
        throw new Error("can't update note");
      }

      return newNote;
    } catch (err) {
      thunkAPI.dispatch(ShowModal("errorModal.updatingNote"));
      throw err;
    }
  }
);
