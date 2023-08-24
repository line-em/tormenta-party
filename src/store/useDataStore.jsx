import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
	getFirestore,
	collection,
	getDocs,
	getDoc,
	onSnapshot,
	doc
} from "firebase/firestore";
import { database } from "../firebase/config";

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
