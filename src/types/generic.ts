export interface Note {
  content: string;
  id: string;
  time: string;
  title: string;
}

export interface UserNote {
  title: string;
  content: string;
}

export interface FirebaseAddCollectionNote {
  collection: string;
  document: string;
  data: Note;
}

export type UserNotes = UserNote[];

export type NoteList = Note[];
