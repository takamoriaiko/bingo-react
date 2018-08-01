import { createStore, Dispatch } from "redux";
import rootReducer, { Action } from "./reducer";
import Repository from "./repository/repository";

const store = (repository: Repository) => {
  const store = createStore(rootReducer);
  const dispatch: Dispatch<Action> = store.dispatch.bind(store);

  // 保存されたデータが変更されたらストアに伝える
  repository.on("historychanged", cards => {
    console.log("history かわり", cards);
    dispatch({ type: "history/set", payload: cards });
  });

  repository.on("cardchanged", card => {
    dispatch({ type: "card/set", payload: card });
  });

  repository.on("stockchanged", cards => {
    dispatch({ type: "stock/set", payload: cards });
  });

  return store;
};

export default store;
