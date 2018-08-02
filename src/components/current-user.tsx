import React from "react";
import { User } from "../types";
import { State } from "../reducer";
import { connect } from "react-redux";

interface Props {
  user: User;
}
const CurrentUser = ({ user }: Props) => (
  <p>
    🙂
    {user.displayName || "ななしさん"}
  </p>
);
const mapStateToProps = ({ user }: State) => ({ user });
export default connect(mapStateToProps)(CurrentUser);
