import firebase from 'firebase/app'
import 'firebase/database'

let firebaseConfig = {
  apiKey: "AIzaSyA59wVrsSH_y3Hbf2PP2B3bR3psv-c-3ko",
  authDomain: "tasklist-a1ccf.firebaseapp.com",
  databaseURL: "https://tasklist-a1ccf.firebaseio.com",
  projectId: "tasklist-a1ccf",
  storageBucket: "tasklist-a1ccf.appspot.com",
  messagingSenderId: "230402569937",
  appId: "1:230402569937:web:acafca003a359c4e3777f0",
  measurementId: "G-DSQETR5JDX"
  };
  
   if(!firebase.apps.length) {
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig)
    }

    export default firebase;