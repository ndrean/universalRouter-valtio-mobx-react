export const fetchUsers = async () => {
  try {
    const request = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await request.json();
    //await delay(5000);
    return response;
  } catch (error) {
    return undefined;
  }
};

function delay(t) {
  return new Promise((resolve) => setTimeout(resolve, t));
}

export const fetchComments = async (id) => {
  try {
    const request = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    const response = await request.json();
    await delay(2000);
    return response;
  } catch (error) {
    return undefined;
  }
};
