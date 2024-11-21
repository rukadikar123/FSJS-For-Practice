import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function About() {
  return (
    <div className="container mt-10 mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg leading-relaxed mb-8">
        Welcome to E-SHOP. Our mission is to provide high-quality products at
        affordable prices, ensuring customer satisfaction.
      </p>
      
      <div className="flex justify-center mt-40">
         <a
          href="https://www.facebook.com/login/"
          target="_blank"
          className="mr-4 text-lg"
        >
           <FaFacebook size={21} />
        </a>
        <a
          href="https://x.com/i/flow/login"
          target="_blank"
          className="mr-4 text-lg"
        >
          <FaTwitter size={21} />
        </a>
        <a
          href="https://www.linkedin.com/home"
          target="_blank"
          className="mr-4 text-lg"
        >
          <FaLinkedin size={21}/>
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          className="text-lg"
        >
          <FaGithub size={21} />
        </a>
      </div>
    </div>
  );
}

export default About;
