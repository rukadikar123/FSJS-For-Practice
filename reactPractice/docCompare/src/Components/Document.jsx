import React from "react";

function Document({ sampleText, uploadedText }) {
  return (
    <>
      {uploadedText && (
        <div className="flex md:px-[200px] px-[30px] justify-center gap-8 mt-12">
          <div className="flex flex-col gap-4 md:gap-6  text-gray-600 ">
            <h1 className="text-center text-md md:text-2xl font-semibold">
              Sample document
            </h1>
            <p>{sampleText}</p>
          </div>
          <div className="flex flex-col gap-6 text-gray-600">
            <h1 className="text-center text-md md:text-2xl font-semibold">
              Uploaded document
            </h1>
            <p>{uploadedText}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Document;
