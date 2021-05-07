import firebase from 'firebase';
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChO3UJ8Hcv63qiXIKAog6Wymb8JDBXYiM",
  authDomain: "med-check-30872.firebaseapp.com",
  databaseURL: "https://med-check-30872.firebaseio.com",
  projectId: "med-check-30872",
  storageBucket: "med-check-30872.appspot.com",
  messagingSenderId: "640122266854",
  appId: "1:640122266854:web:d8b3b217eb8ef3b8e4c727",
  measurementId: "G-L3L7K79CJZ"
};

  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();