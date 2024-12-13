import React from "react";

const Dummy = () => {
  return (
    <main className="relative h-fit">
      <div className="flex w-screen h-[600vh] relative  bg-stone-950 p-2 space-x-2">
        <div className="LEFT w-[50vw]  flex flex-col space-y-5 border-2 border-red-700 p-5 h-fit text-white">
          <div className="h-[100vh] w-full flex flex-col space-y-5 border-2 border-orange-500 ">
            <h1>OVERVIEW</h1>
            <h1>DESCRIPTION</h1>
            <h1>BUTTON</h1>
          </div>
          <div className="h-[100vh] w-full flex flex-col space-y-5 border-2 border-orange-500 ">
            <h1>OVERVIEW</h1>
            <h1>DESCRIPTION</h1>
            <h1>BUTTON</h1>
          </div>
        </div>
        <div className="RIGHT w-[50vw] border-2 border-green-700 relative h-[300vh]">
          <div className="RIGHT-STICKY w-full h-[80vh] bg-rose-950 sticky z-50 top-[5vh]"></div>
        </div>
      </div>
    </main>
  );
};

export default Dummy;
