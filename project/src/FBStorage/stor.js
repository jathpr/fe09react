import {
  ref,
  uploadBytes,
  getDownloadURL,
  getMetadata,
} from "firebase/storage";
import { storage } from "../fb";

const mountainImagesRef = ref(storage, "images/mountains.jpg");

export const upload = (file) =>
  uploadBytes(mountainImagesRef, file).then((snapshot) => {
    console.log(
      "🚀 ~ file: stor.js ~ line 7 ~ uploadBytes ~ snapshot",
      snapshot
    );
    console.log("Uploaded a blob or file!");
  });

export const getImg = async () => {
  try {
    const url = await getDownloadURL(mountainImagesRef);
    console.log("🚀 ~ file: stor.js ~ line 18 ~ getImg ~ url", url);
    return url;
  } catch (error) {
    console.log("🚀 ~ file: stor.js ~ line 20 ~ error", error);
  }
};

export const getMeta = async () => {
  try {
    const metadata = await getMetadata(mountainImagesRef);
    console.log("🚀 ~ file: stor.js ~ line 18 ~ getImg ~ url", metadata);
    return metadata;
  } catch (error) {
    console.log("🚀 ~ file: stor.js ~ line 20 ~ error", error);
  }
};
