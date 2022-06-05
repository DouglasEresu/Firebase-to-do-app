import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyAseru8lBnQPnUBDXNoZgaKc67BiVkPMRU",
  authDomain: "todoapp-e3ad0.firebaseapp.com",
  projectId: "todoapp-e3ad0",
  storageBucket: "todoapp-e3ad0.appspot.com",
  messagingSenderId: "304297487568",
  appId: "1:304297487568:web:fc279488884ecc51ccc2d5",
  measurementId: "G-6ZH048WZMX"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

 export const db = getFirestore(app);
export const storage = getStorage(app)
 
 