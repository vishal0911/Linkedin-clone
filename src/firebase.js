import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAAsVvxwv_80rHdDho82LkyqbM3A3w7abs",
    authDomain: "linkedin-clone-1f3d7.firebaseapp.com",
    projectId: "linkedin-clone-1f3d7",
    storageBucket: "linkedin-clone-1f3d7.appspot.com",
    messagingSenderId: "821315076056",
    appId: "1:821315076056:web:bc56efd417e4b70ee1bcad"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();

  export {db, auth};