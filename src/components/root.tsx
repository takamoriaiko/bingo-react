import React from "react";
import { ReactElement } from "react";
import createStore from "../store";
import { Provider } from "react-redux";
import Repository from "../repository/repository";

interface Props {
  repository: Repository;
  children: ReactElement<any>;
}

const Root = ({ repository, children }: Props) => {
  const store = createStore(repository);
  (window as any).store = store;
  return <Provider store={store}>{children}</Provider>;
};

export default Root;
