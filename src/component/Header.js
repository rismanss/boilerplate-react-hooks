import React from 'react';
import {NavLink as Link} from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link exact className="nav-link" to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;