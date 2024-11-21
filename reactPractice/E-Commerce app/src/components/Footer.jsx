import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="flex bg-slate-800 flex-col w-full md:mt-20 mt-4 h-full">
        <div className="flex  md:flex-row flex-col justify-between md:px-20 px-4 py-6 h-full w-full">
          <div className="text-gray-200 flex flex-col md:gap-4 gap-1 w-full md:w-[27vw]">
            <h1 className="md:text-2xl text-xl font-medium cursor-pointer">e-Shop</h1>
            <p className="md:text-md text-sm mb-4 md:mb-1">
              Your one step for all your needs. Shop with use and experience the
              best online shopping experiences.
            </p>
          </div>
          <div className="text-gray-200 mr-24 mb-3 md:mb-6">
            <h1 className="md:text-2xl text-xl font-medium">Quick Links</h1>
            <ul className="flex md:flex-col md:ml-6 md:gap-1 gap-6 mt-1 md:mt-3">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 md:gap-4 mr-2">
            <h1 className="md:text-2xl text-xl text-gray-200 font-medium">Follow us</h1>
            <ul className="text-white flex gap-2">
              <li>
                <a href="https://www.facebook.com/login/" target="_blank">
                <FaFacebook size={21} />
                </a>
              </li>
              <li>
                <a href="https://x.com/i/flow/login"  target="_blank">
                  <FaTwitter size={21} />
                </a>
              </li>
              <li>
                <a href="https://github.com/" target="_blank">
                  <FaGithub size={21} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/home" target="_blank">
                  <FaLinkedin size={21}/>
                </a>
              </li>
            </ul>
            <form className="mt-3 flex ">
              <input type="email" placeholder="Enter Email"  className="outline-none text-gray-200 md:px-2 px-1 md:py-1 bg-transparent border  w-full md:w-[20vw] border-gray-400 rounded-l-md"/>
              <button className="text-white px-3 py-[7px] rounded-r-md text-sm bg-red-500">Subscribe</button>
            </form>
          </div>
        </div>
        <hr className="border-t-2 border-gray-600 w-[94vw] md:w-[86vw] mx-auto md:my-2 " />
        <div className="text-gray-400 flex items-center justify-between md:mx-20 mx-4 my-2 md:my-4">
            <p>© 2024 e-Shop All rights reserved</p>
            <div className="flex gap-6">
              <a className="hover:underline " href="">Privacy Policy</a>
              <a className="hover:underline" href="">Terms & Conditions</a>
            </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
