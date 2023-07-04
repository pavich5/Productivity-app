import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/Logo.png";
import UserIcon from "../../Components/UserIcon";

function Header(props) {
  const location = useLocation();
  const isLoginOrHome = location.pathname === "/" || location.pathname === "/login";
  const isDashboard = !isLoginOrHome;

  const navbarData = isLoginOrHome
    ? props.navbarLoginData
    : props.navbarDashboardData;

  const userIcon = isDashboard ? <UserIcon /> : null;

  return (
    <header>
      <nav>
        <NavLink to="/">
          <div>
            <img src={logo} alt="logo" className="image" />
          </div>
        </NavLink>
        <div className="AppTitle">WorkWise</div>
        <div className="ulContainer">
          <ul className="header-ul">
            {navbarData.map((linkdata, i) => (
              <NavLink to={linkdata.link} key={linkdata + i}>
                <li>{linkdata.text}</li>
              </NavLink>
            ))}
          </ul>
        </div>
        {userIcon}
      </nav>
    </header>
  );
}

export default Header;
