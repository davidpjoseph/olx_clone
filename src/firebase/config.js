import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBGRjD_akxbjG5XKqg4bjrYJFVxdovCnS0",
    authDomain: "olx-clone-d3cce.firebaseapp.com",
    projectId: "olx-clone-d3cce",
    storageBucket: "olx-clone-d3cce.appspot.com",
    messagingSenderId: "877380648228",
    appId: "1:877380648228:web:73bfbf11005168f0ee47b1",
    measurementId: "G-VPSKNJG4V7"
  };


   export default firebase.initializeApp(firebaseConfig)