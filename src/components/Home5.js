import React from "react";
import image from "../assets/images/home5.png";
const Home5 = () => {
  return (
    <div className="flex justify-center gap-10">
      <div className="flex flex-col shadow-md border-black p-4">
        <img src={image} alt="img1" className="h-[320px] w-[560px]" />
        <div>
          <div>
            <h1 className="text-2xl font-semibold py-1">
              Rabbit Meat and the recipe for
              <br />
              organic rabbit khutti{" "}
            </h1>
            <p>
              Amazing experience at this computer retail store! The staff
              <br /> was knowledgeable and helped me find the perfect laptop
              wi...
            </p>
          </div>
          <div className="flex gap-32">
            <button className="bg-green-100 rounded-md ">Recipes</button>
            <p className="text-gray-300">
              <pre>Nov 9,2020 4 min read</pre>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-[560px] border-spacing-1">
        <div className="shadow-md py-4">
          <p className="text-xl font-semibold p-4">
            Rabbit Meat and the recipe for
            <br />
            organic rabbit khutti
          </p>

          <div className="flex gap-32">
            <button className="bg-green-100 rounded-md p-1">Recipes</button>
            <p className="text-gray-300">
              <pre>Nov 9,2020 4 min read</pre>
            </p>
          </div>
        </div>
        <div className="shadow-md py-4">
          <p className="text-xl font-semibold p-4 ">
            Rabbit Meat and the recipe for
            <br />
            organic rabbit khutti
          </p>

          <div className="flex gap-32">
            <button className="bg-green-100 rounded-md p-1">Recipes</button>
            <p className="text-gray-300 ">
              <pre>Nov 9,2020 4 min read</pre>
            </p>
          </div>
        </div>
        <div className="shadow-md py-4">
          <p className="text-xl font-semibold p-4">
            Rabbit Meat and the recipe for
            <br />
            organic rabbit khutti
          </p>

          <div className="flex justify-between  px-10">
            <button className="bg-green-100 rounded-md p-1">Recipes</button>
            <p className="text-gray-300">
              <pre>Nov 9,2020 4 min read</pre>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home5;
