import { Dispatch } from "redux";
import { Note, NotesActionTypes } from "../../utilities/types/notesTypes";
import { ErrorModalActionTypes } from "../actions/errorModal";

export const getNotes = (userId: string) => {
  try {
    return async (dispatch: Dispatch<any>) => {
      const response = await fetch(
        "https://wheel--e-default-rtdb.firebaseio.com/notes.json"
      );

      if (!response.ok) {
        dispatch({
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
          userId: resData[data].userId,
          title: resData[data].title,
          description: resData[data].description,
        });
      }

      dispatch({
        type: NotesActionTypes.GET_ALL,
        data: { allNotes: allNotes },
      });
    };
  } catch (err) {
    throw err;
  }
};

export const removeNote = (noteId: string) => {
  try {
    return async (dispatch: Dispatch<any>) => {
      const response = await fetch(
        `https://wheel--e-default-rtdb.firebaseio.com/reminders/${noteId}.json`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        dispatch({
          type: ErrorModalActionTypes.SHOW_MODAL,
          data: "errorModal.deletingNote",
        });
        throw new Error("Can't delete note");
      }

      dispatch({
        type: NotesActionTypes.REMOVE_NOTE,
        data: { removedId: noteId },
      });
    };
  } catch (err) {
    throw err;
  }
};

export const addNote = (newNote: Note) => {
  try {
    return async (dispatch: Dispatch<any>) => {
      const response = await fetch(
        "https://wheel--e-default-rtdb.firebaseio.com/notes.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newNote),
        }
      );

      if (!response.ok) {
        dispatch({
          type: ErrorModalActionTypes.SHOW_MODAL,
          data: "errorModal.addingNote",
        });
        throw new Error("can't add note");
      }
      const resData = await response.json();

      dispatch({
        type: NotesActionTypes.ADD_NOTE,
        data: {
          addedReminder: {
            ...newNote,
            id: resData.name,
          },
        },
      });
    };
  } catch (err) {
    throw err;
  }
};

export const updateNote = (newNote: Partial<Note>) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const response = await fetch(
        `https://wheel--e-default-rtdb.firebaseio.com/notes/${newNote.id}.json`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newNote),
        }
      );

      if (!response.ok) {
        dispatch({
          type: ErrorModalActionTypes.SHOW_MODAL,
          data: "errorModal.updatingNote",
        });
        throw new Error("can't update note");
      }

      dispatch({
        type: NotesActionTypes.UPDATE_NOTE,
        data: {
          updatedNote: newNote,
        },
      });
    } catch (err) {
      throw err;
    }
  };
};
