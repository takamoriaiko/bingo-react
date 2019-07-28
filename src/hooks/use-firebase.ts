import firebaseApp from "../firebase-app";
import { Dispatch } from "redux";
import { Action } from "../reducer";
import { useEffect, useState } from "react";
import { Card } from "../types";

// firebase realtime database が更新されたら dispatch する
// TODO: firestore に変える
const useDatabase = (dispatch: Dispatch<Action>) => {
  // cards, index から history, card, stock を作る
  const db = firebaseApp().database(); // TODO: 外から渡したほうが良いよ
  // cards
  const [cards, setCards] = useState<Card[]>([]);
  useEffect(() => {
    const ref = db.ref("cards");
    const f = ref.on("value", snapshot => {
      if (!snapshot) return;
      setCards(snapshot.val() || []);
    });
    return () => ref.off("value", f as any);
  }, [dispatch]);
  // index
  const [index, setIndex] = useState(-1);
  useEffect(() => {
    const ref = db.ref("index");
    const f = ref.on("value", snapshot => {
      if (!snapshot) return;
      setIndex(snapshot.val());
    });
    return () => ref.off("value", f as any);
  }, [dispatch]);

  // history
  useEffect(() => {
    dispatch({ type: "history/set", payload: cards.slice(0, index + 1) });
  }, [dispatch, cards, index]);
  // card
  useEffect(() => {
    dispatch({ type: "card/set", payload: cards[index] });
  }, [dispatch, cards, index]);
  // stock
  useEffect(() => {
    dispatch({ type: "stock/set", payload: cards.slice(index + 1) });
  }, [dispatch, cards, index]);
};

// firebase auth のログイン状態
const useAuth = (dispatch: Dispatch<Action>) =>
  useEffect(
    () =>
      firebaseApp()
        .auth()
        .onAuthStateChanged(user => {
          if (user) {
            dispatch({ type: "user/login", payload: user });
          } else {
            dispatch({ type: "user/logout" });
          }
        }),
    [dispatch]
  );
const useFirebase = (dispatch: Dispatch<Action>) => {
  useDatabase(dispatch);
  useAuth(dispatch);
};
export default useFirebase;
