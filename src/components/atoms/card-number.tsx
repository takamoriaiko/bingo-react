import React from "react";
import styled, { css } from "styled-components";
import { Card } from "../../types";

interface Props {
  card: Card;
  current?: boolean;
}
const CardNumber = ({ card: { id }, current }: Props) => (
  <Box highlight={current} n={id}>
    {id}
  </Box>
);
export default CardNumber;

interface BoxProps {
  n: number;
  highlight?: boolean;
}
const Box = styled.span<BoxProps>`
  display: inline-block;
  font-size: 2rem;
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  vertical-align: baseline;
  border-radius: 3px;
  background: ${props => `hsl(${hue(Number(props.n))}, 50%, 80%)`};
  ${props =>
    props.highlight &&
    css`
      box-shadow: 0 0 0.5rem 0.2rem gold;
    `};
`;

const hue = (id: number) => {
  // 10 ごとに色がかわる
  return (Math.ceil(id / 10) * 74) % 360;
};
