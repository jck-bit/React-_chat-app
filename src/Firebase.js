import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBjsvNdhlvrdZNZ_p3qbb8p2qS5w907Ho0",

  authDomain: "fire-chat-4767f.firebaseapp.com",

  projectId: "fire-chat-4767f",

  storageBucket: "fire-chat-4767f.appspot.com",

  messagingSenderId: "29972049783",

  appId: "1:29972049783:web:2a53277e65a5fefb25fb72",

  measurementId: "G-YFT5RZ3C77"

})


const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth}