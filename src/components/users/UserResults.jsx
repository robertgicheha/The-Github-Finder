import { useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "../users/UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);
  const { users, loading, fetchUsers } = useContext(GithubContext);

  useEffect(() => {
    fetchUsers();
  });

  // const fetchUsers = async () => {
  //   const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
  //     headers: {
  //       Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  //     },
  //   });
  //   const data = await response.json();
  //   // console.log(data);
  //   setUsers(data);
  //   setLoading(false);
  // };

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-d lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          //   <h3>{user.login}</h3>
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
