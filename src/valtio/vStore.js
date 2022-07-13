import { proxy, useSnapshot } from "valtio";
import { fetchComments } from "../utils/fetchUsers";

export { useSnapshot };

export const vStore = proxy({
  users: null,
  async getUsers(id) {
    vStore.users = await fetchComments(id);
  },
  navigate(path) {
    if (path === "userList") {
      vStore.getUsers();
    }
  }
});
