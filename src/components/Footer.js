import React from 'react';
import logo from '../assets/images/earthier1.png'; // Adjust the path to your logo image
import fonepay from '../assets/images/fonepay.png'; // Adjust the path to your payment method images
import esewa from '../assets/images/esewa.png';
import khalti from '../assets/images/khalti.png';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-white">
      <div className=" mx-auto py-8 px-4  ">
        <div className="flex   justify-center  gap-x-64">
          <div className="  mb-6 ">
            <img src={logo} alt="Earthier Logo" className="h-12 mb-4" />
            <p className="text-gray-600 mb-2">Address:</p>
            <p className="text-gray-600 mb-4">Nursery Lane, Bansbari, Maharajgunj</p>
            <p className="text-gray-600 mb-2">Contact:</p>
            <p className="text-gray-600 mb-4">4540130 / 9823874752</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-pinterest"></i></a>
              <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-tiktok"></i></a>
              <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-facebook"></i></a>
            </div>
          </div>
         <div className='flex justify-between gap-48   w-[300px]'>
         <div className=" ">
            <h3 className="text-lg font-semibold mb-4">About us</h3>
            <ul className="w-40">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Who are we?</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Sahakarya</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Franchise</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Loyalty program</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Blog</a></li>
            </ul>
          </div>
          <div className=" ">
            <h3 className="text-lg font-semibold mb-4">Customer service</h3>
            <ul className="text-left w-40">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Delivery & Shipping Policies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Return & Refund Policies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact Us</a></li>
            </ul>
          </div>
         </div>
        </div>

      <div className='flex justify-between items-center pt-8 pl-36 border-t-2 pr-36'>
      <div className="mt-8 ">
          <h3 className="text-lg font-semibold mb-4">Payment Method:</h3>
          <div className="flex ">
            <img src={fonepay} alt="Fonepay" className="h-8" />
            <img src={esewa} alt="eSewa" className="h-8" />
            <img src={khalti} alt="Khalti" className="h-8" />
          </div>
        </div>
        <div className="mt-8 b text-gray-600">
          &copy; 2023 Earthier Pvt. Ltd. All rights reserved.
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;