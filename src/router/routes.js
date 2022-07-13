import React, { Suspense, lazy } from "react";
import Loader from "../utils/Loader";
import { runInAction } from "mobx";

const routes = [
  {
    // the wrapping route that will put a Navbar on top and render children below
    path: "",
    action: async ({ next }) => {
      const content = await next();
      if (content.redirect) {
        return content;
      }
      //console.log("content router", content);
      return import("./NavBar").then(({ default: NavBar }) => (
        <NavBar>{content}</NavBar>
      ));
    },
    children: [
      {
        path: "/",
        action: async () =>
          import("../utils/Home").then(({ default: Home }) => <Home />)
      },
      {
        path: "/vusers1",
        async action({ vStore }) {
          await vStore.getUsers(2);
          const { Users } = await import("../utils/users");
          //const {Users} = lazy(() => import("../utils/users"));
          //console.log(Users);
          return (
            <Suspense fallback={Loader()}>
              <Users data={vStore.users} />
            </Suspense>
          );
        }
      },
      {
        path: "/vusers2",
        async action({ vStore }) {
          const { VComponentAfter } = await import("../valtio/users");

          return <VComponentAfter store={vStore} />;
        }
      },
      {
        path: "/rusers",
        async action() {
          const { default: RComponent } = await import("../react/users");

          return <RComponent />;
        }
      },
      {
        path: "/musers1",
        async action({ mStore }) {
          await runInAction(() => mStore.fetchUsers(6));
          const { MUsers } = await import("../utils/users");
          return runInAction(() => (
            <Suspense fallback={Loader()}>
              <MUsers data={mStore.users} />;
            </Suspense>
          ));
        }
      },
      {
        path: "/musers2",
        async action({ mStore }) {
          const { MComponent } = await import("../mobx/users");
          return <MComponent store={mStore} />;
        }
      },

      {
        path: "(.*)",
        action: () => <h1>404...</h1>
      }
    ]
  }
];

export default routes;
