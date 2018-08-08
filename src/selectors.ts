import { State } from "./reducer";
import { createSelector } from "reselect";

// これまでに引いたカード
export const historySelector = (state: State) => state.history;

// 現在のカード
export const upcardSelector = (state: State) => state.card;

// 残りのカード
export const stockSelector = (state: State) => state.stock;

// これまでに引いたカードを番号順に
export const sortedHistorySelector = createSelector(historySelector, cards =>
  [...cards].sort((a, b) => a.id - b.id)
);

export const userSelector = (state: State) => state.user;
