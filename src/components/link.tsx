import React, { ReactNode } from "react";
import { Route } from "../types";
import { connect } from "react-redux";
import { Action } from "../reducer";
import { Dispatch } from "redux";

interface Props {
  to: Route;
  navigate(to: Route): void;
  children: ReactNode;
}
const Link = ({ to, navigate, children }: Props) => (
  <a
    href={"#/" + to}
    onClick={e => {
      navigate(to);
      e.preventDefault();
    }}
  >
    {children}
  </a>
);

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  navigate: (to: Route) => dispatch({ type: "route/navigate", payload: to })
});

export default connect(
  null,
  mapDispatchToProps
)(Link);
