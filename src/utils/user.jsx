import React from "react";
import { observer } from "mobx-react-lite";
export const MUser = observer(({ user }) => <p>{user.email}</p>);
export const User = ({ user }) => <p>{user.email}</p>;
