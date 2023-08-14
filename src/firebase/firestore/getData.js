import { database } from "../config";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";

export async function getDocument(collection, id) {
    let docRef = doc(database, collection, id);

    let result = null;
    let error = null;

    try {
        result = await getDoc(docRef);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export async function getCollection(colName) {
    let result = null;
    let error = null;

    try {
        result = await getDocs(collection(database, colName));
    } catch (e) {
        error = e;
    }

    return { result, error };
}