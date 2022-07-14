import React, { Suspense } from "react";
import { runInAction } from "mobx";
import { fetchComments } from "../utils/fetchUsers";

const routes = [
  {
    // the wrapping route that will put a Navbar on top and render children below
    path: "",
    action: async ({ next }) => {
      const content = await next();
      const { default: NavBar } = await import("./NavBar");
      return content && <NavBar>{content}</NavBar>;
    },
    children: [
      {
        path: "/",
        action: async () =>
          import("../utils/Home").then(({ default: Home }) => <Home />)
      },
      {
        path: "/valtio",
        children: [
          {
            path: "/before",
            async action({ vStore }) {
              await vStore.getUsers(2);
              const { default: Users } = await import("../utils/users");
              return <Users data={vStore.users} />;
            }
          },
          {
            path: "/after",
            async action({ vStore }) {
              const { default: VComponent } = await import("../valtio/users");
              return <VComponent store={vStore} />;
            }
          }
        ]
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
          const { MUsers } = await import("../mobx/users");
          return runInAction(() => <MUsers data={mStore.users} />);
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
        path: "/users",
        action: async () => {
          const users = await fetchComments(8);
          const { default: Users } = await import("../utils/users");
          return <Users data={users} />;
        }
      },
      {
        path: "(.*)",
        action: () =>
          import("../utils/Peugeot").then(({ default: Peugeot }) => <Peugeot />)
      }
    ]
  }
];

export default routes;
