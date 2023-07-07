const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

  //Get Search Users
  export const searchUsers = async (text) => {
    // setLoading();

    const params = new URLSearchParams({ q: text });

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const { items } = await response.json();
    // console.log(data);
    // setUsers(data);
    // setLoading(false);

    // dispatch({
    //   type: "GET_USERS",
    //   payload: items,
    // });
    return items
  };
