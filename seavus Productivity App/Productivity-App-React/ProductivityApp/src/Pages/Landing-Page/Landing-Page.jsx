import { NavLink } from 'react-router-dom';
import './Landing-Page.css';
import logo from '../../assets/images/Logo.png';

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="Information">
        <h1 id="LogoText">App Name</h1>
        <br />
        <h2 id="motto">Our motto is Programming</h2>
        <div className="Buttons">
          <NavLink to="/login" id="loginBtn" activeClassName="active">
            Login
          </NavLink>
          <NavLink to="/register" id="registerBtn" activeClassName="active">
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
