import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import s1 from "../assets/s1.webp";
import s2 from "../assets/s2.webp";
import s3 from "../assets/s3.webp";
import s4 from "../assets/s4.webp";
import s5 from "../assets/s5.webp";

const SpaceVehicles = () => {
  const spacecrafts = [
    {
      name: "Solaris Sentinel",
      purpose: "Solar Defense and Observation",
      engine: "Photon Fusion Propulsion",
      totalFlights: 56,
      totalReflights: 12,
      totalLandings: 44,
      notableMissions: [
        "Solar Flare Prediction Program",
        "Sun’s Corona Observation",
      ],

      overview:
        "The Solaris Sentinel is engineered to operate close to the sun, analyzing and predicting solar activity. With a robust structure built to endure intense radiation, it has completed multiple successful reflights and landings, providing invaluable insights to protect Earth from solar disturbances.",
    },
    {
      name: "Stellar Voyager",
      purpose: "Deep Space Exploration",
      engine: "Interstellar Drive System",
      totalFlights: 82,
      totalReflights: 15,
      totalLandings: 60,
      notableMissions: [
        "The Beyond Neptune Expedition",
        "Milky Way Boundary Exploration",
      ],
      overview:
        "Designed for extensive journeys across our solar system and beyond, the Stellar Voyager has a history of successful deep-space missions. Its high reflight rate and reliable landing system make it a top choice for long-duration space exploration.",
    },
    {
      name: "Nexus Explorer",
      purpose: "Planetary Research and Surveying",
      engine: "Dual-Ion Propulsion",
      totalFlights: 45,
      totalReflights: 10,
      totalLandings: 40,
      notableMissions: ["Mars Terrain Analysis", "Europa Subsurface Survey"],
      overview:
        "The Nexus Explorer is built for precision planetary surveys, gathering high-value samples and data. With an impressive track record of successful landings and multiple reflights, it is ideal for multi-planet missions within the solar system.",
    },
    {
      name: "Excalibur",
      purpose: "Heavy-Duty Transport and Resource Collection",
      engine: "Quantum Core Reactor",
      totalFlights: 37,
      totalReflights: 8,
      totalLandings: 30,
      notableMissions: [
        "Asteroid Mining Operation",
        "Lunar Resource Retrieval",
      ],
      overview:
        "Excalibur’s strength lies in its ability to transport large payloads from celestial bodies. Its Quantum Core Reactor offers efficient energy usage, allowing it to complete resource missions with a high landing success rate.",
    },
    {
      name: "Celestium",
      purpose: "Advanced Communication and Relay",
      engine: "Plasma Wave Propulsion",
      totalFlights: 94,
      totalReflights: 22,
      totalLandings: 50,
      notableMissions: [
        "Interstellar Relay Station Deployment",
        "Planetary Communication Array",
      ],
      overview:
        "As a key component of interplanetary communication, Celestium acts as a hub for long-distance signals. Its plasma wave propulsion provides quick positioning adjustments, while its high reflight and landing counts make it essential for maintaining continuous communication networks.",
    },
  ];

  const stickyImageAnimation = gsap.timeline();
  useGSAP(() => {
    const imageConatiners = document.querySelectorAll(
      ".STICKY-IMAGE-CONTAINER"
    );
    imageConatiners.forEach((item, index) => {
      item.style.zIndex = imageConatiners.length - index;
    });
    stickyImageAnimation.set(".STICKY-IMAGE-CONTAINER", {
      clipPath: () => {
        return "inset(0px 0px 0px 0px)";
      },
    });
    stickyImageAnimation.to(
      ".STICKY-IMAGE-CONTAINER:not(:last-child)",

      {
        clipPath: () => {
          return "inset(0% 0px 100% 0px)";
        },
        scale: 1,
        stagger: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: spaceVehicles.current,
          start: "top 5%",
          end: "+=3150",

          scrub: true,
        },
      }
    );
  });

  const spaceVehicles = useRef(null);
  return (
    <div
      ref={spaceVehicles}
      className="bg-white w-[99.6vw] h-fit flex  justify-center items-center"
    >
      <div className="PAGE-2 w-full   flex relative justify-center bg-black p-2  space-x-2">
        <div className="LEFT w-[50vw]  flex flex-col space-y-5  p-5  h-fit text-white">
          {spacecrafts.map((item, index) => (
            <div
              key={index}
              id={`S-${index + 1}`}
              style={{ wordSpacing: "0.1vw" }}
              className="SPACECRAFT-1 h-[100vh]  w-full flex flex-col space-y-5 border-b-[1px] border-white/10 "
            >
              <div className="flex flex-col">
                <h1
                  className={`font-heading2   sm:mt-[5vh] text-center sm:tracking-wider sm:text-5xl`}
                >
                  {item.name}
                </h1>
                <h1 className="font-heading1 text-xl text-center sm:mb-[5vh] tracking-tight ">
                  {item.purpose}
                </h1>
              </div>
              <div
                style={{ lineHeight: "1.5vw" }}
                className="sm:flex sm:flex-col  items-start justify-center font-heading1 sm:space-y-5"
              >
                <h1 className="tracking-wider  text-xl font-semibold">
                  Overview
                </h1>
                <p className="ml-5 sm:font-normal sm:text-md sm:tracking-wider">
                  {item.overview}
                </p>
                <h1 className="sm:tracking-wider  sm:text-xl sm:font-semibold">
                  Engine
                </h1>
                <p className="ml-5 sm:font-normal sm:text-md sm:tracking-wider">
                  {item.engine}
                </p>
                <h1 className="sm:tracking-wider  sm:text-xl sm:font-semibold">
                  Notable Missions
                </h1>
                <ul className="list-disc pl-4">
                  {item.notableMissions.map((item, index) => (
                    <li
                      key={index}
                      className="ml-5  sm:font-normal sm:text-md sm:tracking-wider"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="BOTTOM-STATS pt-10 border-b-[1px] border-white/10 self-center p-5 rounded-xl text-white/70 sm:flex items-center justify-center space-x-5  ">
                  <div className="sm:flex group cursor-pointer hover:text-white sm:flex-col items-center justify-center w-fit h-fit transition-transform duration-300 hover:scale-110">
                    <h1 className="font-heading2 sm:text-2xl">
                      {item.totalFlights}
                    </h1>
                    <h1 className="font-heading1 tracking-wider sm:text-sm">
                      Flights
                    </h1>
                  </div>
                  <div className="sm:flex group cursor-pointer hover:text-white sm:flex-col items-center justify-center w-fit h-fit transition-transform duration-300 hover:scale-110">
                    <h1 className="font-heading2 sm:text-2xl">
                      {item.totalLandings}
                    </h1>
                    <h1 className="font-heading1 tracking-wider sm:text-sm">
                      Landings
                    </h1>
                  </div>
                  <div className="sm:flex group cursor-pointer hover:text-white sm:flex-col items-center justify-center w-fit h-fit transition-transform duration-300 hover:scale-110">
                    <h1 className="font-heading2 sm:text-2xl">
                      {item.totalReflights}
                    </h1>
                    <h1 className="font-heading1 tracking-wider sm:text-sm">
                      Reflights
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="RIGHT w-[40vw]  relative ">
          <div className="RIGHT-STICKY sticky top-0 w-full h-[100vh]    flex items-center justify-center">
            {[s2, s1, s3, s4, s5].map((src, index) => (
              <div
                key={index}
                className="STICKY-IMAGE-CONTAINER sm:flex sm:flex-col items-center  justify-center  absolute h-[100vh] bg-black rounded-full overflow-hidden  "
                style={{
                  width: "650px", // Set the desired square size

                  // Ensures no overflow outside the square
                }}
              >
                <img
                  src={src}
                  loading="lazy"
                  alt=""
                  style={{
                    width: "80%",
                    height: "80%",
                    objectFit: "contain",
                    zIndex: 1, // Maintains aspect ratio within the container
                  }}
                />
                <div
                  className="BLUR-LIGHT absolute bottom-[10vh] blur-3xl w-[400px] h-[600px] opacity-80 rounded-full"
                  style={{
                    backgroundColor:
                      index === 0
                        ? "rgba(255, 165, 0, 0.4)" //orange
                        : index === 1
                        ? "rgba(198,233,248, 0.2)" //blue
                        : index === 2
                        ? "rgba(255, 0, 0, 0.4)" //red
                        : index === 3
                        ? "rgba(231, 157, 13, 0.7)" //yellow
                        : index === 4
                        ? "rgba(13, 229, 24, 0.4)" //GREEN
                        : "rgba(0, 0, 0, 0.4)", // default color (green)
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceVehicles;
