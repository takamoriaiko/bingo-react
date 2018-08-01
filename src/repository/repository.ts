import { Card } from "../types";

export default interface Repository {
  shuffle(cards: Card[]): void;
  next(): void;
  load(): void;

  on(event: "stockchanged", listener: (cards: Card[]) => void): void;
  on(event: "historychanged", listener: (cards: Card[]) => void): void;
  on(event: "cardchanged", listener: (card: Card) => void): void;
}
