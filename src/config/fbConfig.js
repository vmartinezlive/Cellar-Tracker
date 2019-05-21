import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA-bzvr1WFKs00k2LSz-UfyNcu89aaJtbM",
    authDomain: "cellar-tracker-1ab8d.firebaseapp.com",
    databaseURL: "https://cellar-tracker-1ab8d.firebaseio.com",
    projectId: "cellar-tracker-1ab8d",
    storageBucket: "cellar-tracker-1ab8d.appspot.com",
    messagingSenderId: "887232062449",
    appId: "1:887232062449:web:49f24052adf72f7e"
  };

  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;
