import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import coder from "../assets/Coder.png";

function Home() {
  return (
    <div className="flex h-full shadow-sm w-full gap-4 py-10 items-center px-20">
      <div className="w-[50%] flex flex-col gap-10  mt-20">
        <div>
          <p className="text-2xl font-normal">Welcome In My Feed</p>
          <h1 className="text-5xl mt-3 font-medium">
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
        <p className="text-lg font-medium text-justify">
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
      <div className="w-[50%]">
        <div>
          <img className="h-96 rounded-full ml-32" src={coder} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
