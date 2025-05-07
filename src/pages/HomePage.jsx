import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Stats from "../components/Stats";
import Categories from "../components/Categories";
import FeaturedCourses from "../components/FeaturedCourses";
import LearningPaths from "../components/LearningPaths";
import TopEducators from "../components/TopEducators";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import '../App.css'

function HomePage() {
    return (
      <div>
        <Navbar />
        <HeroSection />
        <Stats />
        <Categories />
        <FeaturedCourses />
        <LearningPaths />
        <TopEducators />
        <Testimonials />
        <CallToAction />
        <Footer />
      </div>
    );
  }
  
  export default HomePage;
  