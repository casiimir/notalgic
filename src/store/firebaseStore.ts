import { defineStore } from "pinia";
import {
  auth,
  signOut,
  provider,
  signInWithPopup,
  addNoteToFirebaseDB,
  getNotesFromFirebaseDB,
} from "../services/firebase";
import {
  FirebaseAddCollectionNote,
  UserNote,
  UserNotes,
} from "../types/generic";

export const useFirebaseStore = defineStore({
  id: "firebaseStore",
  state: () => ({ user: {} as { uid: string }, userNotes: {} }),
  getters: {
    getUser: (state) => state.user,
    getUserNotes: (state) => state.userNotes,
  },
  actions: {
    getNotesFromDB(payload: string) {
      getNotesFromFirebaseDB(payload).then((userData) => {
        const notes: UserNotes = [];

        userData.forEach((note) => notes.push(note.data() as UserNote));
        this.userNotes = notes;
      });
    },
    addNoteToDB(payload: FirebaseAddCollectionNote) {
      addNoteToFirebaseDB(
        payload.collection,
        payload.document,
        payload.data
      ).then(() => this.getNotesFromDB(this.getUser.uid));
    },
    setUserByGoogle() {
      signInWithPopup(auth, provider)
        .then((accountRes) => (this.user = accountRes.user))
        .then(() => this.getNotesFromDB(this.getUser.uid));
    },
    removeUserByGoogle() {
      signOut(auth).then(() => (this.user = { uid: "" }));
    },
  },
});
