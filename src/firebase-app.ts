import firebase from "firebase/app";
let app: firebase.app.App | null = null;

const firebaseApp = () => {
  if (app) return app;
  const config = {
    apiKey: "AIzaSyC3l2TGLPC_iyOCNuDN-qZBCxzv5FaT8qE",
    authDomain: "bingo-24372.firebaseapp.com",
    databaseURL: "https://bingo-24372.firebaseio.com",
    projectId: "bingo-24372",
    storageBucket: "bingo-24372.appspot.com",
    messagingSenderId: "262294683137"
  };
  return (app = firebase.initializeApp(config));
};

export default firebaseApp;
