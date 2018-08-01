import React from "react";
import { Dispatch } from "redux";
import { Action } from "../reducer";
import { shuffle, next } from "../action-creators";
import { connect } from "react-redux";

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

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  shuffle: () => shuffle(dispatch),
  next: () => dispatch(next())
});

export default connect(
  null,
  mapDispatchToProps
)(Controls);
