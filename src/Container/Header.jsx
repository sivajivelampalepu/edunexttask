import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
 <header className="dashboard-header">
      <h1>EduNXT </h1>
      <nav className="nav-links">
        <NavLink to="/userlist" className="nav-link">Users</NavLink>
        <NavLink to="/postlist" className="nav-link">Posts</NavLink>
        <NavLink to="/productlist" className="nav-link">Products</NavLink>
        <NavLink to="/analyticdashboard" className="nav-link">Analytics</NavLink>
        <NavLink to="/dashboard" className="nav-link">Main Dashboard</NavLink>
      </nav>
    </header>
  );
};

export default Header;
