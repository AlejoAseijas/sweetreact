import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAyVieCYf3ZYlwDdvXxLiy1mIeQK5MDnk",
  authDomain: "sweetstyle-58b55.firebaseapp.com",
  projectId: "sweetstyle-58b55",
  storageBucket: "sweetstyle-58b55.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
