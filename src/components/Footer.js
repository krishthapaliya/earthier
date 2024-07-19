import React from "react";
import logo from "../assets/images/earthier1.png"; // Adjust the path to your logo image
import fonepay from "../assets/images/fonepay.png"; // Adjust the path to your payment method images
import esewa from "../assets/images/esewa.png";
import khalti from "../assets/images/khalti.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100  border-white">
      <div className="  py-8  ">
        <div className="flex flex-col items-center lg:flex lg:flex-row  lg:items-center  lg:justify-center lg:gap-48">
          <div className=" text-balance text-center  ">
            <img src={logo} alt="Earthier Logo" className="h-18 mb-4 flex 
             " />
            <p className="text-gray-600 ">Address:</p>
            <p className="text-gray-600 mb-6">
              sahid-chock,chitwan nepal 
            </p>
            <p className="text-gray-600 ">Contact:</p>
            <p className="text-gray-600 mb-4">4540130 / 9823874752</p>
          </div>
          <div className="text-center flex flex-col lg:flex lg:flex-row justify-between lg:gap-48 mt-6  ">
            <div className=" flex flex-col">
              <h3 className="text-2xl font-bold text-left pl-8 mb-4">About us</h3>
              <ul className="w-40">
                <li>
                  <a href="#hhh" className="text-gray-600 hover:text-gray-800">
                    Who are we?
                  </a>
                </li>
                <li>
                  <a href="#hh" className="text-gray-600 hover:text-gray-800">
                    Sahakarya
                  </a>
                </li>
                <li>
                  <a href="#hh" className="text-gray-600 hover:text-gray-800">
                    Franchise
                  </a>
                </li>
                <li>
                  <a href="#hh" className="text-gray-600 hover:text-gray-800">
                    Loyalty program
                  </a>
                </li>
                <li>
                  <a href="#hh" className="text-gray-600 hover:text-gray-800">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-row text-balance ">
              <h3 className="text-xl font-bold    mt-4 mb-4">Customer service</h3>
              <ul className="text-balance w-40">
                <li>
                  <a href="#hh" className="text-gray-600 hover:text-gray-800">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#hh" className="text-gray-600 hover:text-gray-800">
                    Delivery & Shipping Policies
                  </a>
                </li>
                <li>
                  <a href="#hh" className="text-gray-600 hover:text-gray-800">
                    Return & Refund Policies
                  </a>
                </li>
                <li>
                  <a href="#hh" className="text-gray-600 hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#hh" className="text-gray-600 hover:text-gray-800">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex xl:flex-row justify-between items-center pt-8 pl-36 border-t-2 pr-36">
          <div className="mt-8 gap-3  flex flex-row ">
            <h3 className="text-lg  flex items-center font-semibold mb-4">Payment Method:</h3>
            <div className="flex pt-[-16px] pb-4 gap-3 ">
              <img src={fonepay} alt="Fonepay" className="md:h-8 h-6" />
              <img src={esewa} alt="eSewa" className="md:h-8 h-6" />
              <img src={khalti} alt="Khalti" className="md:h-8 h-6" />
            </div>
          </div>
          <div className="mt-8 text-gray-600 xl:pb-5">
            <p className="md:text-lg text-base ">2023 Earthier Pvt. Ltd. All rights reserved.  </p> 
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
