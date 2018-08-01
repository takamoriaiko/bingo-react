import React from "react";
import { connect } from "react-redux";
import { Card } from "../types";
import { State } from "../reducer";
import { sortedHistorySelector } from "../selectors";

interface Props {
  cards: Card[];
}
const SortedStock = ({ cards }: Props) => (
  <ul>
    {cards.map(card => (
      <li key={card.id}>
        {card.id}: {card.name}
      </li>
    ))}
  </ul>
);

const mapStateToProps = (state: State) => ({
  cards: sortedHistorySelector(state)
});

export default connect(mapStateToProps)(SortedStock);
