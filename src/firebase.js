import firebase from "firebase";



const firebaseConfig = {
  apiKey: "AIzaSyBEwmU_C9BqXdnBqgrGK0RTQ9HJNvZLywo",
  authDomain: "hotstar-clone-20919.firebaseapp.com",
  projectId: "hotstar-clone-20919",
  storageBucket: "hotstar-clone-20919.appspot.com",
  messagingSenderId: "622541197294",
  appId: "1:622541197294:web:393db0e681edb1832d88ff",
  measurementId: "G-C04MKHRFPE"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth, provider, storage };
export default db;