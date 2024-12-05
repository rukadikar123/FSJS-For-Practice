import React from "react";

function About() {
  return (
    <div name='About' className="md:my-20 shadow-sm my-6 mx-4 md:mx-20">
      <h1 className="md:text-5xl text-3xl font-semibold">About</h1>
      <p className="text-sm md:text-xl text-gray-900 font-medium my-4">
        Hi, I'm Siddharth Rukadikar, a frontend developer with a strong interest
        in React JS and modern web development. I have a good understanding of
        frontend technologies and enjoy turning design concepts into functional
        and visually appealing web applications.
      </p>
      <h1 className="md:text-4xl text-2xl mt-8 text-green-700 font-semibold">Education</h1>
      <p className="mt-4 text-sm md:text-xl text-gray-900 font-medium">
        B.Tech, Mechanical Engineering, Sharad Institute Of Technology College
        Of Engineering Yardav, CGPA:8.57, June 2022
      </p>
      <p className="mt-2 text-sm md:text-xl text-gray-900 font-medium">
        Diploma, Mechanical Engineering, Sanjay Ghodawat Polytechnic Atigre,
        Percentage:70.47%, May 2019
      </p>
      <p className="mt-2 text-sm md:text-xl text-gray-900 font-medium">
        10th Std, Mahatma Gandhi Vidyalay Rukadi, Percentage:83.40%, April 2016
      </p>
      <h1 className="md:text-4xl text-2xl mt-8 text-green-700 font-semibold">
        Skills & Expertise
      </h1>
      <p className="mt-4 text-sm md:text-xl text-gray-900 font-medium">
        Programming languages:{" "}
        <span className="text-[#E34F26]">C, C++, Python </span>
        <br />
        FrontEnd Technologies:{" "}
        <span className="text-[#E34F26]">
          HTML, CSS, Tailwind CSS, JavaScript, React, Redux, Firebase
        </span>
        <br />
        Developer Tools: <span className="text-[#E34F26]"> Git, GitHub</span>
      </p>
      <h1 className="md:text-4xl text-2xl mt-8 text-green-700 font-semibold">
        Internship Experiance
      </h1>
      <p className="mt-4 text-sm md:text-xl text-gray-900 font-medium">
        Intern, Carline Solutions Ichalkaranji, Making 2D drafting of 3d model
        by using <span className="text-green-600">Catia</span> V5 software, Dec.
        2021 to Apr. 2022.
        <br />
        D.K Industries Shirol, Worked in Quality Control department, Worked on
        VMC, Jan 2021 to Feb 2021.
      </p>
      <h1 className="md:text-4xl text-2xl mt-8 text-green-700 font-semibold">
        Academic & Extracurricular Actvities
      </h1>
      <p className="mt-2 text-sm md:text-xl text-gray-900 font-medium">
        Participate in National Level CAM QUIZ Competition held at Sharad
        Institute Of Technology College Of Engineering, Yadrav
      </p>
      <p className="mt-2 text-sm md:text-xl text-gray-900 font-medium">
        Participate in Wrestle Mania National Level Competition held at Sanjay
        Ghodawat Polytechnic, Atigre
      </p>
    </div>
  );
}

export default About;
