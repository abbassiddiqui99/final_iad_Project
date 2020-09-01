import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBSSSlitwY629i8EZRwu2jOR234aboy30Q",
  authDomain: "iad-project-5125d.firebaseapp.com",
  databaseURL: "https://iad-project-5125d.firebaseio.com",
  projectId: "iad-project-5125d",
  storageBucket: "iad-project-5125d.appspot.com",
  messagingSenderId: "1084459581141",
  appId: "1:1084459581141:web:a03390e39d02e6ff482c5c",
  measurementId: "G-YRZHH826YZ",
});

const auth = firebase.auth();

export { auth };
