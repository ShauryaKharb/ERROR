import firebase from 'firebase'
require("@firebase/firestore")

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDUGjQEVp2zPFvZzRuqcM7i4KTNeORENBs",
  authDomain: "job-portal-8c303.firebaseapp.com",
  projectId: "job-portal-8c303",
  storageBucket: "job-portal-8c303.appspot.com",
  messagingSenderId: "956989043040",
  appId: "1:956989043040:web:648a9475a2aec717e16e05"
};

// Initialize Firebase
if(!firebase.apps.length)
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()

// export default firebaseConfig