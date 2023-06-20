import firebase from "firebase";

  const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDFLOy4HcrAdVapm1IRW3AFeOq3esD8eCw",
    authDomain: "final-fb-c91da.firebaseapp.com",
    projectId: "final-fb-c91da",
    storageBucket: "final-fb-c91da.appspot.com",
    messagingSenderId: "801225291705",
    appId: "1:801225291705:web:d615b15ae3b80f1ab16868"
  });
  
  const auth =firebaseConfig.auth();
 
  const provider = new firebase.auth.FacebookAuthProvider();

  const db = firebaseConfig.firestore();
  const storage = firebase.storage();
  

  export{auth,provider,db,storage}