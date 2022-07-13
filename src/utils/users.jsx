import React from "react";
import { User } from "./user";

export const Users = ({ data }) => {
  console.log("USERS");
  return (
    <>{data && data.map((user) => <User key={user.email} user={user} />)}</>
  );
};
