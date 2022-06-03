
import { collection, addDoc, doc,  getDocs, updateDoc  } from "firebase/firestore"; 
import { db } from "../config/firebaseconfig";
 
//TODO: create a collection and document to collection
// export async function postData(data) {
//     try {
//         const docRef = await addDoc(collection(db, "to-do"), data);
//         console.log("Document written with ID: ", docRef.id);
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }
//  }


    //   export  async function postData(data){
    //     const docRef = await addDoc(collection(db, "todo"), data)
    //     if (!docRef.id) return new Error('An error ocurred while creating atodo')
    //     const projectSnap = await getDoc(doc(db, "todo", docRef.id))
    //     const project = {id: projectSnap.id, ...projectSnap.data()}
    //     return project
    //     // console.log(data);
    // }
    

    //  write document in collection (add id)
    export  async function postData(data){
        try {
            const docRef = await addDoc(collection(db, "to-do"), data);
            const documentRef = await doc(db, "to-do", docRef.id);
            await updateDoc(documentRef, {
                id: docRef.id
              })
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    


    // get particular document
//  export  async function getData(data){
    
//   const docRef = doc(db, "to-do", "id");
//   const docSnap = await getDoc(docRef);
  
//   if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }

//  }
    



//  Deleting a document by ID
export  async function deleteData(data){
  const docRef = doc(db, "to-do", '' )
  console.log(docRef)
  // const delDoc =  await deleteDoc(docRef);
  // console.log(delDoc)
  // if (delDoc) {
  //       console.log("Todo deleted" );
  //     } else {
  //       console.log("No such document!");
  //     }
    
}
  

// get collection
// export async function getCollection(){
//   const collectionRef = collection(db, "to-do")
//   getDocs(collectionRef).then((response) =>{
//     console.log(
//       response.docs.map((item)=>{
//         return {...item.data(), id: item.id}
//       })
//     )
//   })
// }


