import React from "react";

import Upcard from "../upcard";
import History from "../history";
import SortedHistory from "../sorted-history";

const Screen = () => (
  <section>
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

export default Screen;
