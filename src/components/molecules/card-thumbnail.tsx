import React from "react";
import { Card } from "../../types";

interface Props {
  card?: Card | null;
}

const CardThumbnail = ({ card }: Props) => {
  if (card) return <Thumbnail {...card} />;
  else return <div />;
};

const Thumbnail = (card: Card) => (
  <article>
    <figure>
      <figcaption>
        {card.id} {card.name}
      </figcaption>
      <img src={card.image_url} style={{ maxHeight: "240px" }} />
    </figure>
  </article>
);

export default CardThumbnail;
