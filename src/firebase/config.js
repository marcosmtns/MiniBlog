import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByr5tG0thZRjRbVI9vc15RKIppxH6FDxI",
  authDomain: "miniblog-ae22d.firebaseapp.com",
  projectId: "miniblog-ae22d",
  storageBucket: "miniblog-ae22d.appspot.com",
  messagingSenderId: "386946441421",
  appId: "1:386946441421:web:9384a3ab0a7f1311f28984"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };