import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="md:mt-10 mt-6 flex flex-col py-4  items-center justify-center gap-8">
        <div className="flex gap-3"> 
          <a target="_blank" href="https://www.facebook.com/"><FaFacebook size={27}/></a>
          <a target="_blank" href="https://x.com/i/flow/login?lang=en"><FaTwitter size={27}/></a>
          <a target="_blank" href="https://www.linkedin.com/"><FaLinkedin size={27}/></a>
          <a target="_blank" href="https://github.com/"><FaGithub size={27}/></a>
        </div>
        <hr className="border-2 border-gray-400 w-[70%] md:w-1/3" />
        <div>
          <p className="text-center px-2 md:px-0">© 2024 Siddharth Rukadikar All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
