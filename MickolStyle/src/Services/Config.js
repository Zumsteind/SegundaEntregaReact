
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.vite_firebase_api_key,
  authDomain: "mickolstyle-24063.firebaseapp.com",
  projectId: "mickolstyle-24063",
  storageBucket: "mickolstyle-24063.firebasestorage.app",
  messagingSenderId: "663367392481",
  appId: "1:663367392481:web:03c295cbcee34fe2d62ba0"
};


const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);
