import React from "react";
import CardListItem from "../atoms/card-list-item";
import { Card } from "../../types";

interface Props {
  cards: Card[];
}
const CardList = ({ cards }: Props) => (
  <ul>
    {cards.map(c => (
      <CardListItem {...c} />
    ))}
  </ul>
);

export default CardList;
