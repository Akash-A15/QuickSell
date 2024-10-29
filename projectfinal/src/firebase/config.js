import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {

    apiKey: "AIzaSyCggZCcBun0cwNfOWGC2K8pZcgIRWMfqwY",
    authDomain: "olx-sijeesh.firebaseapp.com",
    projectId: "olx-sijeesh",
    storageBucket: "olx-sijeesh.appspot.com",
    messagingSenderId: "767411886432",
    appId: "1:767411886432:web:2ef6862afc88f2c423a605",
    measurementId: "G-4ELNR9DJHL"

  // apiKey: "AIzaSyAyT-g_nWDbo9qFbA_b6Ao1duqYwmLi-0M",
  // authDomain: "ambulance-73fe2.firebaseapp.com",
  // databaseURL: "https://ambulance-73fe2-default-rtdb.firebaseio.com",
  // projectId: "ambulance-73fe2",
  // storageBucket: "ambulance-73fe2.appspot.com",
  // messagingSenderId: "528596528376",
  // appId: "1:528596528376:web:82a9d709395c1e52ac1f0d",
  // measurementId: "G-FW3WHJS8T1"
  };

  export const Firebase= firebase.initializeApp(firebaseConfig)//named export