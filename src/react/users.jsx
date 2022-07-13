import React, { useEffect, useState } from "react";

import { fetchComments } from "../utils/fetchUsers";
import { Users } from "../utils/users";
import Loader from "../utils/Loader";

export default function RComponent() {
  const [users, setUsers] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComments(4).then((data) => setUsers(<Users data={data} />));
    setLoading(false);
  }, []);

  console.log("react users");
  return <>{loading ? <Loader /> : <div>{users}</div>}</>;
}
