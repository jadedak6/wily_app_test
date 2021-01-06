import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBsaS0OKFNOhi8JKwPxxE2WGcWhgJTNEeY",
    authDomain: "wily-26.firebaseapp.com",
    projectId: "wily-26",
    storageBucket: "wily-26.appspot.com",
    messagingSenderId: "693988587629",
    appId: "1:693988587629:web:49d75f5696ce5231562764",
    measurementId: "G-6HZ9J8GM2S"
}

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();