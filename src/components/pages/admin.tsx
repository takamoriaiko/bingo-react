import React from "react";

import Link from "../atoms/link";
import Controls from "../controls";
import Upcard from "../upcard";
import History from "../history";
import SortedHistory from "../sorted-history";

const Admin = () => (
  <section>
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
    <p>
      <Link to="index">戻る</Link>
    </p>
  </section>
);

export default Admin;