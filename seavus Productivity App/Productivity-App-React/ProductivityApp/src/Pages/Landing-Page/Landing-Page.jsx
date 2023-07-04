import { NavLink } from "react-router-dom";
import "./Landing-Page.css";
// import logo from "../../assets/images/Logo.png";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      {/* <div className="logo">
        <img src={logo} alt="Logo" />
      </div> */}
      <div className="Information">
<<<<<<< Updated upstream
        <h1 id="LogoText" style={{color: '#3d3d3d'}}>Productivity App for the Service Industries</h1>
        <br />
        <h2 id="motto">
          <i>Keep it simple and stay productive</i>
        </h2>
        <div className="Metrics">
          <div className="Metric">
            <h3 className="plusNumbers">+5%</h3>
            <h3>Increase in Sales</h3>
            <NavLink to="/learn-more-sales">Learn more</NavLink>
          </div>
          <div className="Metric">
            <h3 className="plusNumbers">+20%</h3>
            <h3>Increase in Staff Efficiency</h3>
            <NavLink to="/learn-more-efficiency">Learn more</NavLink>
          </div>
          <div className="Metric">
            <h3 className="plusNumbers">to 20%</h3>
            <h3>Savings in Compensation</h3>
            <NavLink to="/learn-more-compensation">Learn more</NavLink>
          </div>
          <div className="Metric">
            <h3 className="plusNumbers">+25%</h3>
            <h3>Increase in Customer Loyalty</h3>
            <NavLink to="/learn-more-loyalty">Learn more</NavLink>
          </div>
        </div>
=======
        <h1 id="LogoText">Productivity App</h1>
        <br />
        <h2 id="motto">Achieve More, Stress Less</h2>
>>>>>>> Stashed changes
        <div className="Buttons">
          <NavLink to="/login" id="loginBtn">
            Login
          </NavLink>
          <NavLink to="/register" id="registerBtn">
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
