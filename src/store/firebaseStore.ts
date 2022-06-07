import { defineStore } from "pinia";
import { auth, signOut, provider, signInWithPopup } from "../services/firebase";

export const useFirebaseStore = defineStore({
  id: "firebaseStore",
  state: () => ({ user: {} }),
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    setUserByGoogle() {
      signInWithPopup(auth, provider).then(
        (accountRes) => (this.user = accountRes.user)
      );
    },
    removeUserByGoogle() {
      signOut(auth).then((logOutRes) => (this.user = {}));
    },
  },
});
