// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCbN-x5NYs6Y0QJlJyDtFbF9AvKyexWazI",
  authDomain: "vue-app-1b8cc.firebaseapp.com",
  databaseURL: "https://vue-app-1b8cc-default-rtdb.firebaseio.com",
  projectId: "vue-app-1b8cc",
  storageBucket: "vue-app-1b8cc.appspot.com",
  messagingSenderId: "85041357747",
  appId: "1:85041357747:web:dea2b7bfc5c0537ff8e1c6"
};

// Initialize Firebase
export const app = initializeApp(config)
export const db = getFirestore(app)
