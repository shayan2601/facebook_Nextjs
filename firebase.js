import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMPRW_2nyNNQmj5FCmNN1W-KSh1olBI5M",
  authDomain: "facebook-nextjs-a6b9d.firebaseapp.com",
  projectId: "facebook-nextjs-a6b9d",
  storageBucket: "facebook-nextjs-a6b9d.appspot.com",
  messagingSenderId: "866926026907",
  appId: "1:866926026907:web:cfcc7b7125679f8df1a63e",
  measurementId: "G-VJ28Z29S7X",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { storage };
export default db;
