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
  return items;
};
//Get a Single User
export const getUser = async (login) => {
  // setLoading();

  const response = await fetch(`${GITHUB_URL}/user/${login}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  if (response.status === 404) {
    window.location = "/notfound";
  } else {
    const { data } = await response.json();
    // console.log(data);
    // setUsers(data);
    // setLoading(false);

    // dispatch({
    //   type: "GET_USER ",
    //   payload: data,
    // });
    return data;
  }
};

//Get  User Repos
export const getUserRepos = async (login) => {
  // setLoading();

  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });

  const response = await fetch(`${GITHUB_URL}/users/${params}/repos`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  const { data } = await response.json();
  // console.log(data);
  // setUsers(data);
  // setLoading(false);

  // dispatch({
  //   type: "GET_REPOS",
  //   payload: data, 
  // });
  return data;
};
