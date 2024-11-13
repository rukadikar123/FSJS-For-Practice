import React from "react";

function UploadedDoc({ setUploadedText }) {
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const text = await file.text();
      setUploadedText(text);
    }
  };

  return (
    <>
      <div className="bg-gray-100 shadow-md md:p-10 p-2 rounded-lg md:w-1/2 w-full  mx-auto">
        <h1 className="md:text-2xl text-md md:mb-4 mb-2">Upload Document</h1>

        <input className="block md:w-2/3 w-full md:text-lg text-md py-2 pl-2 bg-gray-100 border border-gray-300 rounded-lg" type="file" accept=".txt" onChange={handleFileChange} />
      </div>
    </>
  );
}

export default UploadedDoc;
