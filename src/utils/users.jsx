import React from "react";
import { User, MUser } from "./user";
import { observer } from "mobx-react-lite";

export const MUsers = observer(({ data }) => {
  console.log("MUSERS");
  return (
    <>{data && data.map((user) => <MUser key={user.email} user={user} />)}</>
  );
});

export const Users = ({ data }) => {
  console.log("USERS");
  return (
    <>{data && data.map((user) => <User key={user.email} user={user} />)}</>
  );
};
