import React from "react";
import { diffWords } from "diff";

function Compare({ sampleText, uploadedText }) {
  const diff = diffWords(sampleText, uploadedText);
  console.log(diff);

  return (
    <>
      <div className="bg-white shadow-md p-10 rounded-lg w-3/4 mx-auto mt-10">
        <h1 className="text-2xl mb-4 pl-2">Comparison Result:</h1>
        <div className="flex flex-wrap">
          {diff.map((item, idx) => (
            <span
              className={`text-lg pl-2 inline-block ${
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
