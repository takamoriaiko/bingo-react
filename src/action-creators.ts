import { Card } from "./types";
// import repository from "./repository/local-repository";
import repository from "./repository/firebase-repository";

// くばる
export const shuffle = async () => {
  const response = await fetch("/assets/aiko.json");
  const cards: Card[] = await response.json();
  repository.shuffle(cards);
};

// export const next = (): Action => ({ type: "next" });
export const next = () => repository.next();
