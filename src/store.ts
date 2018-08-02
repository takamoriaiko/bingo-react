import { createStore, Dispatch } from "redux";
import rootReducer, { Action } from "./reducer";
import Repository from "./repository/repository";
import firebaseApp from "./firebase-app";
import history from "./history";

const store = (repository: Repository) => {
  const store = createStore(rootReducer);
  const dispatch: Dispatch<Action> = store.dispatch.bind(store);

  // 保存されたデータが変更されたらストアに伝える
  repository.on("historychanged", cards => {
    dispatch({ type: "history/set", payload: cards });
  });

  repository.on("cardchanged", card => {
    dispatch({ type: "card/set", payload: card });
  });

  repository.on("stockchanged", cards => {
    dispatch({ type: "stock/set", payload: cards });
  });

  // firebase auth のログイン状態
  firebaseApp()
    .auth()
    .onAuthStateChanged(user => {
      if (user) {
        dispatch({ type: "user/login", payload: user });
      } else {
        dispatch({ type: "user/logout" });
      }
    });

  history(dispatch);

  return store;
};

export default store;
