import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDeqmCzeLT0SPQ2l9ngdGZaxq5tooxihWc",
  authDomain: "cleopatra-clothing.firebaseapp.com",
  projectId: "cleopatra-clothing",
  storageBucket: "cleopatra-clothing.appspot.com",
  messagingSenderId: "1040551225562",
  appId: "1:1040551225562:web:a54d4504966714ed285de3"
};

  

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
  export const auth = getAuth(app);
  

  const provider = new GoogleAuthProvider();
  
  export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  
