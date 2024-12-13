import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className=" w-[99.6vw] h-[180vh] flex items-start justify-center">
        <div className="h-full w-[100%] rounded-3xl bg-gradient-to-b from-black via-white/10  to-black mt-[200px] py-[100px] ">
          <div className="Heading w-full h-fit flex items-center justify-center">
            <h1
              style={{ lineHeight: "13vw" }}
              className="font-heading2 text-center text-[180px] uppercase text-white"
            >
              get in touch
            </h1>
          </div>
          <div className="CONTACT-US w-full h-[25%] px-[50px] py-[20px] flex items-center justify-around space-x-10">
            <h1 className="font-heading1 text-center text-3xl uppercase text-white">
              ContactUs
            </h1>
            <div className="h-full w-[40%] flex items-center justify-center p-10">
              <h1 className="font-heading1  text-xl  text-white/60">
                Whether you want to learn , visit us or want to collaborate for
                fostering some inspiring ideas we welcome you to talk with us
                and fill this form @ impulse
              </h1>
            </div>
          </div>
          <div className="TO-EMAIL w-full h-fit px-[50px] py-[20px] flex items-start justify-between space-x-10">
            <div className="w-[40%]  h-fit flex items-center justify-center space-x-10">
              <h1 className="font-heading1 text-center text-3xl uppercase text-white">
                To:
              </h1>
              <div className="h-full w-[50%] rounded-full flex items-center  justify-start p-2">
                <h1 className=" font-heading1 rounded-3xl bg-gradient-to-tr from-emerald-900 to-cyan-700 text-white px-7 py-2 text-xl">
                  @impulse.tour@space.au
                </h1>
              </div>
            </div>
            <div className="  w-[50%] mx-auto">
              <form>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 font-heading1 py-4 text-lg text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      required
                      className="w-full bg-white placeholder:font-heading1 placeholder:text-black/70 placeholder:font-semibold rounded-3xl border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-6 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 font-heading1 text-white py-4 text-lg "
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="impulse.tour@space.au"
                      required
                      className="w-full placeholder:font-heading1 placeholder:text-black/70 placeholder:font-semibold bg-white rounded-3xl border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-6 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7  py-4 text-lg font-heading1 text-white"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Add a message"
                      required
                      className="w-full placeholder:font-heading1 placeholder:text-black/70 placeholder:font-semibold bg-white rounded-3xl border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div>
                    <button
                      type="submit"
                      className="flex text-white bg-gradient-to-tr to-cyan-800 from-green-800 border-0 py-3 px-6 focus:outline-none hover:scale-105 transition-transform hover:text-white rounded-3xl text-xl font-bold shadow-lg mx-0 flex-col text-center"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
