import React from "react";
import { ReactElement } from "react";
import { createStore } from "../../node_modules/redux";
import rootReducer from "../reducer";
import { Provider } from "react-redux";

const Root = ({ children }: { children: ReactElement<any> }) => {
  const store = createStore(rootReducer);
  (window as any).store = store;
  return <Provider store={store}>{children}</Provider>;
};

export default Root;
