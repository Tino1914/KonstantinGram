import firebase  from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCacIiwkaVgumhPiRN-8dLwrEgkn-23THo",
    authDomain: "konstantin-gram.firebaseapp.com",
    databaseURL: "https://konstantin-gram.firebaseio.com",
    projectId: "konstantin-gram",
    storageBucket: "konstantin-gram.appspot.com",
    messagingSenderId: "808308964153",
    appId: "1:808308964153:web:a71d4ab6c17a664ba906e8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore};