import React from "react";

import Upcard from "../upcard";
import History from "../history";
import SortedHistory from "../sorted-history";

const Play = () => (
  <section>
    <section>
      <h2>あそびかた</h2>
      <p>手元の紙に 5 x 5 のマスを書いてね。</p>
      <p>まんなかはフリーだよ。</p>
    </section>
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
  </section>
);

export default Play;
