import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCnRdiCwWR3VidYnXav-eAcZgko_LC3Gms",
    authDomain: "chat-app-8ac40.firebaseapp.com",
    databaseURL: "https://chat-app-8ac40.firebaseio.com",
    projectId: "chat-app-8ac40",
    storageBucket: "chat-app-8ac40.appspot.com",
    messagingSenderId: "897554427385",
    appId: "1:897554427385:web:8aa299c1def9d698c22128",
    measurementId: "G-X4YTWSRSHL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };