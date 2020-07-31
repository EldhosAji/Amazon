import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    //Firebase config
});

const auth = firebase.auth();
export { auth };
