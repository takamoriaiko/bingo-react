import { Card, Route, User } from "./types";
import { combineReducers } from "redux";

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

type RouteAction = { type: "route/navigate"; payload: Route | string };
const route = (state: Route | string = "index", action: RouteAction) => {
  switch (action.type) {
    case "route/navigate":
      return action.payload;
    default:
      return state;
  }
};

const guest: User = { uid: "0", displayName: "ログインしていない" };
type UserAction =
  | { type: "user/login"; payload: User }
  | { type: "user/logout" };
const user = (state: User = guest, action: UserAction) => {
  switch (action.type) {
    case "user/login":
      return action.payload;
    case "user/logout":
      return guest;
    default:
      return state;
  }
};

export type Action =
  | HistoryAction
  | CardAction
  | StockAction
  | RouteAction
  | UserAction;

const rootReducer = combineReducers({ history, card, stock, route, user });
export default rootReducer;
export type State = ReturnType<typeof rootReducer>;
