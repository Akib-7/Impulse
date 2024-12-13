import React, { useRef, useState, useEffect } from "react";
import Lottie from "lottie-react";
import gsap from "gsap";
import { RiMenu4Fill } from "react-icons/ri";
import { useGSAP } from "@gsap/react";

import H from "../assets/H.webp";

import Hover from "../assets/Hover.wav";
import Hover3 from "../assets/Hover3.wav";
import buttonClickSound from "../assets/Nav.wav";
import Story3 from "../assets/Story3.wav";
import Equalizer from "../assets/Equalizer2.json";

const Home = () => {
  const HoverSound = useRef(null);
  const NavSound = useRef(null);
  const StorySound = useRef(null);
  const buttonSound = useRef(null);
  const LottieAnimation = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [close, setClose] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user scrolled beyond 100vh
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll); // Attach listener

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup listener
    };
  }, []); // Empty dependency array

  useEffect(() => {
    LottieAnimation.current.stop();
    StorySound.current = new Audio(Story3);

    StorySound.current.loop = true; // Enable infinite looping
    StorySound.current.volume = 0.2; // Set volume to 20%

    NavSound.current = new Audio(Hover3);
    NavSound.current.volume = 0.1;

    HoverSound.current = new Audio(Hover);
    HoverSound.current.volume = 0.1;

    buttonSound.current = new Audio(buttonClickSound);
    buttonSound.current.volume = 0.1;
  }, []);
  const playNavClickSound = () => {
    NavSound.current.currentTime = 0;
    NavSound.current.play();
  };
  const playButtonSound = () => {
    buttonSound.current.currentTime = 0;
    buttonSound.current.play();
  };
  const handleNav = () => {
    if (close) {
      gsap.to(".Navbar", {
        y: "0%", // Fully visible
        ease: "power3.inOut",
        duration: 0.5,
      });
      playNavClickSound();
    } else {
      gsap.to(".Navbar", {
        y: "-70%", // Move it back up
        ease: "power3.in",
        duration: 0.5,
      });
      playNavClickSound();
    }
    setClose(!close); // Toggle the state
  };
  const handleHover = () => {
    HoverSound.current.currentTime = 0;
    HoverSound.current.play();
  };
  const handleEqualizer = () => {
    if (isPlaying) {
      LottieAnimation.current.stop();
      StorySound.current.pause(); // Pause the animation
    } else {
      StorySound.current.play();
      LottieAnimation.current.play(); // Play the animation
    }
    setIsPlaying(!isPlaying); // Toggle state
  };
  var t1 = gsap.timeline();
  var t2 = gsap.timeline();
  var button1Hover = gsap.timeline();
  var button2Hover = gsap.timeline();
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);

  useGSAP(() => {
    t1.fromTo(
      ".Navbar",
      {
        y: "-100%",
      },
      {
        delay: 1,
        y: "-70%",
        ease: "power3.out",
      }
    );
    t2.to(".Blob2", {
      x: 130,
      duration: 3,
      yoyo: true,
      repeat: -1,
    });

    t2.to(
      ".BUTTON-BLOB-Circle",

      {
        rotate: 360,
        duration: 6,

        repeat: -1,
      },
      "<"
    );
  });

  const bgImageRef = useRef(null);
  const initialLoadAnim1 = useRef(null);
  const initialLoadAnim2 = useRef(null);
  const initialLoadAnim2_0 = useRef(null);
  const initialLoadAnim2_1 = useRef(null);
  const initialLoadAnim2_2 = useRef(null);
  const initialLoadAnim3 = useRef(null);
  const initialLoadAnim4 = useRef(null);
  const initialLoadAnim = [
    initialLoadAnim1,
    initialLoadAnim2,
    initialLoadAnim2_0,
    initialLoadAnim2_1,
    initialLoadAnim2_2,
    initialLoadAnim3,
    initialLoadAnim4,
  ];

  useGSAP(() => {
    initialLoadAnim.forEach((element, index) => {
      gsap.set(
        element.current,
        {
          y: 0,

          opacity: 0,
        },

        0
      );
      gsap.to(element.current, {
        y: 0,

        opacity: 1,
        ease: "linear",
        duration: 1,
        delay: 2,
      });
    });
    gsap.fromTo(
      bgImageRef.current,
      {
        opacity: 0,
        scale: 3,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        // ease: "circ.inOut",
        ease: "circ.inOut",
      }
    );
  });

  const handlePageNavigation = (componentId) => {
    const page = document.getElementById(componentId);
    if (page) {
      setClose(!close);
      handleNav();
      page.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlebuttonClick = (id) => {
    const page2 = document.getElementById(id);
    if (page2) {
      playNavClickSound();
      page2.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleButtonEnter1 = () => {
    gsap.to(button1Ref.current, {
      backgroundColor: "#0c619e",
      ease: "linear",
      duration: 0.3,
    });
  };
  const handleButtonLeave1 = () => {
    gsap.to(
      button1Ref.current,

      {
        backgroundColor: "#03C2E5",
        ease: "linear",
        duration: 0.3,
        opacity: 1,
      }
    );
  };
  const handleButtonEnter2 = () => {
    gsap.to(button2Ref.current, {
      backgroundColor: "#118420",
      ease: "linear",
      duration: 0.3,
      opacity: 0.8,
    });
  };
  const handleButtonLeave2 = () => {
    gsap.to(
      button2Ref.current,

      {
        backgroundColor: "#16A34A",
        ease: "linear",
        duration: 0.3,
        opacity: 1,
      }
    );
  };
  return (
    <div
      style={{ zIndex: 80 }}
      className=" h-screen relative overflow-hidden  bg-cover bg-center"
    >
      <div
        ref={bgImageRef}
        className="absolute top-0 w-[99.6vw] h-screen left-1/2 translate-x-[-50%]"
      >
        <img
          src={H}
          alt="Background Image"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div
        style={{ background: "linear-gradient(to top, black, transparent)" }}
        className="absolute  -bottom-[0vh] w-full h-[10vh] translate-x-[-50%] left-1/2"
      ></div>
      {/* <Black /> */}
      <div
        className="Navbar cursor-pointer fixed top-0  -translate-y-[70%]  sm:h-[100px] sm:w-[1000px] left-1/2 transform  -translate-x-1/2"
        style={{
          clipPath: "polygon(0 0, 100% 0, 75% 100%, 25% 100%)",
          zIndex: 20,
        }}
      >
        <div
          className={`NAVBAR-CONTAINER text-white flex-col justify-evenly sm:w-full   sm:h-full flex  ${
            isScrolled
              ? "bg-gradient-to-b from-black/30 bg-white/30"
              : "bg-black/80"
          }  `}
        >
          <div className="cursor-pointer  Nav-items font-heading1 sm:text-base tracking-wider flex sm:px-5 sm:py-5  items-center justify-center sm:space-x-2">
            <div
              onMouseEnter={handleHover}
              onClick={() => handlePageNavigation("home")}
              style={{
                clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
                zIndex: 20,
              }}
              className={`${
                isScrolled ? "hover:bg-black/80" : "hover:bg-white/20"
              } px-7 transition-all py-[2px] duration-0 ease-in-out  text-white `}
            >
              <h1>Home</h1>
            </div>
            <div
              onClick={() => handlePageNavigation("space-crafts")}
              onMouseEnter={handleHover}
              style={{
                clipPath: "polygon(7% 0, 100% 0, 93% 100%, 0% 100%)",
                zIndex: 20,
              }}
              className={`${
                isScrolled ? "hover:bg-black/80" : "hover:bg-white/20"
              } px-7 transition-all py-[2px] duration-0 ease-in-out  text-white `}
            >
              <h1>Spacecrafts</h1>
            </div>
            <div
              onMouseEnter={handleHover}
              onClick={() => handlePageNavigation("about")}
              style={{
                clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
                zIndex: 20,
              }}
              className={`${
                isScrolled ? "hover:bg-black/80" : "hover:bg-white/20"
              } px-7 transition-all py-[2px] duration-0 ease-in-out  text-white `}
            >
              <h1>About</h1>
            </div>
            <div
              onMouseEnter={handleHover}
              onClick={() => handlePageNavigation("missions")}
              style={{
                clipPath: "polygon(8% 0, 100% 0, 92% 100%, 0% 100%)",
                zIndex: 20,
              }}
              className={`${
                isScrolled ? "hover:bg-black/80" : "hover:bg-white/20"
              } px-7 transition-all py-[2px] duration-0 ease-in-out  text-white `}
            >
              <h1>Missions</h1>
            </div>
          </div>

          <div
            onClick={handleNav}
            className="Hamburger  py-2 flex items-center justify-center"
          >
            <RiMenu4Fill className="text-xl" />
          </div>
        </div>
      </div>

      <div className="INSIDE-PAGE  h-screen relative   text-white  ">
        <div
          ref={initialLoadAnim1}
          style={{ zIndex: 1000 }}
          onClick={handleEqualizer}
          className="EQUALIZER w-[100px]  h-[50px] border-b-[1px] hover:scale-105 hover:border-t-[1px]  transition-transform duration-300  rounded-xl cursor-pointer border-white/30 fixed right-[5.5vw] top-10 flex items-center justify-center "
        >
          <Lottie
            lottieRef={LottieAnimation}
            animationData={Equalizer}
            loop={true}
            style={{ width: "50px", height: "50px" }}
          />
          <div className="font-heading1 text-[0.7vw]  uppercase">
            <p>{isPlaying ? "On" : "off"}</p>
          </div>
        </div>
        <div className="TOP  sm:flex sm:h-[38vh] justify-between items-end  w-full">
          <div className=" Heading sm:flex relative   sm:pl-5 sm:mb-[0vh]   items-center sm:w-[5vw]">
            <h1
              style={{
                lineHeight: "3.2vw",
              }}
              className=" sm:text-[2.5vw]  font-semibold tracking-widest  z-10  font-heading2 uppercase "
            >
              Impulse
              <br />
              <p
                ref={initialLoadAnim2}
                style={{
                  lineHeight: "1.3vw",
                }}
                className="sm:text-base normal-case tracking-normal text-white/70 font-heading1  "
              >
                {/* Revolutionizing Space Exploration for All*/}
                Your Space Journey Begins here with us
              </p>
            </h1>

            <div
              ref={initialLoadAnim2_0}
              className="Blob1 blur-3xl sm:-left-16  absolute sm:w-[10vw] sm:h-[12vw] rounded-full bg-emerald-700"
            ></div>
            <div
              ref={initialLoadAnim2_1}
              className="Blob2 blur-2xl sm:-left-[15vw]  absolute sm:w-[23vw] sm:h-[7vw] rounded-full bg-gradient-to-r to-cyan-700 from-cyan-700"
            ></div>
          </div>
          <div
            ref={initialLoadAnim2_2}
            className=" TOP-RIGHT-BLOB     sm:mb-[10vh] sm:w-[20vw]"
          >
            <div className="Blob3 blur-3xl rounded-full   absolute sm:w-[20vw] sm:h-[6vw]  bg-gradient-to-r to-green-600 from-cyan-700"></div>
          </div>
        </div>
        <div className="BOTTOM w-full sm:flex justify-between items-center   sm:h-[62vh]">
          <div className="BOTTOM-LEFT   sm:ml-[1vw]    sm:flex flex-col sm:w-[220px]  sm:h-[220px] sm:mt-[5vh]   ">
            <div
              ref={initialLoadAnim3}
              className="BOTTOM-STATS border-l-[1px] border-white/60 rounded-xl text-white/60 sm:flex items-center justify-evenly mt-[15vh] w-full h-1/2"
            >
              <div className="sm:flex group cursor-pointer hover:text-white sm:flex-col items-center justify-center w-fit h-fit transition-transform duration-300 hover:scale-110">
                <h1 className="font-heading2 sm:text-xl">83</h1>
                <h1 className="font-heading1 sm:text-sm">Launches</h1>
              </div>
              <div className="sm:flex group cursor-pointer hover:text-white sm:flex-col items-center justify-center w-fit h-fit transition-transform duration-300 hover:scale-110">
                <h1 className="font-heading2 sm:text-xl">145+</h1>
                <h1 className="font-heading1 sm:text-sm">Satellites</h1>
              </div>
              <div className="sm:flex group cursor-pointer hover:text-white sm:flex-col items-center justify-center w-fit h-fit transition-transform duration-300 hover:scale-110">
                <h1 className="font-heading2 sm:text-xl">23</h1>
                <h1 className="font-heading1 sm:text-sm">Years</h1>
              </div>
            </div>
          </div>
          <div className="BOTTOM-CENTER sm:w-[400px]  sm:h-[300px] "></div>
          <div
            ref={initialLoadAnim4}
            className="BOTTOM-Right  relative sm:p-0 sm:mt-[20vh] sm:pl-[3vw] space-x-5 border-[0px]  border-white/100  sm:w-[330px] sm:h-[250px] sm:flex  justify-center items-center    "
          >
            <div
              onClick={() => handlebuttonClick("contact-us")}
              onMouseEnter={handleButtonEnter1}
              onMouseLeave={handleButtonLeave1}
              className="LEFT-BUTTON cursor-pointer relative sm:p-5  sm:mt-[0vh] sm:mr-[0vw]  rounded-full sm:w-[100px] sm:h-[100px] sm:flex justify-center items-center "
            >
              <div
                style={{
                  zIndex: "998",
                }}
                ref={button1Ref}
                className="BUTTON-BLOB1 absolute  rounded-full h-[70%] w-[70%] blur-sm sm:border-2 border-black bg-cyan-500 "
              ></div>
              <div
                style={{
                  zIndex: "997",
                }}
                className="BUTTON-BLOB-Middle absolute rounded-full h-[85%] w-[85%] border-[0vh] bg-black"
              ></div>
              <div className="BUTTON-BLOB-Circle absolute rounded-full h-[100%] w-[100%] border-[0vh] bg-gradient-to-tr from-[#504d4d] to-black "></div>
              <h1
                style={{ zIndex: "999", lineHeight: "1vw" }}
                className="  font-heading1   text-center tracking-wide text-sm "
              >
                Start Mission
              </h1>
            </div>
            <div
              onClick={() => handlebuttonClick("about")}
              onMouseEnter={handleButtonEnter2}
              onMouseLeave={handleButtonLeave2}
              className="Right-BUTTON  cursor-pointer relative sm:p-5  sm:mt-[0vh] sm:mr-[0vw]  rounded-full sm:w-[100px] sm:h-[100px] sm:flex justify-center items-center "
            >
              <div
                style={{
                  zIndex: "998",
                }}
                ref={button2Ref}
                className="BUTTON-BLOB5 absolute rounded-full h-[70%] w-[70%] blur-sm sm:border-2 border-black bg-green-600 "
              ></div>
              <div
                style={{
                  zIndex: "997",
                }}
                className="BUTTON-BLOB-Middle absolute rounded-full h-[85%] w-[85%] border-[0vh] bg-black"
              ></div>
              <div className="BUTTON-BLOB-Circle absolute rounded-full h-[100%] w-[100%] border-[0vh] bg-gradient-to-tr from-[#504d4d] to-black "></div>

              <h1
                style={{ zIndex: "999", lineHeight: "1vw" }}
                className=" font-heading1   text-center tracking-wide text-sm "
              >
                Discover
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
