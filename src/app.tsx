import React, { Fragment } from "react";
import Root from "./components/root";
import Controls from "./components/controls";
import Upcard from "./components/upcard";
import History from "./components/history";
import Stock from "./components/stock";
import SortedHistory from "./components/sorted-history";

const App = () => (
  <Root>
    <>
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
export default App;
