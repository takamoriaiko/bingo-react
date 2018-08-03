// 絵をでかく表示する
import React from "react";
import styled from "styled-components";
import { Card } from "../../types";
import CardNumber from "../atoms/card-number";
import { gap } from "../cssvars";

// TODO: img の max-height を <figure の幅> / 1280 * 824 にしたい

const CardComponent = (card: Card) => (
  <Figure>
    <figcaption>
      <CardNumber card={card} />
      <Name>{card.name}</Name>
    </figcaption>
    <E>
      <Image src={card.image_url} />
    </E>
  </Figure>
);

export default CardComponent;

const Figure = styled.figure`
  margin: 0;
`;

const Name = styled.span`
  font-size: 2rem;
`;

// 絵
const E = styled.div`
  margin-top: ${gap}
  text-align: center;
`;

const Image = styled.img`
  max-width: 100%;
`;
