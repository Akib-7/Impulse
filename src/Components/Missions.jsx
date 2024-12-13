import React, { useRef, useState } from "react";
import astronaut from "../assets/astronaut2.webp";
import p1 from "../assets/planet1.webp";
import p2 from "../assets/planet2.webp";
import p3 from "../assets/planet3.webp";
import p4 from "../assets/planet4.webp";
import p5 from "../assets/planet5.webp";
import bg from "../assets/188.jpg";
import M1 from "../assets/M1.webp";
import M2 from "../assets/Landing1.webp";
import M6 from "../assets/M6.webp";
import spaceCraft from "../assets/s0.webp";
import astro from "../assets/astro.webp";
import saturn from "../assets/saturn.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Missions = () => {
  return (
    <div className="h-fit relative">
      <TextMask />
      <FocalImage />
      <CosmoNauts />
    </div>
  );
};

export default Missions;

const TextMask = () => {
  const introRef = useRef(null);

  const introText = `"We aim to foster innovation that transcends terrestrial limitations, enabling humanity to thrive beyond our planet.
We are dedicated to building technologies that make space accessible, secure, and beneficial for generations to come.
Our goal is not just to explore space but to establish a meaningful presence in it.
"`;
  const paragraphMaskAnimation = gsap.timeline();
  useGSAP(() => {
    const introText1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".HEADING-TEXT0", // Ensure the first span comes into view
        start: "top 50%",
        end: "+=300",
      },
    });
    introText1.from(".HEADING-CHAR0", {
      y: 200,

      opacity: 0.5, // Move each character 200px to the right initially
      duration: 1.5,
      ease: "elastic.out(1,0.6)",

      stagger: 0.04,
      // Stagger effect for smoother animation
    });
  });
  useGSAP(() => {
    paragraphMaskAnimation.fromTo(
      ".INTRO-MISSIONS",
      // { opacity: 0, y: -20, rotate: -20 },
      { scale: 1.5, opacity: 0.5 },
      {
        stagger: 1,
        scale: 1,

        opacity: 1,
        ease: "back.in",
        color: "white",

        scrollTrigger: {
          trigger: introRef.current,
          scrub: true,
          start: "top 15%",
          end: "+=1700",
        },
      }
    );
  });
  return (
    <>
      <div className="sm:scale-75 lg:scale-95 md:scale-90  w-[99.6vw] h-[400vh] bg-black  ">
        <div className="relative flex flex-col items-center space-y-[100px] h-full  w-full">
          <div className="HEADING-TEXT0 mt-[100px]  py-8 overflow-hidden flex  items-center justify-center w-[80vw] ml-[1vw]  space-x-[190px] h-fit p-2">
            <h1 className="  text-white text-8xl font-heading2 tracking-widest ">
              {"Missions".split("").map((char, index) => (
                <span className="HEADING-CHAR0 inline-block " key={index}>
                  {char}
                </span>
              ))}
            </h1>
          </div>
          <div className="sticky top-[150px]   w-[65vw]">
            <div
              ref={introRef}
              style={{ lineHeight: "2.5vw" }}
              className="font-heading1 overflow-hidden    flex flex-wrap  px-[50px]  tracking-tight text-3xl"
            >
              {introText.split(" ").map((text, index) => (
                <div key={index} className="w-fit h-fit  ">
                  <span className="INTRO-MISSIONS  mr-3 inline-block opacity-0 text-stone-900">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-full relative ">
            <div className="w-[12vw] shadow-md     h-[20vw]   absolute top-[250px] right-[300px]  ">
              <img
                className="w-[100%] h-[100%]  object-cover "
                src={astro}
                alt=""
              />
            </div>
            <div className=" w-[18vw] h-[12vw] shadow-md  -rotate-45 rounded-3xl overflow-hidden absolute top-[600px] left-[200px]   ">
              <img
                className="w-[100%] h-[100%] object-cover "
                src={saturn}
                alt=""
              />
            </div>
            <div
              style={{}}
              className="w-[15vw] h-[20vw] shadow-md     rounded-3xl   absolute top-[1000px] right-[250px]"
            >
              <img
                className="w-[100%] h-[100%] object-contain "
                src={spaceCraft}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const FocalImage = () => {
  const containerRef = useRef(null);
  const focalImageContainerRef = useRef(null);
  const focalImageRef = useRef(null);
  const focalImageAnimation = gsap.timeline();
  const ImageDetailsAnimation = gsap.timeline();
  const imagesRef = useRef(null);

  useGSAP(() => {
    focalImageAnimation.fromTo(
      focalImageRef.current,
      { skewY: 10 },
      {
        width: "65vw",
        perspective: 0,
        skewY: 3,
        x: 70,
        ease: "linear",

        height: "75vh",
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 0.2,
          start: "top 30%",
          end: "+=220",
        },
      }
    );

    gsap.to(imagesRef.current, {
      x: "-200vw", // Moves the container by 200vw (2 images worth)
      ease: "none",

      scrollTrigger: {
        trigger: containerRef.current, // Pin the main container
        start: "top 0%",
        end: "+=2800", // Duration is proportional to container width
        scrub: 1, // Smooth linking of scroll with animation
        pin: true, // Pin the container during scroll
      },
      onStart: () => {
        ImageDetailsAnimation.play();
      },
    });
    ImageDetailsAnimation.to(".IMAGE-DETAILS", {
      opacity: 1,
      duration: 2,
      ease: "back.out",
      scrollTrigger: {
        trigger: containerRef.current, // Pin the main container
        start: "top 10%",
        end: "+=10", // Duration is proportional to container width
        scrub: 1,
        // Smooth linking of scroll with animation
        // Pin the container during scroll
      },
    });
    ImageDetailsAnimation.pause();
  });
  return (
    <div
      ref={containerRef}
      className="relative  w-[99.6vw] flex justify-center -mt-[80vh] h-[110vh]"
    >
      <div className="relative overflow-x-hidden flex items-center  h-[100vh] w-[99.6vw] space-x-0">
        <div
          ref={imagesRef}
          className="IMAGES  w-[300vw] backdrop-blur-xl h-screen flex flex-row"
        >
          <div
            ref={focalImageContainerRef}
            className=" w-[99.6vw]  h-[100vh]   relative  flex items-start justify-center "
          >
            {/* ----------------IMAGE1--------------------------------------------- */}
            <div className="h-fit w-fit relative ">
              <div
                style={{ opacity: "0" }}
                className="IMAGE-DETAILS z-50 w-[500px] h-[150px]  -rotate-12 p-5  rounded-xl absolute left-[0px] top-[80px]  "
              >
                <h1 className="font-heading2 font-bold tracking-wide text-center text-5xl text-white">
                  Lunar Nexus Initiative
                </h1>
                <h1 className="font-heading1 text-center text-lg text-white">
                  July 2035
                </h1>
              </div>
              <div
                style={{ opacity: "0" }}
                className=" IMAGE-DETAILS z-50 w-[220px] h-[220px] flex items-center justify-center flex-col space-y-1 px-3  rounded-full absolute -right-[100px] bottom-[0px] -rotate-3 border-[3px]  border-white backdrop-blur-xl text-white/80  border-dashed font-bold "
              >
                <h1 className="font-heading1 tracking-wide  font-bold  text-2xl ">
                  Benefits
                </h1>
                <h1
                  style={{ lineHeight: "1.2vw" }}
                  className="font-heading1 text-center tracking-wider "
                >
                  Sustainable energy solutions, deep-space exploration support
                </h1>
              </div>
              <div
                style={{ opacity: "0" }}
                className="IMAGE-DETAILS w-[330px]  flex items-center justify-center h-[330px] py-5  px-10 bg-gradient-to-r to-transparent from-[#ff0202]/50 text-white rounded-l-full absolute  border-l-[0px]  -left-[230px] top-[300px] font-bold  "
              >
                <h1 className="font-heading1  font-bold text-center text-xl "></h1>
                <h1
                  style={{ lineHeight: "1.4vw" }}
                  className="font-heading1 tracking-wider text-lg  "
                >
                  Revolutionized humanity's energy systems by identifying
                  critical lunar resources, setting the foundation for
                  interstellar self-sufficiency.
                </h1>
              </div>
              <img
                style={{ filter: "drop-shadow(20px -20px 8px #ff0000)" }}
                ref={focalImageRef}
                className="FOCAL-IMAGE w-[20vw] h-[20vw] shadow-xl mt-[100px]  shadow-red-700 rounded-3xl object-cover "
                src={M1}
                alt=""
              />
            </div>
          </div>
          {/* ------------------------------------------------------IMAGE2 */}
          <div className=" w-[99.6vw]  h-[100vh]   relative  flex items-start justify-center ">
            <div className="h-fit w-fit   relative ">
              <div className="z-50 w-[500px] h-[150px]  -rotate-12 p-5  rounded-xl absolute left-[0px] top-[100px] text-white  ">
                <h1 className="font-heading2 font-bold tracking-wide text-center text-5xl ">
                  Stellar Pathfinders
                </h1>
                <h1 className="font-heading1 text-center font-bold text-lg ">
                  December 2055
                </h1>
              </div>
              <div className="z-50 w-[220px] h-[220px] flex items-center justify-center flex-col space-y-1 px-3  rounded-full absolute -right-[50px] bottom-[0px] -rotate-3 border-[3px]  border-white backdrop-blur-xl text-white  border-dashed  ">
                <h1 className="font-heading1 tracking-wide  font-bold  text-2xl ">
                  Benefits
                </h1>
                <h1
                  style={{ lineHeight: "1.2vw" }}
                  className="font-heading1 text-center font-bold tracking-wider "
                >
                  Pathways to exoplanets, Earth-like conditions exploration.
                </h1>
              </div>
              <div className=" w-[330px]  flex items-center justify-center h-[330px] py-5  px-10 bg-gradient-to-r to-transparent  from-blue-800/50 text-white rounded-l-full absolute  border-l-[0px]  -left-[130px] top-[300px]  ">
                <h1 className="font-heading1  font-bold text-center text-xl "></h1>
                <h1
                  style={{ lineHeight: "1.4vw" }}
                  className="font-heading1 tracking-wider text-lg font-bold  "
                >
                  Unlocked interstellar travel, paving humanity's way to
                  colonize exoplanets and create new Earths.
                </h1>
              </div>
              <img
                style={{ filter: "drop-shadow(20px -20px 8px #3b35b0)" }}
                className="FOCAL-IMAGE skew-y-3 w-[65vw] ml-[150px] h-[75vh] shadow-xl mt-[100px]  shadow-blue-800 rounded-3xl object-cover "
                src={M6}
                alt=""
              />
            </div>
          </div>

          {/* ------------------IMAGE3------------------------------- */}

          <div className=" w-[99.6vw]   h-[100vh]   relative  flex items-start justify-center ">
            <div className="h-fit w-fit   relative ">
              <div className="z-50 w-[550px] h-[150px]  -rotate-12 p-5  rounded-xl absolute  text-white left-[0px] top-[100px]  ">
                <h1 className="font-heading2 font-bold tracking-wide text-center text-5xl ">
                  Cosmic Shield Program
                </h1>
                <h1 className="font-heading1 text-center font-bold text-lg ">
                  March 2042
                </h1>
              </div>
              <div className="z-50 w-[220px] h-[220px] flex items-center justify-center flex-col space-y-1 px-3  rounded-full absolute -right-[50px] bottom-[0px] -rotate-3 border-[3px]  border-white backdrop-blur-xl text-white  border-dashed  ">
                <h1 className="font-heading1 tracking-wide  font-bold  text-2xl ">
                  Benefits
                </h1>
                <h1
                  style={{ lineHeight: "1.2vw" }}
                  className="font-heading1 text-center font-bold tracking-wider "
                >
                  Early warning systems, protection for space settlers
                </h1>
              </div>
              <div className=" w-[330px]  flex items-center justify-center h-[330px] py-5  px-10 bg-gradient-to-r to-transparent from-[#fd3700] text-white rounded-l-full absolute  border-l-[0px]  -left-[130px] top-[300px]  ">
                <h1 className="font-heading1  font-bold text-center text-xl "></h1>
                <h1
                  style={{ lineHeight: "1.4vw" }}
                  className="font-heading1 tracking-wider text-lg font-bold  "
                >
                  Enhanced cosmic security with unparalleled systems, ensuring
                  safe havens across the solar frontier.
                </h1>
              </div>
              <img
                style={{ filter: "drop-shadow(20px -20px 8px #fd3700)" }}
                className="FOCAL-IMAGE skew-y-3 w-[65vw] ml-[150px] h-[75vh] shadow-xl mt-[100px]  shadow-[#fd3700] rounded-3xl object-cover "
                src={M2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CosmoNauts = () => {
  const missionsContainer = useRef(null);
  const planetsRef = useRef(null);
  const circleContainerRef = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);
  const circle5 = useRef(null);
  // const circles = document.querySelectorAll(".CIRCLE");
  const circles = [circle1, circle2, circle3, circle4, circle5];
  const animatedPos = [
    { top: 30, left: 50 },
    { top: 30, left: 600 },
    { top: 210, left: 110 },
    { top: 210, left: 540 },
    { top: 280, left: 330 },
  ];
  useGSAP(() => {
    const planetsParallax = gsap.timeline({
      scrollTrigger: {
        trigger: missionsContainer.current, // Element to trigger the animation
        start: "top -15%", // Adjust as needed
        end: "+=1500px", // Adjust as needed
        scrub: 0.5, // Smooth animation with scroll

        pin: true,
      },
    });
    circles.forEach((circle, index) => {
      const newPos = animatedPos[index];
      planetsParallax.fromTo(
        circle.current,
        { opacity: 0, scale: 0.5, rotate: "280" },
        {
          rotate: 0,
          scale: 1,
          opacity: 1,
          top: newPos.top,
          left: newPos.left,
          duration: 1,
          ease: "linear",
        },
        0
      );
    });
    planetsParallax.fromTo(
      ".HEADINGS", // Select all `h1` inside `.HEADINGS`
      { opacity: 0, y: 40 }, // Initial state
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out",
        stagger: 0.3, // Delay between each heading animation
      }
      // Start immediately after the previous animation
    );
  }, []);
  useGSAP(() => {
    const introText2 = gsap.timeline({
      scrollTrigger: {
        trigger: planetsRef.current, // Ensure the first span comes into view
        start: "top 50%",
        end: "+=300",
      },
    });
    introText2.from(".HEADING-CHAR1", {
      y: 200,

      opacity: 0, // Move each character 200px to the right initially
      duration: 1.5,
      ease: "elastic.out(1,0.6)",

      stagger: 0.04,
      // Stagger effect for smoother animation
    });
    introText2.from(
      ".HEADING-CHAR2",
      {
        y: 200,

        opacity: 0, // Move each character 200px to the right initially
        duration: 1.5,
        ease: "elastic.out(1,0.6)",

        stagger: -0.04,
        // Stagger effect for smoother animation
      },
      0
    );
  });

  return (
    <div
      ref={missionsContainer}
      className="w-[99.6vw]  flex items-center justify-center bg-black h-[135vh]"
    >
      <div
        ref={planetsRef}
        className="relative  flex items-start  bg-black  overflow-hidden justify-center py-[100px]  w-[99.6vw] h-[135vh]"
      >
        <div
          style={{ zIndex: "999" }}
          className="absolute translate-x-[-50%] left-1/2 text-white mt-[5vh]   flex flex-col items-center justify-center "
        >
          <div className=" py-5 overflow-hidden flex  items-center justify-center  w-[90vw] ml-[1vw]  space-x-[190px] h-fit p-2">
            <h1 className="HEADING-TEXT1 text-5xl lg:text-7xl xl:text-8xl font-heading2 tracking-widest">
              {"Cosmo".split("").map((char, index) => (
                <span className="HEADING-CHAR1 inline-block" key={index}>
                  {char}
                </span>
              ))}
            </h1>
            <h1 className="HEADING-TEXT2 text-5xl lg:text-7xl xl:text-8xl font-heading2 tracking-widest">
              {"nauts".split("").map((char, index) => (
                <span className="HEADING-CHAR2 inline-block" key={index}>
                  {char}
                </span>
              ))}
            </h1>
          </div>
          <div className="w-fit uppercase -mt-[4vh]  h-fit flex items-center  justify-between space-x-[350px]">
            <h2 className="font-heading1 text-lg text-white/30 ">Cosmic</h2>
            <h2
              style={{ lineHeight: "1.4vw" }}
              className="font-heading1 text-lg   text-white/30 "
            >
              Cops
            </h2>
          </div>
        </div>
        <img
          src={bg}
          className="BACKROUND IMAGE absolute top-0 w-full h-screen opacity-0 scale-150 object-cover "
          alt=""
        />
        <div
          ref={circleContainerRef}
          className="CIRCLE-CONTAINER  mt-[30vh] w-[800px] h-[500px]   relative"
        >
          <div className="HEADINGS opacity-0 text-white font-heading1 absolute w-full h-full top-0">
            <h1
              style={{ zIndex: "999", lineHeight: "1.4vw" }}
              className="absolute HEADINGS  tracking-tight rounded-full text-xl text-center    px-2 py-[20px]   shadow-lg shadow-white/20  w-[250px]  -left-[295px] top-[50px]"
            >
              Decoding cosmic mysteries.
            </h1>
            <h1
              style={{ zIndex: "999", lineHeight: "1.4vw" }}
              className="absolute HEADINGS  tracking-tight rounded-full text-xl text-center    px-2 py-[20px]   shadow-lg shadow-white/20  w-[250px]  -right-[300px] top-[50px]"
            >
              Pioneering interstellar paths
            </h1>
            <h1
              style={{ zIndex: "999", lineHeight: "1.4vw" }}
              className="absolute HEADINGS  tracking-tight rounded-full text-xl text-center    px-2 py-[20px]   shadow-lg shadow-white/20  w-[250px]  -left-[200px] top-[300px]"
            >
              Securing humanity’s future.
            </h1>
            <h1
              style={{ zIndex: "999", lineHeight: "1.4vw" }}
              className="absolute HEADINGS  tracking-tight rounded-full text-xl text-center    px-2 py-[20px]   shadow-lg shadow-white/20  w-[250px]  -right-[200px] top-[300px]"
            >
              Innovating for Earth and beyond.
            </h1>
          </div>
          <div className="ASTRONAUT w-[300px] h-[450px] ml-[1vw] absolute translate-x-[-50%] left-1/2 top-[-25vh]">
            <img
              src={astronaut}
              className="object-cover w-full h-full"
              alt=""
            />
          </div>
          <div
            ref={circle1}
            className="CIRCLE CIRCLE-1 w-[120px] h-[120px] rounded-full   absolute top-[300px] left-[330px] "
          >
            <img
              src={p5}
              className="w-full z-50 h-full absolute object-cover"
              alt=""
            />
            <div className="w-full h-full rounded-full z-10 bg-cyan-500 blur-2xl "></div>
          </div>
          <div
            ref={circle2}
            className="CIRCLE CIRCLE-2 w-[120px] h-[120px] rounded-full  absolute top-[300px] left-[330px]"
          >
            <img
              src={p4}
              className="w-full h-full absolute z-50 object-cover"
              alt=""
            />
            <div className="w-full h-full rounded-full z-10 bg-green-700 blur-2xl "></div>
          </div>
          <div
            ref={circle3}
            className="CIRCLE CIRCLE-3 w-[120px] h-[120px] rounded-full  absolute top-[300px] left-[330px] "
          >
            <img
              src={p3}
              className="w-full h-full absolute z-50 object-cover"
              alt=""
            />
            <div className="w-full h-full rounded-full z-10 bg-white/50 blur-2xl "></div>
          </div>
          <div
            ref={circle4}
            className="CIRCLE CIRCLE-4 w-[120px] h-[120px] rounded-full  absolute top-[300px] left-[330px]  "
          >
            <img
              src={p2}
              className="w-full h-full absolute z-50 object-cover"
              alt=""
            />
            <div className="w-full h-full rounded-full z-10 bg-amber-700 blur-2xl "></div>
          </div>
          <div
            ref={circle5}
            className="CIRCLE CIRCLE-5 w-[120px] h-[120px] rounded-full  absolute top-[300px] left-[330px]   "
          >
            <img
              src={p1}
              className="w-full h-full absolute z-50 object-cover"
              alt=""
            />
            <div className="w-full h-full rounded-full z-10 bg-lime-500 blur-2xl "></div>
          </div>
        </div>
      </div>
    </div>
  );
};
