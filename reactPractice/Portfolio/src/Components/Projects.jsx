import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <div name='Projects' className="md:my-10 shadow-sm my-2 mx-4  md:mx-20">
      <h1 className="text-2xl md:text-5xl font-semibold">Projects</h1>

      <div className="mt-6 text-gray-900 flex flex-col gap-1 text-md md:text-xl font-medium">
        <p>
          <span className="text-blue-800">TITLE</span>: E-commerce Website
        </p>
        <p>
          <span className="text-blue-800">TYPE</span>: Front-end Development
        </p>
        <p>
          <span className="text-blue-800">PROBLEM STATEMENT</span>: To create a
          fully functional e-commerce website with a smooth user experience.
        </p>
        <p>
          <span className="text-blue-800">SOLUTIONS</span>: I designed and
          developed a responsive e-commerce website using React, Redux, and
          Firebase Authentication. The website features a user-friendly
          interface, product catalog, shopping cart, and order management
          system.
        </p>
        <p className="mt-2 text-blue-800 text-xl font-semibold">FEATURES:</p>
        <ul className="list-disc ml-5">
          <li>User authentication using Firebase Authentication</li>
          <li>Product catalog with filtering and sorting</li>
          <li>
            Shopping cart with add, remove, and quantity update functionality
          </li>
          <li>Order management system</li>
        </ul>
        <p className="mt-2 text-blue-800 text-xl font-semibold">
          TECHNOLOGIES USED:
        </p>
        <ul className="list-disc ml-5">
          <li>Front-end: React, Redux, JavaScript, CSS, Tailwind CSS, HTML</li>
          <li>Authentication: Firebase Authentication</li>
        </ul>
        <p className="mt-2 flex items-center gap-4 text-Black text-xl font-semibold">
          <span className="text-blue-800">LIVE LINK:</span>
          <span>
            <a href="https://e-commerce-apk2.netlify.app" target="_blank">
              <FaExternalLinkAlt />
            </a>
          </span>
        </p>
        <p className="mt-2 flex items-center gap-4 text-Black text-xl font-semibold">
          <span className="text-blue-800">GITHUB REPOSITORY LINK:</span>
          <span>
            <a
              href="https://github.com/rukadikar123/FSJS-For-Practice/tree/main/reactPractice/E-Commerce%20app"
              target="_blank"
            >
              <FaExternalLinkAlt />
            </a>
          </span>
        </p>
        <p className="mt-10">
          <span className="text-blue-800">TITLE</span>: Todo List App
        </p>
        <p>
          <span className="text-blue-800">TYPE</span>: Front-end Development
        </p>
        <p>
          <span className="text-blue-800">PROBLEM STATEMENT</span>: To create a fully functional Todo List App with a smooth user experience.
        </p>
        <p>
          <span className="text-blue-800">SOLUTIONS</span>: I designed and developed a responsive Todo List App using React, JavaScript, Context API, and Local Storage. The app features a user-friendly interface, todo list, and item management system.
        </p>
        <p className="mt-2 text-blue-800 text-xl font-semibold">FEATURES:</p>
        <ul className="list-disc ml-5">
          <li>Add, edit, and delete todo items</li>
          <li>Mark todo items as completed</li>
          <li>Persistent data storage using Local Storage</li>
        </ul>
        <p className="mt-2 text-blue-800 text-xl font-semibold">
          TECHNOLOGIES USED:
        </p>
        <ul className="list-disc ml-5">
          <li>Front-end: React, Context Api, Local Storage, JavaScript, CSS, Tailwind CSS, HTML</li>
        </ul>
        <p className="mt-2 flex items-center gap-4 text-Black text-xl font-semibold">
          <span className="text-blue-800">LIVE LINK:</span>
          <span>
            <a href="https://todo-app-context1.netlify.app/" target="_blank">
              <FaExternalLinkAlt />
            </a>
          </span>
        </p>
        <p className="mt-2 flex items-center gap-4 text-Black text-xl font-semibold">
          <span className="text-blue-800">GITHUB REPOSITORY LINK:</span>
          <span>
            <a
              href="https://github.com/rukadikar123/FSJS-For-Practice/tree/main/reactPractice/TodoContext"
              target="_blank"
            >
              <FaExternalLinkAlt />
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Projects;
