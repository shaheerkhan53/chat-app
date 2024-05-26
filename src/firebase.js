import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBW7MVAeQGK9tbC1TIje3eMm9x80BaP-zE",
  authDomain: "chitchat-app-b1f62.firebaseapp.com",
  projectId: "chitchat-app-b1f62",
  storageBucket: "chitchat-app-b1f62.appspot.com",
  messagingSenderId: "79443717559",
  appId: "1:79443717559:web:40112bb6df64155844cc32"
};

export const app = initializeApp(firebaseConfig);