import { observable, runInAction } from "mobx";
import { fetchComments } from "../utils/fetchUsers";

// central state with attributes and actions

export const mStore = observable({
  users: null,
  pageId: "Mobx",
  fetchUsers: async (id) => {
    const response = await fetchComments(id);
    runInAction(() => (mStore.users = response));
  },
  navigate(pageId) {
    mStore.pageId = pageId;
    if (pageId === "userList") {
      mStore.fetchMUsers();
    }
  }
});
