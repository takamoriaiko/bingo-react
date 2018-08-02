import React from "react";
import { shuffle, next } from "../action-creators";
import { withProps } from "recompose";

interface Props {
  shuffle(): void;
  next(): void;
}

const Controls = ({ shuffle, next }: Props) => (
  <div>
    <button type="button" onClick={shuffle}>
      shuffle
    </button>
    <button type="button" onClick={next}>
      next
    </button>
  </div>
);

export default withProps({ shuffle, next })(Controls);
