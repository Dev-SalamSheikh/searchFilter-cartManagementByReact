import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBNYx-q3nA6dCFRb4fInu4oYVR1Z7z4KuM",
  authDomain: "shopping-cart-7f878.firebaseapp.com",
  projectId: "shopping-cart-7f878",
  storageBucket: "shopping-cart-7f878.appspot.com",
  messagingSenderId: "181380422609",
  appId: "1:181380422609:web:a6b42be2e923dc58841ef0",
};

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState({});

  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signinUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <FirebaseContext.Provider
      value={{
        user,
        signupUserWithEmailAndPassword,
        signinUserWithEmailAndPassword,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
