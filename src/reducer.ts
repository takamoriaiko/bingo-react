import { Card } from "./types";
import { combineReducers } from "../node_modules/redux";

type HistoryAction = { type: "history/set"; payload: Card[] };
const history = (state: Card[] = [], action: HistoryAction) => {
  switch (action.type) {
    case "history/set":
      return action.payload;
    default:
      return state;
  }
};

type CardAction = { type: "card/set"; payload?: Card };
const card = (state: Card | null = null, action: CardAction) => {
  switch (action.type) {
    case "card/set":
      return action.payload || null; // undefined を null に
    default:
      return state;
  }
};

type StockAction = { type: "stock/set"; payload: Card[] };
const stock = (state: Card[] = [], action: StockAction) => {
  switch (action.type) {
    case "stock/set":
      return action.payload;
    default:
      return state;
  }
};

export type Action = HistoryAction | CardAction | StockAction;

const rootReducer = combineReducers({ history, card, stock });
export default rootReducer;
export type State = ReturnType<typeof rootReducer>;
