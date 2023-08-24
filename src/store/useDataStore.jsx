import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
	getFirestore,
	collection,
	getDocs,
	setDoc,
	getDoc,
	onSnapshot,
	doc
} from "firebase/firestore";
import { database } from "../firebase/config";

// TODO: Add all the functions that are missing from getData and addData
// IF EVERYTHING WORKS, then delete the previous ones.

const useDataStore = create(
	persist(
		(set, get) => ({
			charNames: [],
			charData: [],
			currentChar: null,
			error: "",

			getCharacterCollection: async () => {
				const colRef = collection(database, "characters");
				try {
					const result = await getDocs(colRef);
					const list = result?.docs.map((doc) => doc.id);
					// FIXME: agora que o usuário vai ser a base, esse list tem que mudar.
					const obj = result?.docs.map((doc) => doc.data());
					console.log("getcharactercollection run");
					set((state) => ({
						...state,
						charData: [...obj],
						charNames: list,
						error: ""
					}));
				} catch (e) {
					set((state) => ({
						...state,
						error: e.message
					}));
				}
			},

			getCharacterByName: async (charName) => {
				const allData = get().charData;
				const character = allData.find((char) => char.charName === charName);
				console.log(character);
				set((state) => ({
					...state,
					currentChar: character
				}));
			}, // FIXME: not using it right now, nor currentChar, is there a better implementation?

			// TODO: Implement this in the app
			setCurrentChar: (char) =>
				set((state) => ({
					...state,
					currentChar: char
				})),
			// Implementation example, at a component that will use it:   const setAuthUser = useAuth((s) => s.setAuthUser);
			// in this casE: const setCurrentChar = useDataStore((s) => s.setCurrentChar);

			// TODO: Check if this works in the form. Function to check if the data is up to date, might need to integrate onSnapshot somehow?
			compareCharData: async (newData) => {
				const character = get().currentChar;
				const prevData = get().getCharacterByName(character.charName);

				if (currentData && JSON.stringify(prevData) === JSON.stringify(newData)) {
					return "equal";
				} else {
					return "notEqual";
				}
			},

			// TODO: Check if this works in the form.
			overwriteCharData: async (newData) => {
				const character = get().currentChar;
				const prevData = get().getCharacterByName(character.charName);
				if (prevData) {
					set((state) => ({
						...state,
						currentChar: newData
					}));
				}
			}

			// getDocument: async (collection, id) => {
			// 	const docRef = doc(database, collection, id);
			// 	try {
			// 		const { result, error } = await getDoc(docRef);
			// 		set({ data: result.data() });
			// 		// set({ data: result.docs.map((doc) => doc.data()) });
			// 	} catch (e) {
			// 		set({ error: e.message });
			// 	}
			// }
			// getSnapshot: async (collection, id) => {
			// 	const docRef = doc(database, collection, id);
			// 	try {
			// 		    const { unsubscribe, error } = onSnapshot(
			// 				collection(database, colName),
			// 				callback
			// 			);
			// 	} catch (e) {
			// 		set({ error: e.message });
			// 	}
			// }
		}),
		{
			name: "data"
		}
	)
);

export default useDataStore;
