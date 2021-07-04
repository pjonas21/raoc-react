import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD24IwEaAIK7Zfs9uraLkosgclnyeZRCYA",
  authDomain: "proj-admin-c0620.firebaseapp.com",
  databaseURL: "https://proj-admin-c0620-default-rtdb.firebaseio.com",
  projectId: "proj-admin-c0620",
  storageBucket: "proj-admin-c0620.appspot.com",
  messagingSenderId: "743962559713",
  appId: "1:743962559713:web:dbaf1987116ceb8947e3a0"
};

let fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb;
