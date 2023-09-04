import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB7lRY9KfzprZ0v35Z2hyZpHgjPZYIfUgg",
  authDomain: "chat-nest-2e0c5.firebaseapp.com",
  projectId: "chat-nest-2e0c5",
  storageBucket: "chat-nest-2e0c5.appspot.com",
  messagingSenderId: "119643674276",
  appId: "1:119643674276:web:fdf8e02cd5beab5a733831"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore()

