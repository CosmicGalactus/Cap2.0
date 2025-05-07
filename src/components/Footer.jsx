import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <div className="footer__col">
        <h3>EduSphere</h3>
        <p>Your gateway to world-class education. Learn from industry experts and educators on your schedule.</p>
        <div className="footer__socials">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="footer__col">
        <h4>Explore</h4>
        <ul>
          <li><a href="#">All Courses</a></li>
          <li><a href="#">Educators</a></li>
          <li><a href="#">Learning Paths</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
      </div>
      <div className="footer__col">
        <h4>Categories</h4>
        <ul>
          <li><a href="#">Mathematics</a></li>
          <li><a href="#">Science</a></li>
          <li><a href="#">Programming</a></li>
          <li><a href="#">Languages</a></li>
          <li><a href="#">All Categories</a></li>
        </ul>
      </div>
      <div className="footer__col">
        <h4>Support</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>
    </div>
    <div className="footer__bottom">
      <span>© 2025 EduSphere. All rights reserved.</span>
      <div className="footer__links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default Footer; 