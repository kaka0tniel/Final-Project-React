import Firebase from 'firebase';

let firebaseConfig = {
    apiKey: "AIzaSyAGkFY9cQ9n_bnxEBtxm4YPNZSa4xsKjZE",
    authDomain: "travelead-7c22c.firebaseapp.com",
    databaseURL: "https://travelead-7c22c.firebaseio.com",
    projectId: "travelead-7c22c",
    storageBucket: "travelead-7c22c.appspot.com",
    messagingSenderId: "111701146018",
    appId: "1:111701146018:web:b0376e1ebf2a4538721afb"  
};

let app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();