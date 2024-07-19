import React from "react";
import appstore from "../assets/images/appstore.png";
import googleplay from "../assets/images/googleplay.png";
import phone1 from "../assets/images/phone1.png";
import phone2 from "../assets/images/phone2.png";
import phone3 from "../assets/images/phone3.png";
import phone4 from "../assets/images/phone4.png";
import trueelements from "../assets/images/trueelements.png";
import meat from "../assets/images/meat.png";
import fulprasad from "../assets/images/fulprasad.png";
import shamisa from "../assets/images/shamisa.png";
import strategi from "../assets/images/strategi.png";

const heroSection = () => {
  return (
    <div className="xl:flex xl:flex-col ">
      <div className=" items-center xl:flex-col  justify-center xl:pt-[100px] ">
        <div className="xl:gap-[32px] items-center text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Built in Nepal for <br />
            the World
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Download the app and sign up today
          </p>
          <div className="flex justify-center pb-28">
            <img src={appstore} alt="appstore" />
            <img src={googleplay} alt="googleplay" />
          </div>
        </div>
      </div>
      <div className=" flex flex-row justify-center items-center   xl:gap-[20px] lg:gap-[15px] md:gap-[14px] sm:gap-[10px] ">
        <img
          src={phone1}
          alt="photo1"
          className="pt-12 w-1/4 h-80 xl:w-[267px] lg:w-[260px] md:w-[190px] sm:w-[150px] sm:h-[300px] xl:h-[540.25px] lg:h-[500px] md:h-[400px] xl:pt-[80px] lg:pt-20 md:pt-16 sm:pt-14 "
        />
        <img src={phone2} alt="photo2" className="w-1/4 h-80 xl:w-[267px]  lg:w-[260px] md:w-[190px] sm:w-[150px] sm:h-[300px] xl:h-[540.25px] lg:h-[500px] md:h-[400px]  " />
        <img
          src={phone3}
          alt="photo3"
          className="pt-12 w-1/4 h-72 xl:w-[267px] lg:w-[260px] md:w-[190px] sm:w-[150px] sm:h-[300px] xl:h-[540.25px] lg:h-[500px] md:h-[400px] xl:pt-[80px] lg:pt-20 md:pt-16 sm:pt-14"
        />
        <img
          src={phone4}
          alt="photo4"
          className="pt-12 w-1/4 h-80 xl:w-[267px] lg:w-[260px] md:w-[190px] sm:w-[150px] sm:h-[300px] xl:h-[540.25px] lg:h-[500px] md:h-[400px] xl:pt-[80px] lg:pt-20 md:pt-16 sm:pt-14"
        />
      </div>
      <div className="bg-green-200 w-full md:pl-9 flex flex-row items-center justify-between">
        <div>
          <p className="text-gray-600 md:text-lg ">A place for every maker</p>
          <p className="text-gray-600 md:text-lg">
            Join our 22,000+ community today!
          </p>
        </div>
        <img src={trueelements} alt="True Elements" className="xl:h-12 md:h-10 h-5" />
        <img src={shamisa} alt="Shamisa" className="xl:h-12 md:h-10 h-5" />
        <img src={meat} alt="Meat Makers" className="xl:h-12 md:h-10 h-5" />
        <img src={strategi} alt="Herbal Strategi" className="xl:h-12 md:h-10 h-5" />
        <img
          src={fulprasad} alt="Phool Prasad" className="xl:h-12 md:h-10 h-5 "
        />
      </div>
    </div>
  );
};

export default heroSection;
