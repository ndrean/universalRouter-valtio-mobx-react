import React, { useEffect, useState } from "react";

import { observer } from "mobx-react-lite";
import { runInAction } from "mobx";
import Loader from "../utils/Loader";

export const MComponent = observer(({ store }) => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    runInAction(() => store.fetchUsers(6));
    setLoad(false);
  }, [store]);

  console.log("Mcpt");
  return <>{load ? <Loader /> : <MUsers data={store.users} />}</>;
});

const MUsers = observer(({ data }) => (
  <>
    {data &&
      runInAction(() =>
        data.map((user) => <MUser key={user.id} user={user} />)
      )}
  </>
));

const MUser = observer(({ user }) => <p>{user.email}</p>);
