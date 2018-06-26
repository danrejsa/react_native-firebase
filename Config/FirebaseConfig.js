import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBecpHAfAXJ3rIG0N-fLPcXS4unlFseK0w",
    authDomain: "dr-plaza.firebaseapp.com",
    databaseURL: "https://dr-plaza.firebaseio.com",
    projectId: "dr-plaza",
    storageBucket: "dr-plaza.appspot.com",
    persistence: true,
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;