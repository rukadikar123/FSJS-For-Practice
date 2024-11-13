import React from "react";
import { useState } from "react";
import UploadedDoc from "./UploadedDoc";
import Compare from "./Compare";

function Home() {
  const [uploadedText, setUploadedText] = useState(null);

  const sampleText =
    "This is a sample document text for comparison. It demonstrates the functionality.";
  return (
    <>
    <div className="mx-auto p-10 md:pt-18 pt-14">
      <h1 className="md:text-4xl text-xl text-center text-blue-500 md:mb-10 mb-8">Document Comparison</h1>
      <UploadedDoc setUploadedText={setUploadedText} />
      {uploadedText && (
        <Compare sampleText={sampleText} uploadedText={uploadedText} />
      )}
      </div>
    </>
  );
}

export default Home;
