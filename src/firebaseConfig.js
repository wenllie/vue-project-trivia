import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'

import { getAuth } from 'firebase/auth'
import "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDFwLRQwkM6Zs_Ycwq4Z_1KQS_HjVZi9rs",
  authDomain: "trivia-vue-project.firebaseapp.com",
  databaseURL: "https://trivia-vue-project-default-rtdb.firebaseio.com",
  projectId: "trivia-vue-project",
  storageBucket: "trivia-vue-project.appspot.com",
  messagingSenderId: "137567517880",
  appId: "1:137567517880:web:198b79f0145537e246484d"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const auth = getAuth();

export { app, auth, database }