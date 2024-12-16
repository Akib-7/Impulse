import "lenis/dist/lenis.css";
import Lenis from "lenis";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import gsap from "gsap";
import { lazy, Suspense, useState, useEffect } from "react";
import LoadingScreen from "./Components/LoadingScreen";
import { BarLoader } from "react-spinners";
gsap.registerPlugin("ScrollTrigger");
import Home from "./Components/Home";
// Lazy load components
// const Home = lazy(() => import("./Components/Home"));
const About = lazy(() => import("./Components/About"));
const SpaceCrafts = lazy(() => import("./Components/SpaceCrafts"));
const SpaceVehicles = lazy(() => import("./Components/SpaceVehicles"));
const FloatingGallery = lazy(() => import("./Components/FloatingGallery"));
const Missions = lazy(() => import("./Components/Missions"));
const Footer = lazy(() => import("./Components/Footer"));
const ContactUs = lazy(() => import("./Components/ContactUs"));

function App() {
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const handleLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    checkScreenSize();
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
            // Lazy-loaded components with Suspense
            <>
              <div id="home">
                <Home />
              </div>
              <Suspense
                fallback={
                  <div className="text-white w-[99.6vw] h-[100vh] bg-transparent flex items-center justify-center">
                    <BarLoader
                      color="white"
                      loading={true}
                      size={100}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                      className="!w-[10vw]"
                    />
                  </div>
                }
              >
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
              </Suspense>
            </>
          )}
        </>
      )}
    </>
  );
}

export default App;
