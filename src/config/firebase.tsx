import {FirebaseApp, initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBI8ajsubbN6Edfn6UwWwyG6K7jOomeMuU',
  authDomain: 'uasppm-4bf6e.firebaseapp.com',
  projectId: 'uasppm-4bf6e',
  storageBucket: 'uasppm-4bf6e.firebasestorage.app',
  messagingSenderId: '1085185378836',
  appId: '1:1085185378836:web:be83bc728cf0a50d0db501',
  measurementId: 'G-XPXM3BB3HD',
};

const app: FirebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
