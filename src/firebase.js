import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBLKkkSjPFWrSfc5PnE6YjunQ-54gkn_Bk",
  authDomain: "valentines-gift-6afb8.firebaseapp.com",
  projectId: "valentines-gift-6afb8",
  storageBucket: "valentines-gift-6afb8.firebasestorage.app",
  messagingSenderId: "864731972736",
  appId: "1:864731972736:web:0a31ac422cf3dc54f59265",
   measurementId: "G-VD769SMP3P"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const analytics = firebase.analytics();