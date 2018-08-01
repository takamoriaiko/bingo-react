import { Card } from "./types";

export interface State {
  cards: Card[];
  index: number;
}

export type Action = { type: "initialize"; payload: Card[] } | { type: "next" };

const initialState: State = { cards: [], index: -1 };

export const cards = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "initialize":
      return { cards: action.payload, index: -1 };
    case "next":
      return { ...state, index: state.index + 1 };
    default:
      return state;
  }
};

const rootReducer = cards;
export default rootReducer;
