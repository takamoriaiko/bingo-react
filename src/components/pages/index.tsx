import React from "react";
import Link from "../atoms/link";

const Index = () => (
  <section>
    <h1>こんにちは</h1>
    <p>
      <Link to="play">あそぶ</Link>
    </p>
    <p>
      <Link to="admin">admin</Link>
    </p>
    <p>
      <Link to="screen">screen</Link>
    </p>
    <hr />
    <p>
      <a href="https://github.com/takamoriaiko/bingo-react">GitHub</a>
    </p>
  </section>
);

export default Index;
