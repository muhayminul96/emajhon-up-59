// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2S-37frBl1DbodZZVp6i7ATL5BsGC6oc",
  authDomain: "ema-jhon-project-245e1.firebaseapp.com",
  projectId: "ema-jhon-project-245e1",
  storageBucket: "ema-jhon-project-245e1.appspot.com",
  messagingSenderId: "175269250308",
  appId: "1:175269250308:web:cf268877871566fc9afc51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();


export default auth;
