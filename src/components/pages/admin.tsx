import React from "react";
import { connect } from "react-redux";

import { shuffle, next, signInByGoogle, signOut } from "../../commands";
import Link from "../atoms/link";
import { Card, User } from "../../types";
import CardList from "../molecules/card-list";
import CardThumbnail from "../molecules/card-thumbnail";
import {
  upcardSelector,
  sortedHistorySelector,
  historySelector,
  userSelector
} from "../../selectors";
import { State } from "../../reducer";
import CurrentUser from "../atoms/current-user";
import styled from "styled-components";

interface Props {
  upcard: Card | null;
  sortedHistory: Card[];
  history: Card[];
  user: User;
}
const Admin = ({ upcard, sortedHistory, history, user }: Props) => (
  <article>
    <h1>管理</h1>
    <section>
      <CurrentUser user={user} />{" "}
      <button type="button" onClick={signInByGoogle}>
        Google アカウントでログイン
      </button>{" "}
      <button type="button" onClick={signOut}>
        ログアウト
      </button>
    </section>
    <section>
      <h2>そうさ</h2>
      <BigButton type="button" onClick={confirmShuffle}>
        shuffle
      </BigButton>{" "}
      <BigButton type="button" onClick={next}>
        next
      </BigButton>
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
    <p>
      <Link to="index">戻る</Link>
    </p>
  </article>
);

const AdminContainer = connect((state: State) => ({
  upcard: upcardSelector(state),
  sortedHistory: sortedHistorySelector(state),
  history: historySelector(state),
  user: userSelector(state)
}))(Admin);

export default AdminContainer;

const BigButton = styled.button`
  font-size: 2rem;
`;

const confirmShuffle = () => confirm("本当に？") && shuffle();
