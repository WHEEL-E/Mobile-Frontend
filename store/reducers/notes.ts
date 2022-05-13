import { NotesState } from "../../utilities/types/notesTypes";
import { createReducer } from "@reduxjs/toolkit";
import { addNote, getNotes, removeNote, updateNote } from "../actions/notes";

const initialState: NotesState = {
  allNotes: [],
};

const notesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getNotes.fulfilled, (state, action) => {
      return { allNotes: action.payload };
    })
    .addCase(addNote.fulfilled, (state, action) => {
      const newNote = action.payload;

      const allNotes = [...state.allNotes, newNote];
      return {
        allNotes,
      };
    })
    .addCase(removeNote.fulfilled, (state, action) => {
      const removedNote = action.payload;
      const newNotes = [...state.allNotes].filter(
        (note) => note.id !== removedNote
      );
      return {
        allNotes: newNotes,
      };
    })
    .addCase(updateNote.fulfilled, (state, action) => {
      const updatedNote = action.payload;
      const updatedNotes = [...state.allNotes];
      const updatedNoteIndex = updatedNotes.findIndex(
        (note) => note.id === updatedNote.id
      );
      if (updatedNoteIndex > -1) {
        updatedNotes[updatedNoteIndex] = {
          ...updatedNotes[updatedNoteIndex],
          ...updatedNote,
        };
      }
      return {
        allNotes: updatedNotes,
      };
    });
});

export default notesReducer;
