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
      <div className="bg-gray-100 shadow-md p-10 rounded-lg w-1/2 mx-auto">
        <h1 className="text-2xl mb-4">Upload Document</h1>

        <input className="block w-2/3 text-lg py-2 pl-2 bg-gray-100 border border-gray-300 rounded-lg" type="file" accept=".txt" onChange={handleFileChange} />
      </div>
    </>
  );
}

export default UploadedDoc;
