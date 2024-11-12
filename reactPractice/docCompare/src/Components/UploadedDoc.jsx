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
      <div className="ml-10 flex flex-col gap-4 mt-10">
        <h1 className="text-[30px]">Upload Document</h1>

        <input className="w-full" type="file" accept=".txt" onChange={handleFileChange} />
      </div>
    </>
  );
}

export default UploadedDoc;
