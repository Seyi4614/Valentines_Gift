// Import Firebase v9 modular SDK
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBLKkkSjPFWrSfc5PnE6YjunQ-54gkn_Bk",
    authDomain: "valentines-gift-6afb8.firebaseapp.com",
    projectId: "valentines-gift-6afb8",
    storageBucket: "valentines-gift-6afb8.firebasestorage.app",
    messagingSenderId: "864731972736",
    appId: "1:864731972736:web:0a31ac422cf3dc54f59265",
     measurementId: "G-VD769SMP3P"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth };