import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'


const firebaseConfig = {
  apiKey: "AIzaSyDVa4q59TCcTH69VIo_KszS3BPUJfSYCy4",
  authDomain: "tiktok---jornada-ce0c9.firebaseapp.com",
  projectId: "tiktok---jornada-ce0c9",
  storageBucket: "tiktok---jornada-ce0c9.appspot.com",
  messagingSenderId: "768996392571",
  appId: "1:768996392571:web:50cc97abfb94053208acde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;