import firebase from "firebase/app";
import "firebase/firestore";


const miConfiguracion = {
    apiKey: "AIzaSyDGeXzZTXsD0FQ_zre486BQ7ZiolS45QCU",
    authDomain: "proyecto-coderhouse-react.firebaseapp.com",
    projectId: "proyecto-coderhouse-react",
    storageBucket: "proyecto-coderhouse-react.appspot.com",
    messagingSenderId: "635748602987",
    appId: "1:635748602987:web:c2006355ea61b1668a8d2e"
}

const app = firebase.initializeApp(miConfiguracion);

export const firestore = firebase.firestore(app);