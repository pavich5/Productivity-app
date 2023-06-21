import React from 'react';
import { NavLink } from 'react-router-dom';
import './Aside.css';

const Aside = () => {
  return (
      <div className="sidebar">
        <NavLink to="/work-session" activeClassName="active-link">
          Work Session
        </NavLink>
        <NavLink to="/statistics" activeClassName="active-link">
          Statistics
        </NavLink>
        <NavLink to="/reminders" activeClassName="active-link">
          Reminders
        </NavLink>
        <NavLink to="/productive-tips" activeClassName="active-link">
          How to be Productive
        </NavLink>
        <NavLink to="/calendar" activeClassName="active-link">
          Calendar
        </NavLink>
        <NavLink to="/about" activeClassName="active-link">
          About us
        </NavLink>
        <NavLink to="/contact" activeClassName="active-link">
        Contact
        </NavLink>
    </div>
  );
};

export default Aside;
