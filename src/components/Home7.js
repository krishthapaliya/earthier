import React from "react";
import phone2 from "../assets/images/phone2.png";
import appstore from "../assets/images/appstore.png";
import googleplay from "../assets/images/googleplay.png";
const Home7 = () => {
  return (
    <div className="w-full xl:h-[568px]  flex justify-center  xl:p-[48px_96px]">
      <div className="xl:w-[1320px] w-[500px] items-center h-[800px] rounded-[32px] xl:h-[470px] relative   bg-green-400 overflow-hidden   ">
        <div className="xl:w-[700px] w-[440px] h-[550px] top-[-180px] left-[5px] round-[99px]  rotate-[60deg] xl:h-[800px]  absolute xl:left-[-100px] xl:top-[-140px] bg-green-700 rounded-[100px] "></div>
        <div className="xl:w-[850px] w-[440px] h-[560px] top-[425px] left-[60px] xl:h-[850px] absolute xl:left-[900px] bg-yellow-100 xl:top-[-1px]   rotate-[60deg] rounded-[100px] "></div>
        <div className="absolute flex flex-col pl-10 gap-7 justify-center items-center top-[52px] left-[24px]  xl:w-[583px] xl:h-[310.6px] xl:top-[74px] xl:left-[45px] ">
          <h1 className="text-3xl text-center  ">
            Instant Order & <br />
            Hassle-free Delivery
          </h1>
          <div className="flex   pt-6 ">
            <img src={appstore} alt="appstore" />
            <img src={googleplay} alt="googleplay" />
          </div>
        </div>
        <img
          src={phone2}
          alt="organic"
          className="absolute w-[345.4px] h-[550px] top-[362px] left-[80px] xl:w-[345.4px] xl:h-[479.6px] xl:top-[34px] xl:left-[848px] "
        />
      </div>
    </div>
  );
};

export default Home7;
