import * as firebase from 'firebase'
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAlFK_4DiP5Z0D_218XYCm9rSa1JZGYLDU",
    authDomain: "chat-application-96ed1.firebaseapp.com",
    projectId: "chat-application-96ed1",
    storageBucket: "chat-application-96ed1.appspot.com",
    messagingSenderId: "958220954925",
    appId: "1:958220954925:web:6c7c8db4a2d870885c37a4"
}

let app
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()

export { db, auth }