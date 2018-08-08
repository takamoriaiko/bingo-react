import React from "react";
import { Card } from "../../types";

const CardListItem = (card: Card) => (
  <li>
    {card.id}: {card.name}
  </li>
);
export default CardListItem;
