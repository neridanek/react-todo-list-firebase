import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBtaPWe7t_zWuy1iVww7DTccv86uAiJbXU",
    authDomain: "todolist-app-e7c81.firebaseapp.com",
    projectId: "todolist-app-e7c81",
    storageBucket: "todolist-app-e7c81.appspot.com",
    messagingSenderId: "1028953221599",
    appId: "1:1028953221599:web:69349d2296129e8ca83c6a"
  }

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db