import { initializeApp } from "firebase/app";
import { getAuth, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5CRDdo4I-nzAfKaow7_5PzLBwsKVGIwI",
  authDomain: "tabaani-dc396.firebaseapp.com",
  projectId: "tabaani-dc396",
  storageBucket: "tabaani-dc396.appspot.com",
  messagingSenderId: "784310557200",
  appId: "1:784310557200:web:f7159bbe28996e3f8c4895",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app, browserLocalPersistence);
const firestore = getFirestore(app);
const storage = getStorage(app);
const db = firebaseApp.firestore();
const projectAuth = firebase.auth();

export { auth, firestore, storage, db, projectAuth };
