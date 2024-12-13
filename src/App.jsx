import "lenis/dist/lenis.css";
import Lenis from "lenis";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import gsap from "gsap";
import LoadingScreen from "./Components/LoadingScreen";
import { useState, useEffect } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import SpaceCrafts from "./Components/SpaceCrafts";
import SpaceVehicles from "./Components/SpaceVehicles";
import FloatingGallery from "./Components/FloatingGallery";
import Missions from "./Components/Missions";
import Footer from "./Components/Footer";
import ContactUs from "./Components/ContactUs";

gsap.registerPlugin("ScrollTrigger");

function App() {
  // Initialize a new Lenis instance for smooth scrolling
  const lenis = new Lenis();

  // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
  lenis.on("scroll", ScrollTrigger.update);

  // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
  // This ensures Lenis's smooth scroll animation updates on each GSAP tick
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
  });

  // Disable lag smoothing in GSAP to prevent any delay in scroll animations
  gsap.ticker.lagSmoothing(0);

  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const handleLoading = () => {
    setLoading(false);
  };

  // Detect screen size to identify mobile devices
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1200); // Adjust width as per your design
    };

    checkScreenSize(); // Check on load
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen loadMethod={handleLoading} />
      ) : (
        <>
          {isMobile ? (
            // Message for smaller devices
            <div className="flex flex-col items-center justify-center min-h-screen bg-stone-900 text-white text-center p-4">
              <h1 className="text-2xl font-bold mb-4">
                I am working on making this website responsive!
              </h1>
              <p className="mb-4">
                Meanwhile, you can watch this video of my desktop version:
              </p>
              <iframe
                className="w-full max-w-md h-64 rounded shadow-lg"
                src="https://www.youtube.com/embed/ZttDnAUAtIQ"
                title="Desktop Version Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            // Desktop content
            <>
              <div id="home">
                <Home />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="space-crafts">
                <SpaceCrafts />
              </div>
              <div id="space-vehicles">
                <SpaceVehicles />
              </div>
              <div id="missions">
                <Missions />
              </div>
              <div id="floating-gallery">
                <FloatingGallery />
              </div>
              <div id="contact-us">
                <ContactUs />
              </div>
              <div id="footer">
                <Footer />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default App;
