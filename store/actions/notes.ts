import { createAsyncThunk } from "@reduxjs/toolkit";
import { EndPoints } from "../../utilities/constants/endpoints";
import { Note, NotesActionTypes } from "../../utilities/types/notesTypes";
import { ErrorModalActionTypes } from "../actions/errorModal";

export const getNotes = createAsyncThunk(
  NotesActionTypes.GET_ALL,
  async (userId: string, thunkAPI) => {
    try {
      const response = await fetch(`${EndPoints.Notes}`, {
        body: JSON.stringify({ user_id: userId }),
      });

      if (!response.ok) {
        thunkAPI.dispatch({
          type: ErrorModalActionTypes.SHOW_MODAL,
          data: "errorModal.fetchingNotes",
        });
        throw new Error("can't get notes");
      }

      const resData = await response.json();
      const allNotes: Note[] = [];
      for (const data in resData) {
        allNotes.push({
          id: data,
          user_id: resData[data].user_id,
          title: resData[data].title,
          description: resData[data].description,
        });
      }

      return allNotes;
    } catch (err) {
      thunkAPI.dispatch({
        type: ErrorModalActionTypes.SHOW_MODAL,
        data: "errorModal.fetchingNotes",
      });
      throw err;
    }
  }
);

export const removeNote = createAsyncThunk(
  NotesActionTypes.REMOVE_NOTE,
  async (noteId: string, thunkAPI) => {
    try {
      const response = await fetch(`${EndPoints.Notes}/${noteId}`, {
        method: "DELETE",
        body: JSON.stringify({ id: noteId }),
      });

      if (!response.ok) {
        thunkAPI.dispatch({
          type: ErrorModalActionTypes.SHOW_MODAL,
          data: "errorModal.deletingNote",
        });
        throw new Error("Can't delete note");
      }
      return noteId;
    } catch (err) {
      thunkAPI.dispatch({
        type: ErrorModalActionTypes.SHOW_MODAL,
        data: "errorModal.deletingNote",
      });
      throw err;
    }
  }
);

export const addNote = createAsyncThunk(
  NotesActionTypes.ADD_NOTE,
  async (newNote: Note, thunkAPI) => {
    try {
      const response = await fetch(`${EndPoints.Notes}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      });

      if (!response.ok) {
        thunkAPI.dispatch({
          type: ErrorModalActionTypes.SHOW_MODAL,
          data: "errorModal.addingNote",
        });
        throw new Error("can't add note");
      }

      const resData = await response.json();
      const note = { ...newNote, id: resData.name };

      return note;
    } catch (err) {
      thunkAPI.dispatch({
        type: ErrorModalActionTypes.SHOW_MODAL,
        data: "errorModal.addingNote",
      });
      throw err;
    }
  }
);

export const updateNote = createAsyncThunk(
  NotesActionTypes.UPDATE_NOTE,
  async (newNote: Partial<Note>, thunkAPI) => {
    try {
      const response = await fetch(`${EndPoints.Notes}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      });

      if (!response.ok) {
        thunkAPI.dispatch({
          type: ErrorModalActionTypes.SHOW_MODAL,
          data: "errorModal.updatingNote",
        });
        throw new Error("can't update note");
      }

      return newNote;
    } catch (err) {
      thunkAPI.dispatch({
        type: ErrorModalActionTypes.SHOW_MODAL,
        data: "errorModal.updatingNote",
      });
      throw err;
    }
  }
);
