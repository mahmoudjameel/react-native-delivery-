import {initializeApp} from 'firebase/app';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyBrAreSMzVYc4GA3PVEg7iDRGXSy3thA5g',
  authDomain: 'appddelevery.firebaseapp.com',
  databaseURL: 'https://appddelevery-default-rtdb.firebaseio.com',
  projectId: 'appddelevery',
  storageBucket: 'appddelevery.appspot.com',
  messagingSenderId: '57098218201',
  appId: '1:57098218201:web:7e4d3b0bdca57744afecc8',
});

// const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage(firebaseApp);
export {
  //  app,
  db,
  auth,
  storage,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  doc,
  setDoc,
  addDoc,
  collection,
  getDocs,
  query,
  getDoc,
  onAuthStateChanged,
};
