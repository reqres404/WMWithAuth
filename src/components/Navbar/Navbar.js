import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navContainer">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#contact">My List</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/adittyapatil/">Contact Me</a>
        </li>
        <li className="logoutButton">
            <a className="logoutButtonStyle">Logout</a>
        </li>
      </ul>
      
    </div>
  );
};

export default Navbar;
