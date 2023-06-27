import { NavLink } from "react-router-dom";
import "./Landing-Page.css";
import logo from "../../assets/images/Logo.png";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="Information">
        <h1 id="LogoText">App Name</h1>
        <br />
        <h2 id="motto">Our motto</h2>
        <div className="Buttons">
          <NavLink to="/login" id="loginBtn" activeclassname="active">
            Login
          </NavLink>
          <NavLink to="/register" id="registerBtn" activeclassname="active">
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
