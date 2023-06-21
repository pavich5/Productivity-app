import React from 'react';
import { FaLightbulb, FaHandshake, FaUsers, FaChartLine } from 'react-icons/fa';
import Aside from '../../Layouts/Aside/Aside';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <Aside />
      <div className="AboutUsContent">
        <section>
          <h1 style={{textAlign:'left'}}>About Our Company</h1>
          <p>
            Welcome to our company! We are a leading provider of innovative solutions in the tech industry.
            With a team of dedicated professionals, we strive to deliver exceptional products and services to our clients.
            Our mission is to revolutionize the way people interact with technology and make a positive impact in the world.
          </p>
        </section>
        <section>
          <h2>Our Vision</h2>
          <p>
            We envision a future where technology enhances and simplifies every aspect of people's lives.
            Through continuous innovation and a customer-centric approach, we aim to be at the forefront of this transformation,
            empowering individuals and businesses to thrive in a digital world.
          </p>
        </section>

        <section>
          <h2>Join Our Team</h2>
          <p>
            We are always looking for talented individuals to join our team.
            If you are passionate about technology and want to be part of a dynamic and innovative company,
            we would love to hear from you. Check out our Careers page for current job openings and opportunities.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
