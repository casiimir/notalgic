// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDocs,
  query,
} from "firebase/firestore";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { UserNote } from "../types/generic";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const db = getFirestore(app);

const addNoteToFirebaseDB = async (
  collection: string,
  document: string,
  data: UserNote
) => {
  return await setDoc(doc(db, collection, document), data);
};

const getNotesFromFirebaseDB = async (collect: string) => {
  const q = query(collection(db, collect));
  const querySnapshot = await getDocs(q);

  return querySnapshot;
};

export {
  app,
  signInWithPopup,
  auth,
  signOut,
  provider,
  addNoteToFirebaseDB,
  getNotesFromFirebaseDB,
};
