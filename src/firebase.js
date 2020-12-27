// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseapp = firebase.initializeApp(
    {
        apiKey: "AIzaSyAEHmUQLP5Iq4NZHAhj95v3oeoNpl0aoEI",
        authDomain: "todoappcp-60642.firebaseapp.com",
        databaseURL: "https://todoappcp-60642-default-rtdb.firebaseio.com",
        projectId: "todoappcp-60642",
        storageBucket: "todoappcp-60642.appspot.com",
        messagingSenderId: "488239789100",
        appId: "1:488239789100:web:501e4d0e7594f1386ecd89",
        measurementId: "G-MKR5PRL77F"
    }
);

const db = firebaseapp.firestore();

export default db;
