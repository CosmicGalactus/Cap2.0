import React from "react";

const HeroSection = () => (
  <section className="hero">
    <div className="hero__content">
      <h1>Learn Without Limits</h1>
      <p>
        Access world-class education from expert educators. Discover courses in mathematics, programming, languages, and more.
      </p>
      <div className="hero__buttons">
        <button className="btn btn--primary">Explore Courses</button>
        <button className="btn btn--outline">Become an Educator</button>
      </div>
      <div className="hero__stats-mobile">
        <span>300+ Courses</span>
        <span>50+ Educators</span>
        <span>100K+ Students</span>
        <span>15+ Learning Paths</span>
      </div>
    </div>
    <div className="hero__image">
      <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80" alt="Students learning" />
    </div>
  </section>
);

export default HeroSection;