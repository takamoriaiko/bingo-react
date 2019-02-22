import React, { useContext, useDebugValue } from "react";
import Index from "./pages/index";
import Admin from "./pages/admin";
import Screen from "./pages/screen";
import Play from "./pages/play";
import { StateContext } from "../contexts";

const Router = () => {
  const { route } = useContext(StateContext);
  useDebugValue(route);
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
export default Router;
