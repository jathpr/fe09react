import { collection, setDoc, getDocs, doc } from "firebase/firestore";
import { db } from "../fb";

export const send = async () => {
  try {
    await setDoc(doc(db, "users", "ada_id"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const get = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    console.log(doc.data());
  });
};
