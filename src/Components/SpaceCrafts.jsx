import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hover from "../assets/Hover.wav";
gsap.registerPlugin(ScrollTrigger);

import s0 from "../assets/s0.webp";

const SpaceCrafts = () => {
  const [showCursor, setShowCursor] = useState(false);
  const HoverSound = useRef(null);
  const handleCursorEnter = () => {
    setShowCursor(true);
    HoverSound.current.currentTime = 0;
    HoverSound.current.play();
  };

  const handleCursorLeave = () => {
    setShowCursor(false);
  };

  const rocketAnimation = gsap.timeline();

  useEffect(() => {
    const canvas = document.getElementById("CANVAS");
    const cursor = document.querySelector(".CURSOR");
    HoverSound.current = new Audio(Hover);
    HoverSound.current.volume = 0.1;
    const handleMouseMove = (e) => {
      const canvasRect = canvas.getBoundingClientRect();
      const offsetX = canvasRect.left;
      const offsetY = canvasRect.top;

      gsap.to(cursor, {
        x: e.clientX - offsetX - 70,
        y: e.clientY - offsetY + 20,
        duration: 1, // Adjust this for smoother real-time tracking
        ease: "back.out",
      });
    };

    // Add mousemove event listener if showCursor is true, remove if false
    if (showCursor) {
      canvas.addEventListener("mousemove", handleMouseMove);
    } else {
      canvas.removeEventListener("mousemove", handleMouseMove);
    }
    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showCursor]); // Re-run the effect whenever showCursor changes

  useGSAP(() => {
    // Rocket animation timeline
    rocketAnimation.fromTo(
      ".ROCKET",
      { scale: 0.7 },
      {
        y: -1800,
        scale: 2,
        ease: "linear",

        scrollTrigger: {
          trigger: ".PAGE-1", // or you can use document.body
          start: "top 50%", // start animation when bottom of the viewport reaches bottom of the page
          end: "bottom+=400",
          scrub: true,

          // optional, adds a little more scroll range
          // optional, shows visual markers to debug
          onEnter: () => {
            rocketAnimation.restart(true, false);
          },
        },
        onComplete: () => {
          gsap.set(".ROCKET", { y: 0, opacity: 0 });
          gsap.to(".ROCKET", { opacity: 1, duration: 2 });
        },
      }
    );

    gsap.to(".Blob", {
      scale: 1.3,
      repeat: -1,
      ease: "linear",
      delay: "0.3",
      yoyo: "true",
      stagger: "0.3",
      duration: 0.5,
      backgroundColor: "red",
    });
  });
  useGSAP(() => {
    const introText1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".HEADING-TEXT-S", // Ensure the first span comes into view
        start: "top 50%",
        end: "+=300",
      },
    });
    introText1.from(".HEADING-CHAR-S", {
      y: 200,

      opacity: 0.5, // Move each character 200px to the right initially
      duration: 1.5,
      ease: "elastic.out(1,0.6)",

      stagger: 0.04,
      // Stagger effect for smoother animation
    });
  });
  const handlePageNavigation = (componentId) => {
    const page = document.getElementById(componentId);
    if (page) {
      page.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div
        id="CANVAS"
        className="relative px-[50px] w-[99.5vw] h-fit bg-black text-white"
      >
        <div
          style={{
            display: showCursor ? "inline-flex" : "none",
            zIndex: "1",
          }}
          className="CURSOR sm:w-[5vw] absolute sm:h-[4vh] rounded-lg bg-white/20 sm:flex items-center justify-center space-x-2"
        >
          <div className="DOT w-[0.4vw] h-[0.4vw] bg-white"></div>
          <div className="w-fit h-full flex p-1">
            <h1 className="font-heading1 text-xs tracking-wider text-center">
              View
            </h1>
          </div>
        </div>
        <div className="PAGE-1  h-[150vh] py-20 px-10 ">
          <div className="flex flex-col items-center justify-center ">
            <div className=" py-5 overflow-hidden flex items-center justify-center">
              <h1 className="HEADING-TEXT-S text-8xl font-heading2 tracking-wider">
                {"Spacecrafts".split("").map((char, index) => (
                  <span className="HEADING-CHAR-S inline-block" key={index}>
                    {char}
                  </span>
                ))}
              </h1>
            </div>

            <h2 className="font-heading1 text-xl  text-white/30 ">
              Crafted for the Cosmos, Engineered for Every Mission
            </h2>
          </div>
          <div className="BOTTOM-DEATILS w-full  h-full sm:flex justify-between">
            <div className="LEFT h-full  text-white sm:w-[350px] sm:flex flex-col items-center justify-items-start pt-[27vh] space-y-[15vh]">
              {/* <div className=" h-[15vh] w-[0.2vw] bg-white/50 rounded-full"></div> */}

              <div className="flex justify-start items-center space-x-7">
                <div className="Blob h-[1vw] w-[1.5vw] blur-sm bg-green-600  rounded-full"></div>
                <h1
                  style={{ lineHeight: "1.5vw", wordSpacing: "2px" }}
                  className="font-heading1 sm:text-xl sm:tracking-widest"
                >
                  Explore a new generation of adaptable spacecraft
                </h1>
              </div>
              <div className="flex justify-start  items-center space-x-7">
                <div className="Blob h-[1vw] w-[1.5vw] blur-sm bg-green-600  rounded-full"></div>
                <h1
                  style={{ lineHeight: "1.5vw", wordSpacing: "2px" }}
                  className="font-heading1 sm:text-xl sm:tracking-widest"
                >
                  Designed for versatility and resilience.
                </h1>
              </div>
              <div className="flex justify-start  items-center space-x-7">
                <div className="Blob h-[1vw] w-[1.5vw] blur-sm bg-green-600  rounded-full"></div>
                <h1
                  style={{ lineHeight: "1.5vw", wordSpacing: "2px" }}
                  className="font-heading1 sm:text-xl sm:tracking-widest"
                >
                  Crafted for missions beyond cosmos.
                </h1>
              </div>
            </div>
            <div className="ROCKET-CONTAINER mt-[300px] h-full sm:w-[500px] sm:flex items-end justify-center ">
              <div className="ROCKET sm:flex relative items-end justify-center">
                <img
                  src={s0}
                  alt=""
                  style={{
                    width: "55%",
                    height: "55%",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                />
                <div className="Smoke absolute bottom-0 rounded-full w-[15vw] h-[10vw] bg-slate-500 blur-3xl"></div>
                <div className="Smoke1 absolute -bottom-[10vh] left-[20vw] rounded-full w-[2vw] h-[5vw] bg-red-500 blur-md "></div>
                <div className="Smoke2 absolute -bottom-[10vh] left-[11vw] rounded-full w-[2vw] h-[5vw] bg-blue-500 blur-md  "></div>
              </div>
            </div>

            <div
              style={{ zIndex: "5" }}
              className="RIGHT h-[80%]  relative sm:w-[350px] sm:flex flex-col items-center justify-start p-5 space-y-[9vh] pt-[120px]  border-white/20"
            >
              <h1 className="font-heading2 text-3xl text-center mb-[3vh] tracking-widest">
                Frontiers Fleet
              </h1>

              <h1
                onMouseEnter={handleCursorEnter}
                onMouseLeave={handleCursorLeave}
                onClick={() => handlePageNavigation("S-1")}
                className="font-heading1 text-xl cursor-pointer hover:text-white hover:scale-110 transition-transform duration-75 tracking-wider  text-white/40"
              >
                Solaris Sentinel{" "}
              </h1>
              <h1
                onMouseEnter={handleCursorEnter}
                onMouseLeave={handleCursorLeave}
                onClick={() => handlePageNavigation("S-2")}
                className="font-heading1 text-xl cursor-pointer hover:text-white hover:scale-110 transition-transform duration-75 tracking-wider text-white/40"
              >
                Stellar Voyager{" "}
              </h1>
              <h1
                onMouseEnter={handleCursorEnter}
                onMouseLeave={handleCursorLeave}
                onClick={() => handlePageNavigation("S-3")}
                className="font-heading1 text-xl cursor-pointer hover:text-white hover:scale-110 transition-transform duration-75 tracking-wider text-white/40"
              >
                Nexus Explorer{" "}
              </h1>
              <h1
                onMouseEnter={handleCursorEnter}
                onMouseLeave={handleCursorLeave}
                onClick={() => handlePageNavigation("S-4")}
                className="font-heading1 text-xl cursor-pointer hover:text-white hover:scale-110 transition-transform duration-75 tracking-wider text-white/40"
              >
                Excalibur{" "}
              </h1>
              <h1
                onMouseEnter={handleCursorEnter}
                onMouseLeave={handleCursorLeave}
                onClick={() => handlePageNavigation("S-5")}
                className="font-heading1 text-xl cursor-pointer hover:text-white hover:scale-110 transition-transform duration-75 tracking-wider  text-white/40"
              >
                Celestium{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpaceCrafts;
