import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="text-xl bg-black text-white flex  justify-around items-center py-4 ">
      <h1>Navbar</h1>
      <ul className="text-white text-xs flex gap-8">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-white rounded-md bg-red-400 py-2 px-4"
                  : "text-white py-2 px-4"
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-white rounded-md bg-red-400 py-2 px-4"
                  : "text-white py-2 px-4"
              }`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/services"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-white rounded-md bg-red-400 py-2 px-4"
                  : "text-white py-2 px-4"
              }`
            }
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/user"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-white rounded-md bg-red-400 py-2 px-4"
                  : "text-white py-2 px-4"
              }`
            }
          >
           User
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
