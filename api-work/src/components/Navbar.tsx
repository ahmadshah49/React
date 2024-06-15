import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
