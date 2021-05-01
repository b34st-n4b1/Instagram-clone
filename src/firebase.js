import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyD3Dym67CO8QgQomGic0n_NlfY6DW2Dpis",
  authDomain: "instagram-clone-react-74fd1.firebaseapp.com",
  projectId: "instagram-clone-react-74fd1",
  storageBucket: "instagram-clone-react-74fd1.appspot.com",
  messagingSenderId: "425468593071",
  appId: "1:425468593071:web:00ce80b8b164f3a359655a",
  measurementId: "G-BJD8JHXZ76",
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
