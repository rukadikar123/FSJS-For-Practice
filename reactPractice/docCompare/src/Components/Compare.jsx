import React from "react";
import { diffWords } from "diff";

function Compare({ sampleText, uploadedText }) {
  const diff = diffWords(sampleText, uploadedText);
  console.log(diff);

  return (
    <>
      <div className="bg-white shadow-md md:p-10 rounded-lg md:w-3/4 w-full mx-auto mt-20">
        <h1 className="md:text-2xl text-xl mb-4 pl-2">Comparison Result:</h1>
        <div className="flex flex-wrap">
          {diff.map((item, idx) => (
            <span
              className={`md:text-lg text-md pl-2 inline-block ${
                item.added ? "text-green-700" : "text-black"
              } ${item.removed ? "text-red-700" : "text-black"} ${
                item.removed ? "line-through" : "text-black"
              } `}
              key={idx}
            >
              {item.value}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Compare;
