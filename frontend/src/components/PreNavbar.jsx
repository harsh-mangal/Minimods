import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const PreNavbar = () => {
  const [tokenExists, setTokenExists] = useState(!!localStorage.getItem('userInfo'));

  if (tokenExists) {
    return (
        <div className="pre-navbar">
        <div className="pre-navbar-left">
          <div className="pre-navbar-line"></div>
          <span>
            Build your dream PC with MiniMods{' '}
          </span>
        </div>
        <div className="pre-navbar-right">
          <NavLink to="/profile">My Profile</NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="pre-navbar">
      <div className="pre-navbar-left">
        <div className="pre-navbar-line"></div>
        <span>
          Build your dream PC with MiniMods{' '}
          <Link to="/signup">Sign Up</Link> or <Link to="/signin">Sign In</Link>
        </span>
      </div>
      <div className="pre-navbar-right">
        <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/myprofile">My Profile</NavLink>
      </div>
    </div>
  );
};

export default PreNavbar;
