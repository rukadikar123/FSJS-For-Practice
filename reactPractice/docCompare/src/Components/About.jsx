import React from "react";

function About() {
  return (
    <>
      <div className="mx-auto p-10 pt-20 ">
        <h2 className="text-4xl text-center text-blue-500 mb-20">About DocDifference</h2>
        <p className="text-lg leading-relaxed text-gray-600 mb-4">
          DocDiff is a simple and effective tool designed to help users compare
          documents. By highlighting differences between a sample and an
          uploaded document, it makes it easy to spot changes, revisions, or
          discrepancies in text.
        </p>
        <p className="text-lg leading-relaxed text-gray-600">
          This application is ideal for comparing versions of legal documents,
          policies, academic papers, and more.
        </p>
      </div>
    </>
  );
}

export default About;
