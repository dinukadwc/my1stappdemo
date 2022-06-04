// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD951LIhX2pDfXHL7XfwOTG7Ssy-9yVkhc",
    authDomain: "rmad-demo.firebaseapp.com",
    projectId: "rmad-demo",
    storageBucket: "rmad-demo.appspot.com",
    messagingSenderId: "444389700709",
    appId: "1:444389700709:web:3ca95d8c3059a99dc0428c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);