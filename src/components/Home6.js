import React from "react";
import Organic from "../assets/images/organic `1 1.png";
const Home6 = () => {
  return (
    <div className="w-full xl:h-[568px]  flex justify-center bg-gray-100 xl:p-[48px_96px]">
      <div className="xl:w-[1320px] w-[500px]     items-center h-[800px] rounded-[32px] xl:h-[470px] relative  round-3xl bg-green-400 overflow-hidden mb-10 ">
        <div className="xl:w-[700px] w-[486px] h-[537px] top-[-140px] left-[-20px] round-[99px] rotate-[60deg] xl:h-[800px]  absolute xl:left-[-100px] xl:top-[-240px] bg-orange-100 xl:bg-orange-100 rounded-[100px] "></div>
        <div className="xl:w-[850px] w-[486.23px] h-[537px] top-[500px] left-[30px] xl:h-[850px] absolute xl:left-[900px] xl:top-[-100px] bg-green-700  rotate-[60deg] rounded-[100px] "></div>
        <div className="absolute pt-1 flex flex-col text-center text-balance  top-[52px]  left-[24px] xl:text-left items-center xl:w-[583px] xl:h-[310.6px] xl:top-[74px] xl:left-[45px]   ">
          <h1 className="text-2xl font-bold ">Discover</h1>
          <p className="font-bold text-xl pb-4">
            The Power of Organic Products
            <br /> for a Healthier You
          </p>
          <p className="pb-8 text-sm">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>

          <div>
            <button className="  text-gray-800 bg-green-500 px-4 py-2  rounded-full flex  ">
              <span role="img" aria-label="Download Icon" className="mr-2">
                📱
              </span>
              Tour the app!
            </button>
          </div>
        </div>
        <img
          src={Organic}
          alt="organic"
          className="absolute w-[345.4px] h-[479.6px] top-[362px] left-[90px] xl:w-[345.4px] xl:h-[479.6px] xl:top-[34px] xl:left-[848px] "
        />
      </div>
    </div>
  );
};

export default Home6;
