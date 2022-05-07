import {
  NotesAction,
  NotesActionTypes,
  NotesState,
} from "../../utilities/types/notesTypes";

const initialState = {
  allNotes: [],
};

const notesReducer = (
  state: NotesState = initialState,
  action: NotesAction
): NotesState => {
  switch (action.type) {
    case NotesActionTypes.ADD_NOTE:
      const newNote = action.data.addedNote!;
      const allNotes = [...state.allNotes, newNote];
      return {
        allNotes,
      };
    case NotesActionTypes.UPDATE_NOTE:
      const updatedNote = action.data.updatedNote!;
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
    case NotesActionTypes.REMOVE_NOTE:
      const removedNote = action.data.removedId;
      const newNotes = [...state.allNotes].filter(
        (note) => note.id !== removedNote
      );
      return {
        allNotes: newNotes,
      };
    case NotesActionTypes.GET_ALL:
      return {
        allNotes: action.data.allNotes!,
      };
  }
  return state;
};

export default notesReducer;
