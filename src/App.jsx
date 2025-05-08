import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./share/NavBar/Navbar";
import Footer from "./share/Footer/Footer";
import Header from "./Components/LandingPage/Header/Header";

// Import AOS styles
import AOS from 'aos';
import 'aos/dist/aos.css'; 


// Landing
import Highlight from "./Components/LandingPage/Highlight/Highlight";
import TopDestination from "./Components/LandingPage/Top Destination/TopDestination";
import TrendingTours from "./Components/LandingPage/Trending Tours/TrendingTours";
import OurServices from "./Components/LandingPage/Our Services/OurServices";
import ClientSay from "./Components/LandingPage/Client Say/ClientSay";
import Blog from "./Components/LandingPage/Blog/Blog";

// About
import AboutHeader from "./Components/AboutPage/AboutHeader/AboutHeader";
import AboutUs from "./Components/AboutPage/AboutUs/AboutUs";
import Guide from "./Components/AboutPage/guide/guide";
import AboutGallery from "./Components/AboutPage/AboutGallery/AboutGallery";

// Blog
import BlogHeader from "./Components/BlogPage/BlogHeader/BlogHeader";
import Bblog from "./Components/BlogPage/Blog/Blog";

// Gallery
import GalleryHeader from "./Components/GalleryPage/GalleryHeader/GalleryHeader";
import Gallery from "./Components/GalleryPage/Gallery/Gallery";


const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 500,
      // once: true,
      easing: 'ease-in-out',
      anchorPlacement: 'top-bottom',
      delay: 300
    });
  }, []);
  return (
    <div className="font-rubik overflow-hidden">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Highlight />
              <TopDestination />
              <TrendingTours />
              <OurServices />
              <ClientSay />
              <Blog />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <AboutHeader />
              <AboutUs />
              <Guide />
              <AboutGallery />
            </>
          }
        />
        <Route
          path="blog"
          element={
            <>
              <BlogHeader />

              <Bblog />
            </>
          }
        />
        <Route
          path="gallery"
          element={
            <>
              <GalleryHeader />
              <Gallery />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
