import React from "react";
import { Card as CardType } from "../types";
import { State } from "../reducer";
import { upcardSelector } from "../selectors";
import { connect } from "react-redux";

interface Props {
  card?: CardType;
}

const CardOrEmpty = ({ card }: Props) => {
  if (card) return <Card {...card} />;
  else return <div />;
};

const Card = (card: CardType) => (
  <article>
    <figure>
      <figcaption>
        {card.id} {card.name}
      </figcaption>
      <img src={card.image_url} style={{ maxHeight: "240px" }} />
    </figure>
  </article>
);

const mapStateToProps = (state: State) => ({ card: upcardSelector(state) });

export default connect(mapStateToProps)(CardOrEmpty);
