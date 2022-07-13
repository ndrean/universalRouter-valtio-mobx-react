export const fetchUsers = async () => {
  try {
    const request = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await request.json();
    return response;
  } catch (error) {
    return undefined;
  }
};

export const fetchComments = async (id) => {
  try {
    const request = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    const response = await request.json();
    return response;
  } catch (error) {
    return undefined;
  }
};
