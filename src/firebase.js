import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqyOoUwU22A3RGsrGYhIZfC_pQHNQ9riM",
  authDomain: "chat-nest-e7370.firebaseapp.com",
  projectId: "chat-nest-e7370",
  storageBucket: "chat-nest-e7370.appspot.com",
  messagingSenderId: "390528304324",
  appId: "1:390528304324:web:5e7cca31c4483c594eb591"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()