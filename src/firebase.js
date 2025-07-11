import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import toast from "react-hot-toast";

const firebaseConfig = {
  apiKey: "AIzaSyD2IjZ4E6jcH6JkuVOdlOgumj-yGco69_k",
  authDomain: "netflix-clone-ece77.firebaseapp.com",
  projectId: "netflix-clone-ece77",
  storageBucket: "netflix-clone-ece77.firebasestorage.app",
  messagingSenderId: "94423249493",
  appId: "1:94423249493:web:65ee3558e871eed680dadc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split("-").join(" "))
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split("-").join(" "))
  }
};

const logout = async () => {
  signOut(auth);
};

export {auth, db, login, signup, logout}