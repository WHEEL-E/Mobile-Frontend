export type Note = {
  id?: string;
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

export interface NoteCardProps {
  id: string;
  title: string;
  description: string;
  backgroundColor: string;
}

export interface NoteModalProps {
  noteId?: string;
  noteTitle: string;
  noteDescription: string;
  modalVisible: boolean;
  setModalVisible: (state: boolean) => void;
}
