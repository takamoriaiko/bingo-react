import React from "react";
import Root from "./components/root";
import Controls from "./components/controls";
import Upcard from "./components/upcard";
import History from "./components/history";
import Stock from "./components/stock";
import SortedHistory from "./components/sorted-history";
//import repository from "./repository/local-repository";
import repository from "./repository/firebase-repository";
import { lifecycle } from "recompose";

const App = () => (
  <Root repository={repository}>
    <>
      <p>
        <a href="https://github.com/takamoriaiko/bingo-react">GitHub</a>
      </p>
      <Controls />
      <section>
        <h2>今の</h2>
        <Upcard />
      </section>
      <section>
        <h2>りれき (番号順)</h2>
        <SortedHistory />
      </section>
      <section>
        <h2>りれき (出た順)</h2>
        <History />
      </section>
      <section>
        <h2>のこり</h2>
        <Stock />
      </section>
    </>
  </Root>
);

const enhance = lifecycle({
  componentDidMount() {
    repository.load();
  }
});

export default enhance(App);
