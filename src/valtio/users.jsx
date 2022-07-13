import React, { useEffect, useState } from "react";
import { useSnapshot } from "valtio";

//import { vStore } from "./vStore";
import Loader from "../utils/Loader";
import { Users } from "../utils/users";

export function VComponentAfter({ store }) {
  const { users } = useSnapshot(store);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    store.getUsers(1);
    setLoading(false);
  }, [store]);

  console.log("valtio users");
  return <>{loading ? <Loader /> : <Users data={users} />}</>;
}

export function VComponentBefore({ users }) {
  return <Users data={users} />;
}
