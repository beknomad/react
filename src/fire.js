import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBN5a7At-ipOBk0XYWpP8VR2DYGQDOsSXc",
    authDomain: "login-80f44.firebaseapp.com",
    databaseURL: "https://login-80f44.firebaseio.com",
    projectId: "login-80f44",
    storageBucket: "login-80f44.appspot.com",
    messagingSenderId: "790789902800",
    appId: "1:790789902800:web:2bb2017cd9abcb888aa9d5"
  };
  // Initialize Firebase
const fire =  firebase.initializeApp(firebaseConfig);
export default fire;