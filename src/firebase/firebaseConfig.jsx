import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAnznIOatwA4ewuF88T9BDHRGOKRhV1MCk",
  authDomain: "products-e137f.firebaseapp.com",
  projectId: "products-e137f",
  storageBucket: "products-e137f.appspot.com",
  messagingSenderId: "871356946591",
  appId: "1:871356946591:web:603c5f52235fd6b076eaaa",
  measurementId: "G-F7L0T0V8NL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getAnalytics(app);