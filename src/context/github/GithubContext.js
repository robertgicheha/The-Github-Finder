import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  //   const [users, setUsers] = useState([]);
  //   const [loading, setLoading] = useState(true);
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  //Get Initial users for testing purposes

  // const fetchUsers = async () => {
  //   setLoading();

  //   const response = await fetch(`${GITHUB_URL}/users`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });
  //   const data = await response.json();
  //   // console.log(data);
  //   // setUsers(data);
  //   // setLoading(false);

  //   dispatch({
  //     type: "GET_USERS",
  //     payload: data,
  //   });
  // };

 
  //Clear users from state
  // const clearUsers = () => dispatch({ type: "CLEAR_USERS " });

  //set loading
  // const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
        // users: state.user,
        // loading: state.loading,
        // user: state.user,
        // repos: state.repos,
        // clearUsers,
        // getUser,
        // getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
