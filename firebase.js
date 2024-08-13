// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoe-zXVOTzDZsSNxq1laGoqEHs42vGrSE",
  authDomain: "flashcard-saas-4b9d2.firebaseapp.com",
  projectId: "flashcard-saas-4b9d2",
  storageBucket: "flashcard-saas-4b9d2.appspot.com",
  messagingSenderId: "563277105787",
  appId: "1:563277105787:web:0e51b37b719adc49d630de",
  measurementId: "G-52XXF6RKP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);