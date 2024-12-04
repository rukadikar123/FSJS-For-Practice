import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <div className="my-10 mx-20">
      <h1 className="text-5xl font-semibold">Projects</h1>

      <div className="mt-6 text-gray-900 flex flex-col gap-1 text-xl font-medium">
        <p>
          <span className="text-black">TITLE</span>: E-commerce Website
        </p>
        <p>
          <span className="text-black">TYPE</span>: Front-end Development
        </p>
        <p>
          <span className="text-black">PROBLEM STATEMENT</span>: To create a
          fully functional e-commerce website with a smooth user experience.
        </p>
        <p>
          <span className="text-black">SOLUTIONS</span>: I designed and
          developed a responsive e-commerce website using React, Redux, and
          Firebase Authentication. The website features a user-friendly
          interface, product catalog, shopping cart, and order management
          system.
        </p>
        <p className="mt-2 text-Black text-xl font-semibold">FEATURES:</p>
        <ul>
          <li>User authentication using Firebase Authentication</li>
          <li>Product catalog with filtering and sorting</li>
          <li>
            Shopping cart with add, remove, and quantity update functionality
          </li>
          <li>Order management system</li>
        </ul>
        <p className="mt-2 text-Black text-xl font-semibold">
          TECHNOLOGIES USED:
        </p>
        <ul>
          <li>Front-end: React, Redux, JavaScript, CSS, Tailwind CSS, HTML</li>
          <li>Authentication: Firebase Authentication</li>
        </ul>
        <p className="mt-2 flex items-center gap-4 text-Black text-xl font-semibold">
          <span>LIVE LINK:</span>
          <span><a href="https://e-commerce-apk2.netlify.app" target="_blank">
            <FaExternalLinkAlt />
          </a></span>
        </p>
        <p className="mt-2 flex items-center gap-4 text-Black text-xl font-semibold">
          <span>GITHUB REPOSITORY LINK:</span>
          <span><a href="https://github.com/rukadikar123/FSJS-For-Practice/tree/main/reactPractice/E-Commerce%20app" target="_blank">
          <FaExternalLinkAlt />
          </a></span>
        </p>
      </div>
    </div>
  );
}

export default Projects;
