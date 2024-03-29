import { database } from "../config";
import { doc, getDoc, getDocs, collection, onSnapshot } from "firebase/firestore";

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

export async function getCollectionOnSnapshot (colName, callback) {
    
    const {unsubscribe, error} = onSnapshot(collection(database, colName), callback);

    return { unsubscribe , error };
}

export async function getDocOnSnapshot (colName, id, callback) {
    
    let docRef = doc(database, colName, id);
    const {unsubscribe, error} = onSnapshot(docRef, callback);

    return { unsubscribe , error };
}