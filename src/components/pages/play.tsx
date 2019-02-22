import React, { useContext } from "react";

import { Card } from "../../types";
import CardThumbnail from "../molecules/card-thumbnail";
import CardList from "../molecules/card-list";
import {
  upcardSelector,
  sortedHistorySelector,
  historySelector
} from "../../selectors";
import { StateContext } from "../../contexts";

interface Props {
  upcard: Card | null;
  sortedHistory: Card[];
  history: Card[];
}
const Play = ({ upcard, sortedHistory, history }: Props) => (
  <section>
    <section>
      <h2>あそびかた</h2>
      <p>手元の紙に 5 x 5 のマスを書いてね。</p>
      <p>まんなかはフリーだよ。</p>
      <p>
        たて、よこ、ななめのどれか1列そろったら手をあげて「ビンゴ！」とさけんでね。
      </p>
    </section>
    <section>
      <h2>今の</h2>
      <CardThumbnail card={upcard} />
    </section>
    <section>
      <h2>りれき (番号順)</h2>
      <CardList cards={sortedHistory} />
    </section>
    <section>
      <h2>りれき (出た順)</h2>
      <CardList cards={history} />
    </section>
  </section>
);

/* const PlayContainer = connect((state: State) => ({
  upcard: upcardSelector(state),
  sortedHistory: sortedHistorySelector(state),
  history: historySelector(state)
}))(Play);
 */
const PlayContainer = () => {
  const state = useContext(StateContext);
  const props = {
    upcard: upcardSelector(state),
    sortedHistory: sortedHistorySelector(state),
    history: historySelector(state)
  };
  return <Play {...props} />;
};
export default PlayContainer;
