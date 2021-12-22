import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'

const firebaseConfig = {
 apiKey: "AIzaSyBncqKBJ6c_Y8vs5DlGOyJmkpMGOT6uQdk",
 authDomain: "mytube-1000.firebaseapp.com",
 projectId: "mytube-1000",
 storageBucket: "mytube-1000.appspot.com",
 messagingSenderId: "289717065240",
 appId: "1:289717065240:web:e9c13048b0fe981b35d56d",
 measurementId: "G-Y5X3603T2X"
};

//using firsbase initializer
firebase.initializeApp(firebaseConfig)

export default firebase.auth()