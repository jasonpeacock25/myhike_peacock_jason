//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyD_-k3kfVg7LYwiqoGWHiH-k9T0-0F1dYI",
    authDomain: "comp1800-3ef66.firebaseapp.com",
    projectId: "comp1800-3ef66",
    storageBucket: "comp1800-3ef66.appspot.com",
    messagingSenderId: "423963629519",
    appId: "1:423963629519:web:9bb826efc698bae28064ba"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
