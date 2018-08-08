// 副作用を起こすやつら

import firebaseApp from "./firebase-app";
import firebase from "firebase/app";
import "firebase/auth";
import repository from "./repository/firebase-repository";
import { Card } from "./types";

// カードを配る
export const shuffle = async () => {
  const response = await fetch("./assets/aiko.json");
  const cards: Card[] = await response.json();
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
