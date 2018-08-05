import React from "react";
import firebaseApp from "../firebase-app";
import firebase from "firebase/app";
import "firebase/auth";
import { withProps } from "recompose";

interface Props {
  anonymous: Function;
  google: Function;
  logout: Function;
}
const Login = ({ anonymous, google, logout }: Props) => (
  <div>
    <button type="button" onClick={() => anonymous()}>
      匿名でログイン
    </button>
    （特に意味はありません）
    <button type="button" onClick={() => google()}>
      Google でログイン
    </button>
    （管理者用）
    <button type="button" onClick={() => logout()}>
      ログアウト
    </button>
  </div>
);

const enhance = withProps(() => {
  const auth = firebaseApp().auth();
  const Provider = firebase.auth.GoogleAuthProvider;
  return {
    anonymous: () => auth.signInAnonymously(),
    google: () => auth.signInWithPopup(new Provider()),
    logout: () => auth.signOut()
  };
});

export default enhance(Login);
