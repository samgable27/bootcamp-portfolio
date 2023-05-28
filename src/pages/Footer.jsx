import React from "react";
import FooterLogo from "../assets/footer-logo.svg";
import { MdOutlineArrowUpward } from "react-icons/md";

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
          <a href="https://github.com/samgable27">Github</a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/sam-gable-a2058a108/">
            LinkedIn
          </a>
        </div>
        <div>
          <a href="">Email</a>
        </div>
        <div>
          <a href="">Resume</a>
        </div>
      </div>
      <div>Copyright &copy; 2022 Sam Gable</div>
    </div>
  );
};

export default Footer;
