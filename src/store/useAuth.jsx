import { create } from "zustand";
import firebase_app from "../firebase/config";
import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signOut as firebaseSignOut
} from "firebase/auth";

const auth = getAuth(firebase_app);

const useAuthStore = create((set) => {
	const initialUserState = {
		isLoggedIn: auth.currentUser !== null,
		uid: null,
		error: ""
	};

	const unsubscribe = onAuthStateChanged(auth, (user) => {
		if (user) {
			set({ ...initialUserState, isLoggedIn: true, uid: user.uid });
		} else {
			set({ ...initialUserState });
		}
	});

	return {
		...initialUserState,
		login: async (email, password) => {
			try {
				await signInWithEmailAndPassword(auth, email, password);
				set({ error: "" });
			} catch (error) {
				set({ error: error.message });
			}
		},
		signUp: async (email, password) => {
			try {
				await createUserWithEmailAndPassword(auth, email, password);
				set({ error: "" });
			} catch (error) {
				set({ error: error.message });
			}
		},
		signOut: async () => {
			try {
				await firebaseSignOut(auth);
			} catch (error) {
				console.error("Sign out error:", error);
			} finally {
				set({ isLoggedIn: false });
			}
		},
		unsubscribe
	};
});

export default useAuthStore;
