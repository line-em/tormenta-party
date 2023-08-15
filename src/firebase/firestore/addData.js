import { database } from "../config";
import { doc, setDoc } from "firebase/firestore";

export async function addData(colllection, id, data) {
    let result = null;
    let error = null;

    try {
        result = await setDoc(doc(database, colllection, id), data, {
            merge: true,
        });
    } catch (e) {
        error = e;
    }

    return { result, error };
}

	const updateCharacter = async (name, data) => {
		const { error } = await addData("characters", name, {
			...data,
			user_uid: user.uid || "not loged",
			charName: name,
            lastUpdated: new Date()
		});
		error ? alert(error.message) : alert("Character created");
	};