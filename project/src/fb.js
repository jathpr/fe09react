import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FBAPI,
  authDomain: "fe09-ecf1b.firebaseapp.com",
  projectId: "fe09-ecf1b",
  storageBucket: "fe09-ecf1b.appspot.com",
  messagingSenderId: "631953367973",
  appId: "1:631953367973:web:7d189312190eda7dccbe4c",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore();
