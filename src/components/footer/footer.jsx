import React from "react";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="ftr ps-3 pe-3">
      Copyright by Sorin T.
      <div className="d-flex gap-2">
        <div className="contact-card-item">
          <FaFacebook size="1.5rem" color="#3B5998" />
        </div>
        <div>
          <GrInstagram size="1.5rem" color="red" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
