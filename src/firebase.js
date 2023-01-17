import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCmdUKX245ogO8lmhSU0BxZRfrtM3f_zE8',
  authDomain: 'chat-app-340aa.firebaseapp.com',
  projectId: 'chat-app-340aa',
  storageBucket: 'chat-app-340aa.appspot.com',
  messagingSenderId: '771392143391',
  appId: '1:771392143391:web:374946da4760c38c55952a',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// Create a root reference
export const storage = getStorage();
export const db = getFirestore(app);
