import React from "react";
import image from "../assets/images/home5.png";

const Home5 = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center gap-10 p-10">
      
      <div className="max-lg:hidden  flex flex-col shadow-md border-black p-4 md:w-[560px]">
        <img src={image} alt="img1" className="h-[320px] w-full object-cover" />
        <div className="mt-4">
          <h1 className="text-xl md:text-2xl font-semibold pb-1">
            Rabbit Meat and the recipe for
            <br />
            organic rabbit khutti
          </h1>
          <p className="text-sm md:text-base">
            Amazing experience at this computer retail store! The staff
            <br /> was knowledgeable and helped me find the perfect laptop
            wi...
          </p>
          <div className="flex gap-4 mt-2">
            <button className="bg-green-200 rounded-md px-2 py-1">Recipes</button>
            <p className="text-gray-300 text-sm">
              Nov 9, 2020 • 4 min read
            </p>
          </div>
        </div>
      </div>

      
      <div className="flex flex-col gap-6 md:w-[560px]">
       
        <div className="shadow-md p-4">
          <p className="text-lg font-semibold">
            Rabbit Meat and the recipe for
            <br />
            organic rabbit khutti
          </p>
          <div className="flex gap-4 mt-2">
            <button className="bg-green-200 rounded-md px-2 py-1">Recipes</button>
            <p className="text-gray-300 text-sm">
              Nov 9, 2020 • 4 min read
            </p>
          </div>
        </div>

        
        <div className="shadow-md p-4">
          <p className="text-lg font-semibold">
            Rabbit Meat and the recipe for
            <br />
            organic rabbit khutti
          </p>
          <div className="flex gap-4 mt-2">
            <button className="bg-green-200 rounded-md px-2 py-1">Recipes</button>
            <p className="text-gray-300 text-sm">
              Nov 9, 2020 • 4 min read
            </p>
          </div>
        </div>

        
        <div className="shadow-md p-4">
          <p className="text-lg font-semibold">
            Rabbit Meat and the recipe for
            <br />
            organic rabbit khutti
          </p>
          <div className="flex gap-4 mt-2">
            <button className="bg-green-200 rounded-md px-2 py-1">Recipes</button>
            <p className="text-gray-300 text-sm">
              Nov 9, 2020 • 4 min read
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home5;
