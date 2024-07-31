// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCgLzDeAsJ2Ss8pdqU5VvpqLqfUapYxEGs",
    authDomain: "pantry-tracker-a886d.firebaseapp.com",
    projectId: "pantry-tracker-a886d",
    storageBucket: "pantry-tracker-a886d.appspot.com",
    messagingSenderId: "740902741484",
    appId: "1:740902741484:web:b823877fc05ab35e4bccc9",
    measurementId: "G-693906TZ8E"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
