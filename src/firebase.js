import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

firebase.initializeApp({
  apiKey: "AIzaSyC9agGIb0RayVwiRfM3_zhwZVfjrGJhj90",
  authDomain: "engtor-1.firebaseapp.com",
  databaseURL:
    "https://engtor-1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "engtor-1",
  storageBucket: "engtor-1.appspot.com",
  messagingSenderId: "1091724838469",
  appId: "1:1091724838469:web:d8b46ba18bf0ccf28c052c",
});

export default firebase;
