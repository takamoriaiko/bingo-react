import React from "react";
import { User } from "../../types";

interface Props {
  user: User;
}
const CurrentUser = ({ user }: Props) => (
  <>
    🙂
    {user.displayName || "ななしさん"}
  </>
);

export default CurrentUser;
