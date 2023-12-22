import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBZ6wE4dO4Zb0jVkTmIhRF815DqVoXM-Ic",
  authDomain: "artistry-indonesia.firebaseapp.com",
  projectId: "artistry-indonesia",
  storageBucket: "artistry-indonesia.appspot.com",
  messagingSenderId: "615836320582",
  appId: "1:615836320582:web:b361f1fc69a17929f7db47"
};

// init firebase
const app = initializeApp(firebaseConfig)

// init firebase auth
const auth = getAuth()


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export { auth, db, storage }