import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
  useHistory
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactGA from 'react-ga4'; // Import react-ga4

function App() {
  const [load, updateLoad] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const handleLoad = () => {
      updateLoad(false);
    };

    // Initialize react-ga4
    ReactGA.initialize('G-VTH3M5VHEK');

    // Track page view on initial load
    ReactGA.pageview(window.location.pathname + window.location.search);
    handleLoad();

    // Track page view on route change
    const unlisten = history.listen(() => {
      ReactGA.pageview(window.location.pathname + window.location.search);
    });

    // Set up timer
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => {
      clearTimeout(timer);
      unlisten();
    };
  }, [history]);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
