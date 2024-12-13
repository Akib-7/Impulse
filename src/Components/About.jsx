import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import about from "../assets/About.webp";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(() => {
    gsap.to(".HYPHEN", {
      width: "35px",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 70%",
        end: "+=500",

        scrub: true,
      },
    });
  });
  return (
    <div
      ref={aboutRef}
      className="relative w-[99.6vw] h-[180vh] bg-black flex items-center justify-center  py-[15vh]"
    >
      <div className=" h-full w-full  ">
        <div className="flex flex-col items-center justify-center w-full h-fit">
          <div className="flex items-center justify-center w-full h-fit space-x-[1vw]">
            <h1 className="HEADING-TEXT text-center text-white text-7xl font-heading2 tracking-widest">
              Infinite
            </h1>
            <div className="HYPHEN w-[130px] h-[15px] rounded-3xl bg-cyan-400 blur-sm"></div>
            <h1 className="HEADING-TEXT text-center text-white/20 text-3xl font-heading2 tracking-wide">
              Horizons
            </h1>
          </div>
          <div className="flex items-center justify-center w-full h-fit space-x-[1vw]">
            <h1 className="HEADING-TEXT text-center text-white/20 text-3xl font-heading2 tracking-wide">
              Limitless
            </h1>
            <div className="HYPHEN w-[130px] h-[15px] rounded-3xl bg-emerald-500 blur-sm"></div>
            <h1 className="HEADING-TEXT text-center text-white text-7xl font-heading2 tracking-widest">
              Impulse
            </h1>
          </div>
        </div>
        <Section1 />
      </div>
    </div>
  );
};

export default About;
const Section1 = () => {
  const introText = `At Impulse, we’re not just dreaming of space—we’re engineering the future. As a visionary space exploration company, we aim to redefine humanity’s relation with the cosmos by merging innovation, ambition, and cutting-edge technology.`;
  const visionText = `To unlock the mysteries of the universe while making space travel sustainable, accessible, and awe-inspiring for everyone. With every launch, mission, and discovery, we strive to bring humanity closer to a future where the stars are no longer out of reach`;
  const aspirationText = `Impulse dreams of a united humanity with a shared purpose of unlocking the secrets of the universe. Whether it’s building colonies on Mars, harvesting asteroids for rare materials, or simply inspiring a child to look up at the stars, every step we take is a leap for humanity`;

  const introRef = useRef(null);

  useGSAP(() => {
    gsap.from(".INTRO-ABOUT", {
      y: -20,
      opacity: 0,
      rotate: -10,
      stagger: 0.05,
      duration: 0.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: introRef.current,
        start: "top 70%",
        end: "+=200",
      },
    });

    gsap.from(".INTRO-ABOUT2", {
      y: -20,
      opacity: 0,
      rotate: -10,
      stagger: 0.05,
      duration: 0.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: introRef.current,
        start: "top 40%",
        end: "+=200",
      },
    });
    gsap.from(".INTRO-ABOUT3", {
      y: -20,
      opacity: 0,
      rotate: -10,
      stagger: 0.05,
      duration: 0.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: introRef.current,
        start: "top 10%",
        end: "+=200",
      },
    });

    gsap.to(".BLOB", {
      right: 0,
      duration: 7,
      repeat: -1,
      yoyo: true,
      stagger: 0.5,

      ease: "linear",
    });
  });
  return (
    <>
      <div className="flex relative overflow-hidden items-center justify-end  w-full h-full text-white">
        <div
          style={{
            // background: "linear-gradient(to top, blue, transparent)",
            zIndex: "999",
          }}
          className="absolute bg-gradient-to-t from-black via-cyan-500 blur-sm to-transparent  bottom-[4vh] w-full h-[15vh] translate-x-[-50%] left-1/2"
        ></div>

        <div className="LEFT  absolute -left-[6.5vw] bottom-[10vh] w-[50%] h-[140vh]">
          <img
            className="h-[100%] w-[100%]  object-contain"
            src={about}
            alt=""
          />
        </div>
        <div className="RIGHT   pt-[35vh] px-[10vw] w-[70%] h-full bg-white/0 flex flex-col items-end justify-start space-y-[12vh]">
          <div className=" relative w-full h-fit  flex flex-col  items-end ">
            <div className=" blur-2xl  sm:-right-[0vw]  absolute sm:w-[17vw] sm:h-[2vw] rounded-full bg-gradient-to-r from-green-700 to-cyan-700"></div>
            <div className="BLOB blur-md -top-[2vh] right-[12vw] absolute sm:w-[5vw] sm:h-[3vw] rounded-full bg-gradient-to-r from-green-700 to-cyan-700"></div>
            <h1 className="text-3xl mb-[15px]  z-50 tracking-wider font-heading2 ">
              Who are we
            </h1>
            <div
              ref={introRef}
              style={{ lineHeight: "1.7vw" }}
              className="font-heading1 overflow-hidden  flex flex-wrap  px-[50px] tracking-wide text-xl font-light text-white/50"
            >
              {introText.split(" ").map((text, index) => (
                <div key={index} className=" overflow-hidden w-fit h-fit">
                  <span className="INTRO-ABOUT  mr-1 inline-block">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full relative h-fit  flex flex-col  items-end ">
            <div className=" blur-2xl  sm:-right-[0vw]  absolute sm:w-[7vw] sm:h-[2vw] rounded-full bg-gradient-to-r from-blue-700 to-white/30"></div>
            <div className="BLOB blur-md -top-[2vh] right-[4vw] absolute sm:w-[5vw] sm:h-[3vw] rounded-full bg-gradient-to-r from-blue-700 to-white/30"></div>
            <h1 className="text-3xl mb-[15px] z-50 tracking-wider font-heading2 ">
              Vision
            </h1>
            <div
              style={{ lineHeight: "1.7vw" }}
              className="font-heading1  flex flex-wrap  px-[50px] tracking-wide text-xl font-light text-white/50"
            >
              {visionText.split(" ").map((text, index) => (
                <div key={index} className=" overflow-hidden w-fit h-fit">
                  <span className="INTRO-ABOUT2 mr-1 inline-block">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full relative h-fit  flex flex-col  items-end ">
            <div className=" blur-2xl  sm:-right-[0vw]   absolute sm:w-[15vw] sm:h-[2vw] rounded-full bg-gradient-to-r from-violet-900 to-rose-900"></div>
            <div className="BLOB blur-md -top-[2vh]  right-[5vw] absolute sm:w-[5vw] sm:h-[3vw] rounded-full bg-gradient-to-r from-rose-950 to-purple-900"></div>
            <h1 className="text-3xl mb-[15px] z-50 tracking-wider font-heading2 ">
              Aspiration
            </h1>
            <div
              style={{ lineHeight: "1.7vw" }}
              className="font-heading1  flex flex-wrap  px-[50px] tracking-wide text-xl font-light text-white/50"
            >
              {aspirationText.split(" ").map((text, index) => (
                <div key={index} className=" overflow-hidden w-fit h-fit">
                  <span className="INTRO-ABOUT3  mr-1 inline-block">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
