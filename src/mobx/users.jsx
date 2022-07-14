import React, { useEffect, useState } from "react";

import { observer } from "mobx-react-lite";
import { runInAction } from "mobx";
import Loader from "../utils/Loader";

export const MComponent = observer(function MComponent({ store }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    runInAction(() => store.fetchUsers(7)).then(() => setLoading(false));
  }, [store]);

  console.log("Mcpt");
  return <>{loading ? <Loader /> : <MUsers data={store.users} />}</>;
});

export const MUsers = observer(function MUsers({ data }) {
  console.log("Musers");
  return <>{data && data.map((user) => <MUser key={user.id} user={user} />)}</>;
});

export const MUser = observer(function MUser({ user }) {
  return <p>{user.email}</p>;
});
