import firebase from "firebase";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "project-LINK-DOMAIN",
  databaseURL: "project-LINK-database",
  projectId: "proj-id-database",
  storageBucket: "proj-admin.appspot.com",
  messagingSenderId: "snederID",
  appId: "appID"
};

let fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb;
