import React from "react";
import Root from "./components/root";
//import repository from "./repository/local-repository";
import repository from "./repository/firebase-repository";
import { lifecycle } from "recompose";
import Router from "./components/router";

const App = () => (
  <Root repository={repository}>
    <Router />
  </Root>
);

const enhance = lifecycle({
  componentDidMount() {
    repository.load();
  }
});

export default enhance(App);
