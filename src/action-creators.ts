import { Dispatch } from "../node_modules/redux";
import { Card } from "./types";
import { Action } from "./reducer";

// くばる
export const shuffle = async (dispatch: Dispatch<Action>) => {
  const response = await fetch("/assets/aiko.json");
  const cards: Card[] = await response.json();
  dispatch({ type: "initialize", payload: shuffled(cards) });
};

export const next = (): Action => ({ type: "next" });

const shuffled = <T>(array: T[]): T[] => {
  const a = [...array];
  const swap = (i: number, j: number) => {
    const t = a[i];
    a[i] = a[j];
    a[j] = t;
  };
  const r = (n: number) => (Math.random() * n) | 0;
  for (let i = a.length - 1; i > 0; --i) {
    swap(i, r(i + 1));
  }
  return a;
};
shuffled([1]);
