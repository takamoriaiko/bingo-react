// 副作用を起こすやつら

import firebaseApp from "./firebase-app";
import firebase from "firebase/app";
import "firebase/auth";
import repository from "./repository/firebase-repository";

// カードを配る
export const shuffle = async () => {
  const cards = (await import("../assets/aiko.json")).default;
  // console.log(cards);
  repository.shuffle(cards);
};

// デッキをめくる
export const next = () => repository.next();

// 匿名でログイン
export const signInAnonymously = () =>
  firebaseApp()
    .auth()
    .signInAnonymously();

// グーグルでログイン
export const signInByGoogle = () =>
  firebaseApp()
    .auth()
    .signInWithPopup(new firebase.auth.GoogleAuthProvider());

// ログアウト
export const signOut = () =>
  firebaseApp()
    .auth()
    .signOut();
