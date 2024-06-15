import UserContext from "../context/UserContext";
import { useContext } from "react";
const Profile = () => {
  const userContext = useContext(UserContext);
  if (!userContext) {
    return <div>Please log in!</div>;
  }
  const { user } = userContext;

  return (
    <div>{user ? <div>You are logged in: {user?.username}</div> : null}</div>
  );
};

export default Profile;
