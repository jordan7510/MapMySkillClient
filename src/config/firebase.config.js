// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_APIKEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID,

  apiKey: "AIzaSyCXKV4YdQZWQRzzTpM15H1lIW3Jbox9Ibo",
  authDomain: "test-app-36799.firebaseapp.com",
  projectId: "test-app-36799",
  storageBucket: "test-app-36799.appspot.com",
  messagingSenderId: "984447396088",
  appId: "1:984447396088:web:01cbe81eceec98b732730d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
