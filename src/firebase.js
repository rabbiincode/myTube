import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'

const firebaseConfig = {
 apiKey: "AIzaSyDzSJNb4GctkVOxyzqaq4baVcR3-_IsCr4",
 authDomain: "mytube-20.firebaseapp.com",
 projectId: "mytube-20",
 storageBucket: "mytube-20.appspot.com",
 messagingSenderId: "463870457672",
 appId: "1:463870457672:web:590bf28b3680d4e956e57d"
};

//using firsbase initializer
firebase.initializeApp(firebaseConfig)

export default firebase.auth()