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
      <h1 className="mt-10 text-[30px] text-center ">Document Comparison</h1>
      <UploadedDoc setUploadedText={setUploadedText} />
      {uploadedText && (
        <Compare sampleText={sampleText} uploadedText={uploadedText} />
      )}
    </>
  );
}

export default Home;
