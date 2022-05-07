export type Note = {
  id: string;
  userId: string;
  title: string;
  description: string;
};

export interface NotesState {
  allNotes: Note[];
}

export enum NotesActionTypes {
  GET_ALL = "GET_ALL",
  REMOVE_NOTE = "REMOVE_NOTE",
  ADD_NOTE = "ADD_NOTE",
  UPDATE_NOTE = "UPDATE_NOTE",
}

export interface NotesActionData {
  addedNote?: Note;
  allNotes?: Note[];
  removedId?: string;
  updatedNote?: Partial<Note>;
}

export interface NotesAction {
  type: NotesActionTypes;
  data: NotesActionData;
}
