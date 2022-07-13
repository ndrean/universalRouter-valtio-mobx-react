import React from "react";
import { observer } from "mobx-react-lite";
import history from "./history";

const Users = observer(({ store }) => {
  const handleClick = (e) => {
    e.preventDefault();
    history.push({ pathname: e.target.pathname });
  };

  function handleSubmit(e) {
    e.preventDefault();
    let query = Object.fromEntries(new FormData(e.currentTarget));
    const { pathname, search } = window.location;
    const qstring = new URLSearchParams(search);
    for (const k in query) {
      qstring.append(k, query[k]);
    }
    history.push({ pathname, search: "?" + qstring });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="number" name="nb" />
        <button>Search a user (nb)</button>
      </form>
      <ul>
        {store.users.map((user) => (
          <li key={user.id}>
            {" "}
            {user.id},{" "}
            <a href={`/users/${user.id}`} onClick={handleClick}>
              {user.email}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
});

export default Users;
