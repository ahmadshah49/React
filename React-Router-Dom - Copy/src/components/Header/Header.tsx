import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-xl text-white bg-black flex justify-around py-4 ">
      <h1>Navbar</h1>
      <ul className="flex gap-4">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-red-400 text-white px-4 py-2"
                  : "text-white px-4 py-2"
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
                  ? "bg-red-400 text-white px-4 py-2"
                  : "text-white px-4 py-2"
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
                  ? "bg-red-400 text-white px-4 py-2"
                  : "text-white px-4 py-2"
              }`
            }
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-red-400 text-white px-4 py-2"
                  : "text-white px-4 py-2"
              }`
            }
          >
            Contact us
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/user"}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-red-400 text-white px-4 py-2"
                  : "text-white px-4 py-2"
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

export default Header;
