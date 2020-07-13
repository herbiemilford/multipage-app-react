import React from "react";
import { NavLink } from "react-router-dom";

const navs = [
  {
    path: "/home",
    name: "Home"
  },
  {
    path: "/about",
    name: "About"
  },
  {
    path: "/contact",
    name: "Contact"
  }
];

const Nav = () => (
  <nav className="bg-teal-600 text-teal-400 text-white p-4 h-16  shadow">
    <ul className="flex space-x-6 justify-end">
      {navs.map(navItem => (
        <li>
          <NavLink exact to={navItem.path} activeClassName="text-teal-200">
            {navItem.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
