import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAK_xLUyH85SFKd_0wqh9rBdhvhRWZPAB4",
    authDomain: "netflix-clone-7e3fd.firebaseapp.com",
    projectId: "netflix-clone-7e3fd",
    storageBucket: "netflix-clone-7e3fd.appspot.com",
    messagingSenderId: "1087007462107",
    appId: "1:1087007462107:web:5b3a452de45522285eb2fe",
    measurementId: "G-8DH891YTNY"
  };

  export default firebase.initializeApp(firebaseConfig);