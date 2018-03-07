import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyBJIZg1CzU3yzCJ_LC0GUhqW4OZoRrqXdA",
  authDomain: "qwe1-19e91.firebaseapp.com",
  databaseURL: "https://qwe1-19e91.firebaseio.com",
  projectId: "qwe1-19e91",
  storageBucket: "qwe1-19e91.appspot.com",
  messagingSenderId: "333400486020"
  };


const devConfig = {
  apiKey: "AIzaSyBJIZg1CzU3yzCJ_LC0GUhqW4OZoRrqXdA",
  authDomain: "qwe1-19e91.firebaseapp.com",
  databaseURL: "https://qwe1-19e91.firebaseio.com",
  projectId: "qwe1-19e91",
  storageBucket: "qwe1-19e91.appspot.com",
  messagingSenderId: "333400486020"
  };

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
