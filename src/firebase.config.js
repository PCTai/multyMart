import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnjrDVBFRVgAO_rXuDW8wRznrb_mUSygQ",
  authDomain: "multy-mart.firebaseapp.com",
  projectId: "multy-mart",
  storageBucket: "multy-mart.appspot.com",
  messagingSenderId: "865938272397",
  appId: "1:865938272397:web:19e3c503c242e434b232c4",
  measurementId: "G-SGE6B2X4VT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db= getFirestore(app);
export const storage= getStorage(app);
export default app;