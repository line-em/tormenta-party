import { database } from "../config";
import { doc, setDoc } from "firebase/firestore";

export default async function addData(colllection, id, data) {
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