// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAGUM-6Icshrdp0UI6-3LMF2OfqtIuWttc",
    authDomain: "bw-access.firebaseapp.com",
    projectId: "bw-access",
    storageBucket: "bw-access.appspot.com",
    messagingSenderId: "145668361946",
    appId: "1:145668361946:web:1539a1398863005a375fe3",
    measurementId: "G-WZ7JNT4BBV"
  };

  //to connect firebase to react front end
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  //for login, signing in etc...
  const auth = firebase.auth();
  // this informs firebase that we want to use google login service
  const provider = new firebase.auth.GoogleAuthProvider();

  //allows access of data outside of this file
  export { auth, provider};
  export default db;