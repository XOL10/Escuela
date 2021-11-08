// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAprSrVrzsM6CzG356MmKhmAkFPP_FqtlU",
  authDomain: "fir-auth-20d78.firebaseapp.com",
  projectId: "fir-auth-20d78",
  storageBucket: "fir-auth-20d78.appspot.com",
  messagingSenderId: "445321164985",
  appId: "1:445321164985:web:1351a4ec96b755e54a8368"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
  }else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };