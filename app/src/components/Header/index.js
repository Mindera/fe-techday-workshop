import React  from 'react';

import bradPittPhoto from './brad-pitt.png';
import './styles.css';


const Header = () => (
  <header>
    <div className={"header-container"}>
      <img src={bradPittPhoto} alt={""} className="header-photo"/>
      <h1>Brad Pitt</h1>
      <p>Hi there, I'm a passionate front-end developer who loves to build beautiful interfaces using the most
        modern web technologies. This portfolio for example, is built using React and GraphQL, these are just some
        of the technologies I love! I'm currently looking for an opportunity in Porto, give me a call</p>
      <div className={"header-social-container"}>
        <a href={"https://twitter.com/i/flow/consent_violation_flow"} target="_blank"><i className="fab fa-twitter"/> Twitter</a>
        <a href={"https://www.facebook.com/actorbradpitt"} target="_blank"><i className="fab fa-facebook-f"/> Facebook</a>
        <a href={"https://www.linkedin.com/in/brad-pitt-6236b5151/"} target="_blank"><i className="fab fa-linkedin-in"/> LinkedIn</a>
      </div>
    </div>
  </header>
);

export default Header;
