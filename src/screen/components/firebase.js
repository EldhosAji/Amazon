import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAOypueDkvq8n8UdWLu6gMrCNzwYLzN6lU",
    authDomain: "clone-f9628.firebaseapp.com",
    databaseURL: "https://clone-f9628.firebaseio.com",
    projectId: "clone-f9628",
    storageBucket: "clone-f9628.appspot.com",
    messagingSenderId: "663000794500",
    appId: "1:663000794500:web:dc9e9b9ea2b244bff2c9d1",
    measurementId: "G-1S0Q6LP733",
});

const auth = firebase.auth();
export { auth };