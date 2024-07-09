import React from "react";
import earthier from "../assets/images/earthier1.png";
const Home1 = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 py-28 ">
      <img
        src={earthier}
        alt="logo"
        className="w-[300px] h-auto flex justify-center"
      />
      <div className="h-140 w-35 text-center">
        <h1 className="text-5xl font-bold py-5">What is earthier?</h1>
        <p className="text-center">
          Empowering Nepal’s creators, artisans, entrepreneurs, and small-holder
          farmers
          <br /> to make world-class products, develop a sustainable value-chain
          to scale up, <br />
          and provide efficient logistic support to deliver worldwide.
        </p>
      </div>
    </div>
  );
};

export default Home1;
