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
    <div className="flex flex-col">
      <div className=" items-center flex  justify-center pt-[100px] ">
        <div className="gap-[32px] items-center text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Built in Nepal for <br />
            the World
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Download the app and sign up today
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <img src={appstore} alt="appstore" />
            <img src={googleplay} alt="googleplay" />
          </div>
        </div>
      </div>
      <div className=" flex flex-row justify-center   gap-[20px]  ">
        <img
          src={phone1}
          alt="photo1"
          className="w-[267px] h-[540.25px] pt-[80px] "
        />
        <img src={phone2} alt="photo2" className="w-[267px] h-[540.25px]  " />
        <img
          src={phone3}
          alt="photo3"
          className="w-[267px] h-[540.25px] pt-[80px]  "
        />
        <img
          src={phone4}
          alt="photo4"
          className="w-[267px] h-[540.25px] pt-[80px] "
        />
      </div>
      <div className="bg-green-200 w-full pl-9 flex flex-row items-center justify-between">
        <div>
          <p className="text-gray-600 text-lg ">A place for every maker</p>
          <p className="text-gray-600 text-lg">
            Join our 22,000+ community today!
          </p>
        </div>
        <img src={trueelements} alt="True Elements" className="h-12" />
        <img src={shamisa} alt="Shamisa" className="h-12" />
        <img src={meat} alt="Meat Makers" className="h-12" />
        <img src={strategi} alt="Herbal Strategi" className="h-12" />
        <img
          src={fulprasad}
          alt="Phool Prasad"
          className="h-[80px] w-[184.75px] "
        />
      </div>
    </div>
  );
};

export default heroSection;
