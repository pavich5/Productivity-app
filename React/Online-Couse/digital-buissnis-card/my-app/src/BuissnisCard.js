import womenImage from "./women.jpg";
import "./buissnisCard.css";
import facebook from "./icons8-facebook-48.png";
import instagram from "./icons8-instagram-48.png";
import pinterest from "./icons8-pinterest-48.png";
import whatsapp from "./icons8-whatsapp-48.png";




function Card() {
  return (
    <div className="mainDiv">
      <img src={womenImage} alt="slika" />
      <div className="namePosition">
        <h2>Antonio Pavic</h2>
        <h5>Full-Stack Developer</h5>
        <h6>Gevgelija, Bogdanci</h6>
      </div>
      <button className="email">Email</button>
      <div className="aboutInterestWrapper">
        <div className="AboutInterest">
          <h3>About</h3>
          <h4>
            I'm a software engineer with over 5 years of experience building web
            applications. My expertise is in full-stack development, with a
            focus on frontend technologies
          </h4>
        </div>
        <div className="AboutInterest">
          <h3>Interest</h3>
          <h4>
            I have a wide range of interests outside of programming. I'm a huge
            fan of science fiction and fantasy literature, and I love attending
            conventions 
          </h4>
        </div>
      </div>
      <footer>
        <img src={facebook} alt="facebook"/>
        <img src={instagram} alt="facebook"/>
        <img src={pinterest} alt="facebook"/>
        <img src={whatsapp} alt="facebook"/>
      </footer>
    </div>
  );
}

export default Card;
