import { State } from "./reducer";
import { createSelector } from "reselect";

const cardsSelector = (state: State) => state.cards;
const indexSelector = (state: State) => state.index;

// これまでに引いたカード
export const historySelector = createSelector(
  cardsSelector,
  indexSelector,
  (cards, index) => cards.slice(0, index + 1)
);

// 現在のカード
export const upcardSelector = createSelector(
  cardsSelector,
  indexSelector,
  (cards, index) => cards[index]
);

// 残りのカード
export const stockSelector = createSelector(
  cardsSelector,
  indexSelector,
  (cards, index) => cards.slice(index + 1)
);

// これまでに引いたカードを番号順に
export const sortedHistorySelector = createSelector(historySelector, cards =>
  [...cards].sort((a, b) => a.id - b.id)
);
