import { Card } from "../types";

export default interface Repository {
  shuffle(cards: Card[]): void;
  next(): void;
  // 保存されたデータを読みに行く
  load(): void;

  on(event: "stockchanged", listener: (cards: Card[]) => void): void;
  on(event: "historychanged", listener: (cards: Card[]) => void): void;
  on(event: "cardchanged", listener: (card: Card) => void): void;
}
