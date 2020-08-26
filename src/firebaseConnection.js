import firebase from 'firebase/app'
import 'firebase/database'

let firebaseConfig = {
    apiKey: "AIzaSyCecqhaspv88Jt9wV6Yv4ssRl5JqrrdKuE",
    authDomain: "fir-eb9f8.firebaseapp.com",
    databaseURL: "https://fir-eb9f8.firebaseio.com",
    projectId: "fir-eb9f8",
    storageBucket: "fir-eb9f8.appspot.com",
    messagingSenderId: "300658160371",
    appId: "1:300658160371:web:1ac34e284818670344fd86",
    measurementId: "G-6MN29J9L73"
  };
  
   if(!firebase.apps.length) {
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig)
    }
