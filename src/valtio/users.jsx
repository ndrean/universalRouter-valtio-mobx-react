import React, { useEffect, useState } from "react";
import { useSnapshot } from "valtio";

import Users from "../utils/users";
import Loader from "../utils/Loader";

export default function VComponent({ store }) {
  const { users } = useSnapshot(store);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    store.getUsers(1).then(() => setLoading(false));
  }, [store]);

  console.log("valtio users");
  return <>{loading ? <Loader /> : <Users data={users} />}</>;
}
