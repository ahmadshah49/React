import React from "react";
import { NavLink, useParams } from "react-router-dom";

const users = [
  "ahmad",
  "bilal",
  "name",
  "ali",
  "usman",
  "hassan",
  "hussain",
  "kamran",
  "faisal",
  "salman",
  "sana",
  "fatima",
  "aisha",
  "zainab",
  "maryam",
  "umar",
  "hamza",
  "yasir",
  "nadeem",
  "imran",
  "zaheer",
  "kashif",
  "shahid",
  "rafay",
  "waqas",
  "farhan",
  "irfan",
  "jawad",
  "asim",
  "haris",
  "saad",
  "moiz",
  "yusuf",
  "fawad",
  "jamal",
  "tariq",
  "naveed",
  "sajid",
  "zubair",
  "maaz",
  "tanveer",
  "zeeshan",
  "shoaib",
  "ahmer",
  "khalid",
  "murtaza",
  "atif",
  "danish",
  "adil",
];

const User = () => {
  const { user } = useParams();
  return (
    <div className="text-3xl bg-red-500 text-center">
      User:{user}
      <div className="flex flex-wrap gap-4 bg-black">
        {users.map((username) => (
          <NavLink
            key={username}
            to={`/user/${username}`}
            className={({ isActive }) =>
              ` text-white font-bold py-2 px-4 rounded m-1
            ${isActive ? "bg-white text-black" : "bg-blue-500"}`
            }
          >
            {username}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default User;
