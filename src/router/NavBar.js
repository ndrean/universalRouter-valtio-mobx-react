import React from "react";
//import { action } from "mobx";
//import { observer } from "mobx-react-lite";
import history from "./history.js";
import { navElts } from "./navElts";

const Link = ({ path, title, handler }) => (
  <a href={path} onClick={handler} style={{ margin: 10 }}>
    {title}
  </a>
);

const NavBar = ({ children }) => {
  function handleNav(e) {
    e.preventDefault();
    history.push({ pathname: e.target.pathname });
  }

  return (
    <div>
      {navElts.map(({ path, title }) => (
        <Link key={title} path={path} title={title} handler={handleNav} />
      ))}
      <br />
      <hr />
      {children}
    </div>
  );
};

export default NavBar;
