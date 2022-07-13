import { createRoot } from "react-dom/client";
import React from "react";

import UniversalRouter from "universal-router";
import history from "./router/history";
import { configure } from "mobx";
import routes from "./router/routes";
import { mStore } from "./mobx/mStore";
import { vStore } from "./valtio/vStore";

configure({
  enforceActions: "observed",
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true
});

const context = { mStore, vStore };

const router = new UniversalRouter(routes, { context });
const root = createRoot(document.getElementById("root"));

async function renderRoute(location) {
  try {
    // "history" returns a path, and "router" finds a match in the routes array
    const page = await router.resolve({
      pathname: location.pathname
    });

    //if (page.redirect) {
    //  return history.push({ pathname: page.redirect, search: "" });
    //}
    //return root.render(<React.StrictMode>{page}</React.StrictMode>);
    return root.render(<>{page}</>);
  } catch (err) {
    console.log(err);
    //return root.render(<p>Wrong!</p>);
  }
}

history.push("/");

history.listen(({ location }) => renderRoute(location));
renderRoute(history.location);
