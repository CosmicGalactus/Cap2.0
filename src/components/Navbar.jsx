import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar__logo">EduCos</div>
    <ul className="navbar__links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/courses">Courses</Link></li>
      <li><Link to="/educators">Educators</Link></li>
      <li><Link to="/learning-paths">Learning Paths</Link></li>
    </ul>
    <input type="text" placeholder="Search courses..." className="navbar__search" />
    <div className="navbar__auth">
      <button className="btn btn--outline">Log In</button>
      <button className="btn btn--primary">Sign Up</button>
    </div>
  </nav>
);

export default Navbar;