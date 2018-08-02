import React from "react";
import { connect } from "react-redux";

import { State } from "../reducer";
import { Route } from "../types";
import Index from "./pages/index";
import Admin from "./pages/admin";
import Screen from "./pages/screen";
import Play from "./pages/play";

const Router = ({ route }: { route: Route }) => {
  console.log("route", route);
  switch (route) {
    case "index":
      return <Index />;
    case "admin":
      return <Admin />;
    case "play":
      return <Play />;
    case "screen":
      return <Screen />;
    default:
      return <div>not found</div>;
  }
};

export default connect(({ route }: State) => ({ route }))(Router);
