import React from "react";
import styled from "styled-components";
import { Card } from "../../types";
import CardNumber from "../atoms/card-number";
import { gap } from "../cssvars";
import CardComponent from "../molecules/card";
import { upcardSelector, historySelector } from "../../selectors";
import { State } from "../../reducer";
import { connect } from "react-redux";

interface Props {
  history: Card[];
  card: Card | null;
}
export const Screen = ({ history, card }: Props) => (
  <Container>
    <CardBlock>{card ? <CardComponent {...card} /> : null}</CardBlock>
    <NumberList>
      {history.map(c => (
        <span key={c.id}>
          <CardNumber card={c} current={c === card} />{" "}
        </span>
      ))}
    </NumberList>
  </Container>
);

const Container = styled.div`
  margin: 0 -${gap};
  display: flex;
`;

const CardBlock = styled.div`
  flex: 2;
  margin: 0 ${gap};
`;

const NumberList = styled.div`
  flex: 1;
  margin: 0 ${gap}
  line-height: 4rem;
`;

const mapStateToProps = (state: State) => ({
  card: upcardSelector(state),
  history: historySelector(state)
});

const ScreenContainer = connect(mapStateToProps)(Screen);
export default ScreenContainer;
