import firebase from "firebase/app";
import "firebase/database";

const config = {
    // API KEYS
    apiKey: "AIzaSyBH-NmIgVdiDTj6ZDkrjNSLcrxK1v0IvN0",
    authDomain: "firechat-vue-497ef.firebaseapp.com",
    databaseURL: "https://firechat-vue-497ef-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "firechat-vue-497ef",
    storageBucket: "firechat-vue-497ef.appspot.com",
    messagingSenderId: "28034673110",
    appId: "1:28034673110:web:f600ccab198d38793f5c77"
}

const db = firebase.initializeApp(config);
export default db;