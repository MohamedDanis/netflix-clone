import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'


var firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
    projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
    messagingSenderId: "1087007462107",
    appId: "1:1087007462107:web:5b3a452de45522285eb2fe",
    measurementId: "G-8DH891YTNY"
  };

  export default firebase.initializeApp(firebaseConfig);