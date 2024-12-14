import React, { useEffect, useState } from "react";
import { BarLoader, CircleLoader } from "react-spinners";
import DummyPages from "./DummyPages";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { assets } from "./assets";
const LoadingScreen = ({ loadMethod }) => {
  const [loadedAsset, setLoadedAsset] = useState(2);

  const [totalAssets, setTotalAssets] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    var updateProgress = () => {
      setLoadedAsset((prevLoaded) => prevLoaded + 1);

      if (loadedAsset === totalAssets) {
        setTimeout(() => {
          setIsAnimating(false); // Ensure smooth transition
          loadMethod(); // Move forward after loading
        }, 500); // Adjust delay as needed
      }
    };

    assets.forEach((asset) => {
      const img = new Image();
      img.src = `${asset}?cacheBuster=${Date.now()}`;
      img.onload = () => {
        updateProgress();
      };
      img.onerror = () => {
        updateProgress();
      };
    });
  }, [loadMethod]);

  useGSAP(() => {
    const t1 = gsap.timeline({
      onComplete: () => {
        loadMethod(); // Trigger after animation completes
      },
    });

    t1.fromTo(
      ".Loading-Container",
      {
        y: 200,
        scale: 0.7,
        opacity: 0,
      },
      {
        duration: 0.4,
        opacity: 1,
        y: 0,
        ease: "linear",
      }
    );
    t1.from(".Compile-Page-2", {
      delay: 0.7,
      translateX: "150%",
      duration: 1.2,
      ease: "power3.out",
    });
    t1.from(
      ".Compile-Page-1",
      {
        translateX: "-150%",
        duration: 1.2,
        ease: "power3.out",
      },
      "<"
    );
    t1.to(".Loading-Container", {
      delay: 0.4,
      scale: 1,
      borderRadius: "0px",
      // ease: "circ.inOut",
      ease: "circ.inOut",
      duration: 1,
    });

    t1.to(
      ".TEXT-0",
      {
        opacity: 0,
      },
      "<"
    );
  });

  return (
    <div className="bg-white overflow-hidden w-[99.6vw] ">
      <div
        style={{}}
        className="Loading-Container   w-[99.6vw] bg-black z-50 h-screen relative   rounded-2xl "
      >
        <div className="w-full h-full relative text-white gap-4 grid sm:grid-cols-12">
          <div className="sm:col-span-4 sm:row-span-2  sm:p-5">
            <div className="sm:flex  sm:h-full justify-between sm:p-5 sm:flex-col">
              <div className=" mt-[159px] -ml-[40px] ">
                <div className=" Heading sm:flex relative   sm:pl-5 sm:mb-[0vh]   items-center sm:w-[5vw]">
                  <h1
                    style={{
                      lineHeight: "3.2vw",
                    }}
                    className=" sm:text-[2.5vw]  font-semibold tracking-widest  z-10  font-heading2 uppercase "
                  >
                    Impulse
                    <br />
                  </h1>
                </div>
              </div>
              <h1 className="TEXT-0 sm:text-2xl font-heading1">
                Loading . . .
              </h1>
            </div>
          </div>
          <div className="sm:col-span-6  sm:row-span-12 "></div>
          <div className="Counter TEXT-0 sm:col-span-2 p-5 sm:mt-[70vh]">
            <BarLoader
              color="white"
              loading={true}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
              className="!w-[10vw]"
            />
          </div>
        </div>
      </div>
      <DummyPages />
    </div>
  );
};
// import React, { useEffect, useState } from "react";

// import DummyPages from "./DummyPages";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// const LoadingScreen = ({ loadMethod }) => {
//   const [count, setCount] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   useEffect(() => {
//     if (count < 100) {
//       const timer = setTimeout(() => {
//         setCount(count + 1);
//       }, 20);
//       setIsAnimating(true);

//       return () => clearTimeout(timer);
//     }
//     setIsAnimating(false);
//   });

//   useGSAP(() => {
//     var t1 = gsap.timeline({
//       onComplete: () => {
//         loadMethod();
//       },
//     });

//     t1.fromTo(
//       ".Loading-Container",
//       {
//         y: 200,
//         scale: 0.7,
//         opacity: 0,
//       },
//       {
//         duration: 0.4,
//         opacity: 1,
//         y: 0,
//         ease: "linear",
//       }
//     );
//     t1.from(".Compile-Page-2", {
//       delay: 0.7,
//       translateX: "150%",
//       duration: 1.2,
//       ease: "power3.out",
//     });
//     t1.from(
//       ".Compile-Page-1",
//       {
//         translateX: "-150%",
//         duration: 1.2,
//         ease: "power3.out",
//       },
//       "<"
//     );
//     t1.to(".Loading-Container", {
//       delay: 0.4,
//       scale: 1,
//       borderRadius: "0px",
//       // ease: "circ.inOut",
//       ease: "circ.inOut",
//       duration: 1,
//     });
//     t1.to(
//       ".TEXT-0",
//       {
//         opacity: 0,
//       },
//       "<"
//     );
//   });
//   return (
//     <div className="bg-white overflow-hidden w-[99.6vw] ">
//       <div
//         style={{}}
//         className="Loading-Container   w-[99.6vw] bg-black z-50 h-screen relative   rounded-2xl "
//       >
//         <div className="w-full h-full relative text-white gap-4 grid sm:grid-cols-12">
//           <div className="sm:col-span-4 sm:row-span-2  sm:p-5">
//             <div className="sm:flex  sm:h-full justify-between sm:p-5 sm:flex-col">
//               <div className=" mt-[159px] -ml-[40px] ">
//                 <div className=" Heading sm:flex relative   sm:pl-5 sm:mb-[0vh]   items-center sm:w-[5vw]">
//                   <h1
//                     style={{
//                       lineHeight: "3.2vw",
//                     }}
//                     className=" sm:text-[2.5vw]  font-semibold tracking-widest  z-10  font-heading2 uppercase "
//                   >
//                     Impulse
//                     <br />
//                   </h1>
//                 </div>
//                 {/* <p className="sm:text-xl font-heading1">
//                 Experience inter-dimensional Travel with us.
//               </p> */}
//               </div>
//               <h1 className="TEXT-0 sm:text-2xl font-heading1">
//                 Loading . . .
//               </h1>
//             </div>
//           </div>
//           <div className="sm:col-span-6  sm:row-span-12 "></div>
//           <div className="Counter TEXT-0 sm:col-span-2 p-5 sm:mt-[70vh]">
//             <h1 className="sm:text-4xl font-heading2 ">{count}%</h1>
//           </div>
//         </div>
//       </div>
//       <DummyPages />
//     </div>
//   );
// };

export default LoadingScreen;
