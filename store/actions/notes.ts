import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { EndPoints } from "../../utilities/constants/endpoints";
import { Note, NotesActionTypes } from "../../utilities/types/notesTypes";
import { ShowModal, isLoading, notLoading } from "./dataStatus";

export const getNotes = createAsyncThunk(
  NotesActionTypes.GET_ALL,
  async (userId: string, thunkAPI) => {
    try {
      thunkAPI.dispatch(isLoading());

      // TODO: replace static user Id with variable value
      const response = await axios.get(
        `${EndPoints.Notes}/user/6263ce0577164ec6745e3bd7`
      );

      if (response.data.status === "Success") {
        thunkAPI.dispatch(ShowModal("errorModal.fetchingNotes"));
        throw new Error("can't get notes");
      }

      const resData = await response.data.data.json();
      const allNotes: Note[] = [];
      for (const data in resData) {
        allNotes.push({
          id: data,
          user_id: resData[data].user_id,
          title: resData[data].title,
          description: resData[data].description,
        });
      }

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
      const response = await axios.delete(`${EndPoints.Notes}/${noteId}`, {
        method: "DELETE",
      });

      if (response.data.status === "Success") {
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
      const response = await axios.post(`${EndPoints.Notes}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      });

      if (response.data.status === "Success") {
        thunkAPI.dispatch(ShowModal("errorModal.addingNote"));
        throw new Error("can't add note");
      }

      const resData = await response.data.json();
      const note = { ...newNote, id: resData.name };

      return note;
    } catch (err) {
      thunkAPI.dispatch(ShowModal("errorModal.addingNote"));
      throw err;
    }
  }
);

export const updateNote = createAsyncThunk(
  NotesActionTypes.UPDATE_NOTE,
  async (newNote: Partial<Note>, thunkAPI) => {
    try {
      const response = await axios.patch(`${EndPoints.Notes}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      });

      if (response.status % 100 !== 2) {
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
