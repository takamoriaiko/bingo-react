import React from "react";
import Router from "./components/router";
import rootReducer from "./reducer";
import useRedux from "./hooks/use-redux";
import useFirebase from "./hooks/use-firebase";
import useHistory from "./hooks/use-history";
import { StateContext, DispatchContext } from "./contexts";

const App = () => {
  const [state, dispatch] = useRedux(rootReducer);
  useFirebase(dispatch);
  useHistory(dispatch);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Router />
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};
export default App;
