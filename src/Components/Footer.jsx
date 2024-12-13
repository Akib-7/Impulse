import React from "react";
import SpaceCrafts from "./SpaceCrafts";

const Footer = () => {
  return (
    <>
      <div className="FOOTER w-[99.6vw] h-[120vh] flex bg-black items-start pt-[100px] justify-center">
        <div className="w-[90%] h-[100%] rounded-t-3xl bg-gradient-to-t from-black to-cyan-900 via-emerald-900">
          <div className="Top-Section w-full h-[40%] flex items-center space-x-2 justify-between px-10 py-4">
            <div className="Left w-[35%] h-full  flex flex-col items-start justify-center space-y-2">
              <h1 className="font-heading1 text-3xl font-bold text-white">
                Visit us
              </h1>
              <p
                style={{ lineHeight: "1.2vw" }}
                className="font-heading1   text-white/40"
              >
                Share your aspiration with us and book a tour at our facility
                right now!
              </p>
              <h1 className="font-heading1 text-xl cursor-pointer  text-white">
                impulse.tour@space.au
              </h1>
            </div>
            <div className="Center w-[30%] h-full  flex flex-col items-center justify-center space-y-4">
              <h1 className="font-heading1 text-3xl font-bold text-white">
                Explore
              </h1>
              <div className=" flex flex-col items-center justify-center w-full h-fit ">
                <h1 className="  font-heading1 text-lg  text-white cursor-pointer">
                  Home
                </h1>
                <h1 className="  font-heading1 text-lg  text-white cursor-pointer">
                  About us
                </h1>
                <h1 className="  font-heading1 text-lg  text-white cursor-pointer">
                  SpaceCrafts
                </h1>
                <h1 className="  font-heading1 text-lg  text-white cursor-pointer">
                  Missions
                </h1>
              </div>
            </div>
            <div className="Right w-[35%] h-full  flex flex-col items-center justify-center space-y-4">
              <h1 className="font-heading1 text-3xl font-bold text-white">
                Follow Us
              </h1>
              <div className=" flex flex-col items-center justify-center w-full h-fit ">
                <h1 className="  font-heading1 text-lg  text-white cursor-pointer">
                  Twitter (X)
                </h1>
                <h1 className="  font-heading1 text-lg  text-white cursor-pointer">
                  Instagram
                </h1>
                <h1 className="  font-heading1 text-lg  text-white cursor-pointer">
                  LinkedIn
                </h1>
                <h1 className="  font-heading1 text-lg  text-white cursor-pointer">
                  Facebook
                </h1>
              </div>
            </div>
          </div>
          <div className="Bottom-Section  w-full h-[60%] flex items-end justify-center ">
            <h1 className="font-heading2 text-[250px] tracking-wider text-white uppercase ">
              impulse
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
