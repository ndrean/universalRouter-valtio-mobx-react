import React from "react";
import { User } from "./user";

const Users = ({ data }) => (
  <>{data && data.map((user) => <User key={user.email} user={user} />)}</>
);

export default Users;
