import React, { ReactNode } from "react";
import { Route } from "../../types";

interface Props {
  to: Route;
  children: ReactNode;
}
const Link = ({ to, children }: Props) => <a href={"#/" + to}>{children}</a>;

export default Link;
