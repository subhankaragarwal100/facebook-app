// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import {getAuth, FacebookAuthProvider} from "firebase/auth"



const firebaseConfig = {
    apiKey: "AIzaSyC_jodMW0lw_2nSdzWpYFFHOx0lJ23GK1w",
    authDomain: "fb-clone-96bfc.firebaseapp.com",
    projectId: "fb-clone-96bfc",
    storageBucket: "fb-clone-96bfc.appspot.com",
    messagingSenderId: "333760795571",
    appId: "1:333760795571:web:1cfd202b7d841b248bb1c6"
  };
  const app = initializeApp(firebaseConfig);
  // const auth =firebaseConfig.auth();
  const auth=getAuth(app);
  var provider = new FacebookAuthProvider();
  

  export{auth,provider}