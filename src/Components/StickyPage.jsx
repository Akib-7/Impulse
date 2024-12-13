import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StickyPage = () => {
  useGSAP(() => {
    gsap.to(".section1", {
      rotate: -5,
      scale: 0.8,

      scrollTrigger: {
        scrub: 1,

        start: "top 0%",
        end: "bottom bottom",
      },
    });
    const t1 = gsap.timeline();
    t1.from(".section2", {
      rotate: 10,
      scale: 0.5,

      scrollTrigger: {
        start: "top top",
        end: "bottom 100%",
        scrub: true,
      },
    });
    t1.fromTo(
      gsap.utils.toArray(".INSIDE > .ele"),
      { height: "20%", y: "-50%", opacity: 0.5 },
      {
        height: "100%",

        y: "0%",
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          scrub: 1,
          start: "top -50%",
          end: "bottom 100%",
        },
      }
    );
  });

  return (
    <main className="h-fit relative">
      <Section1 />
      <Section3 />
      <Section2 /> {/* Corrected the component name */}
    </main>
  );
};

const Section1 = () => {
  return (
    <div className="section1 w-screen h-[100vh] sticky top-0  flex justify-center items-center text-white ">
      <div className="relative w-full h-full">
        {/* SVG as background */}

        {/* Overlaying content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl tracking-widest   font-heading2 mb-4 ">
              IMPULSE
            </h1>
            <p className="text-3xl font-heading1">
              This is a description or some other content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section3 = () => {
  return (
    <div className="section3 w-screen h-[100vh] sticky top-0  flex justify-center items-center text-white ">
      <div className="relative w-full h-full">
        {/* SVG as background */}

        <svg
          className="absolute top-0 left-0 w-full h-full z-0"
          version="1.1"
          viewBox="0 0 700 700"
          preserveAspectRatio="none"
        >
          <defs>
            <filter
              id="nnnoise-filter"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              colorInterpolationFilters="linearRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.2"
                numOctaves="4"
                seed="15"
                stitchTiles="stitch"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                result="turbulence"
              />
              <feSpecularLighting
                surfaceScale="40"
                specularConstant="3"
                specularExponent="20"
                lightingColor="#012550"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="turbulence"
                result="specularLighting"
              >
                <feDistantLight azimuth="3" elevation="200" />
              </feSpecularLighting>
            </filter>
          </defs>
          <rect width="700" height="700" fill="#000112ff" />
          <rect
            width="700"
            height="700"
            fill="#012550"
            filter="url(#nnnoise-filter)"
          />
        </svg>

        {/* Overlaying content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4 tracking-wider font-heading1">
              IMPULSE
            </h1>
            <p className="text-3xl font-heading1 tracking-wide">
              This is a description or some other content
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Section2 = () => {
  return (
    <div className="section2 relative w-screen h-[100vh] p-1 bg-gray-800 flex justify-center items-end text-white">
      {" "}
      <div className="grid INSIDE w-full sm:h-[70%] grid-cols-1 sm:grid-cols-12 gap-x-5">
        <div className=" ele bg-red-950 sm:col-span-4 "></div>
        <div className=" ele bg-lime-950 sm:col-span-4 "></div>
        <div className=" ele bg-black sm:col-span-4 "></div>
      </div>
    </div>
  );
};

export default StickyPage;
