import React, { useEffect, useState } from "react";
import { useSnapshot } from "valtio";

import { vStore } from "./vStore";
import Loader from "../utils/Loader";
import { Users } from "../utils/users";

export function VComponentAfter() {
  const { users } = useSnapshot(vStore);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    vStore.getUsers(1);
    setLoading(false);
  }, []);

  console.log("valtio users");
  return <>{loading ? <Loader /> : <Users data={users} />}</>;
}

export function VComponentBefore({ users }) {
  return <Users data={users} />;
}
