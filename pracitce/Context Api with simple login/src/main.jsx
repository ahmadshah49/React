import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";

import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Login from "./components/Login/Login";
import UserContext from "./context/UserContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/user" element={<User />} />
      <Route path="/user/:user" element={<User />} />
    </Route>
  )
);
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
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContext.Provider value={users}>
      <RouterProvider router={router}></RouterProvider>
    </UserContext.Provider>
  </React.StrictMode>
);
