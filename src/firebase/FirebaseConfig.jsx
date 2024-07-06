import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyANOjD1nqUFpxPs_orxYmQxFsIRa8qUupQ",
    authDomain: "blog-8cc38.firebaseapp.com",
    projectId: "blog-8cc38",
    storageBucket: "blog-8cc38.appspot.com",
    messagingSenderId: "707935238916",
    appId: "1:707935238916:web:36b9e349ed0842657dee51"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);
export { fireDb, auth, storage };