import { Link } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { AiOutlinePicture } from "react-icons/ai";
import { GiRotaryPhone } from "react-icons/gi";
import React from "react";
import "./navbar.css";
import { icons } from "react-icons/lib";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Pensiunea Elphin
      </Link>

      <ul>
        <li>
          <div className="d-flex align-items-center">
            <TiHome size="1.9rem" className="mb-4," color="#EEE8AA" />
            <Link to="/">Home</Link>
          </div>
        </li>
        <li>
          <Link to="/about">Despre Noi</Link>
        </li>

        <li>
          <div>
            <AiOutlinePicture size="1.9rem" className="mt-3," color="#EEE8AA" />
            <Link to="/galerie">Galerie foto</Link>
          </div>
        </li>
        <li>
          <Link to="/rezervare">Rezerva acum</Link>
        </li>
        <li>
          <div>
            <GiRotaryPhone size="1.9rem" className="mb-4," color="#EEE8AA" />
            <Link to="/contact">Contact</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
