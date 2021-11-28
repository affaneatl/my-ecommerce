// Import the functions you need from the SDKs you need
import * as firebase from "firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB52PA6pZ5FxKwzALFg1navReFzZyrzkBo",
  authDomain: "t-shirt-90598.firebaseapp.com",
  projectId: "t-shirt-90598",
  storageBucket: "t-shirt-90598.appspot.com",
  messagingSenderId: "241459288908",
  appId: "1:241459288908:web:7d7fc49c04fdc221138de9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();