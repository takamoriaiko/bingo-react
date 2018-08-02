import { Dispatch } from "redux";
import { Action } from "./reducer";

const start = (dispatch: Dispatch<Action>) => {
  const navigate = (hash: string) => {
    const path = location.hash.replace(/^#\/?/, "") || "index";
    dispatch({ type: "route/navigate", payload: path });
  };
  window.addEventListener("popstate", () => navigate(location.hash));
  navigate(location.hash);
};
export default start;
