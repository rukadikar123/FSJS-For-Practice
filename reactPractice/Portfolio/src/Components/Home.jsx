import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import coder from "../assets/Coder.png";

function Home() {
  return (
    <div name="Home" className="md:flex h-full shadow-sm w-full gap-4 py-10 md:items-center px-4 md:px-20">
      <div className="md:w-[50%] flex flex-col gap-10  mt-24 md:mt-40">
        <div>
          <p className="md:text-2x  h-full text-md font-normal">Welcome In My Feed</p>
          <h1 className="md:text-5xl text-3xl w-[48%] mt-3 font-medium">
            Hello, I'm a{" "}
            <ReactTyped
              className="text-red-600"
              strings={["Developer", "Programmer", "Coder"]}
              typeSpeed={70}
              backSpeed={50}
              loop={true}
            />
          </h1>
        </div>
        <p className="md:text-lg text-md md:mt-6 font-medium md:text-justify">
          Seeking a frontend developer role in a dynamic and innovative
          environment where I can leverage my expertise in React JS, JavaScript,
          and frontend technologies to craft exceptional user experiences and
          contribute to the development of cutting-edge web applications.
        </p>
        <div>
          <p className="text-lg  font-normal">Available on</p>
          <div className="flex gap-6 mt-2">
            <a target="_blank" href="https://www.linkedin.com">
              <FaLinkedin
                className="hover:scale-110 cursor-pointer"
                size={27}
              />
            </a>
            <a target="_blank" href="https://github.com/">
              <FaGithub className="hover:scale-110 cursor-pointer" size={27} />
            </a>
            <a target="_blank" href="https://www.instagram.com/">
              {" "}
              <FaSquareInstagram
                className="hover:scale-110 cursor-pointer"
                size={27}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="md:w-[50%]">
        <div>
          <img className="md:h-96 h-72 rounded-full md:ml-32" src={coder} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
