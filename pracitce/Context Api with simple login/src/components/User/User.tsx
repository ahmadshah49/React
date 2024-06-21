import React, { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import UserContext from "../../context/UserContext";

const User = () => {
  const users = useContext(UserContext);
  const { user } = useParams();

  return (
    <div className="text-3xl bg-red-500 text-center">
      User:{user}
      <div className="flex flex-wrap gap-4 bg-black">
        {users ? (
          users.map((username) => (
            <NavLink
              key={username}
              to={`/user/${username}`}
              className={({ isActive }) =>
                `text-white font-bold py-2 px-4 rounded m-1 ${
                  isActive ? "bg-white text-black" : "bg-blue-500"
                }`
              }
            >
              {username}
            </NavLink>
          ))
        ) : (
          <p className="text-white">No users available</p>
        )}
      </div>
    </div>
  );
};

export default User;
