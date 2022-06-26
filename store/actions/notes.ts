import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { EndPoints } from "../../utilities/constants/endpoints";
import { Note, NotesActionTypes } from "../../utilities/types/notesTypes";
import { ShowModal } from "./errorModal";

export const getNotes = createAsyncThunk(
  NotesActionTypes.GET_ALL,
  async (userId: string, thunkAPI) => {
    try {
      // TODO: replace static user Id with variable value
      const response = await axios.get(
        `${EndPoints.Notes}/user/6263ce0577164ec6745e3bd7`
      );

      if (response.data.status !== "Success") {
        thunkAPI.dispatch(ShowModal("errorModal.fetchingNotes"));
        throw new Error("can't get notes");
      }

      const allNotes: Note[] = await response.data.data;

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
      console.log(noteId);

      const response = await axios.delete(`${EndPoints.Notes}/${noteId}`);
      console.log(response, noteId);
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
    const sentData = { ...newNote, user_id: "6263ce0577164ec6745e3bd7" };
    try {
      const response = await axios.post(`${EndPoints.Notes}`, sentData);

      if (response.data.status !== "Success") {
        thunkAPI.dispatch(ShowModal("errorModal.addingNote"));
        throw new Error("can't add note");
      }

      const resData = await response.data.data;
      const note = { ...newNote, id: resData.id };

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
    newNote: {
      id: string;
      title: string;
      description: string;
    },
    thunkAPI
  ) => {
    try {
      const response = await axios.put(
        `${EndPoints.Notes}/${newNote.id}`,
        newNote
      );

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
