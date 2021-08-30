import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
export const firebaseConfig = {
  apiKey: "AIzaSyAe66O2F_QzrqctcUWWT1B-StgldJO5z24",
  authDomain: "myteecha.firebaseapp.com",
  projectId: "myteecha",
  storageBucket: "myteecha.appspot.com",
  messagingSenderId: "238520985095",
  appId: "1:238520985095:web:1ac99a2684893ba817aca2",
  measurementId: "G-WCY1TW1EZV",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
