
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../config/firebaseconfig";
 

export async function postData(data) {
    try {
        const docRef = await addDoc(collection(db, "to-do"), data);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
 }

 
