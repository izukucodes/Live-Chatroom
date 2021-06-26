import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJFeqVGtKoFzyGQ6-i8w2imkl9BLqdgpg",
  authDomain: "live-chatroom-8c308.firebaseapp.com",
  projectId: "live-chatroom-8c308",
  storageBucket: "live-chatroom-8c308.appspot.com",
  messagingSenderId: "908806367713",
  appId: "1:908806367713:web:9d88268d7ad162907f0aa0",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore & timestamp
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timeStamp };
