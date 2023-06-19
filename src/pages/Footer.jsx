import React from "react";
import FooterLogo from "../assets/sg-logo.png";
import { MdOutlineArrowUpward } from "react-icons/md";
import resume from "..//../src/assets/SamResume.pdf";
import "../styles.css";

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <a href="#" className="footer__logo">
        <img src={FooterLogo} alt="" />
        <span className="footer__scroll-top">
          Top <MdOutlineArrowUpward />
        </span>
      </a>
      <div className="footer__link--wrapper">
        <div>
          <a href="https://github.com/samgable27" target="_blank">
            Github
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/sam-gable/" target="_blank">
            LinkedIn
          </a>
        </div>
        <div>
          <a href="mailto:samgabledev@gmail.com">Email</a>
        </div>
        <div>
          <a href={resume} target="_blank">
            Resume
          </a>
        </div>
      </div>
      <div>Copyright &copy; 2022 Sam Gable</div>
    </div>
  );
};

export default Footer;
