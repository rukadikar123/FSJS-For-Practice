import React from "react";
import { diffWords } from "diff";

function Compare({ sampleText, uploadedText }) {
  const diff = diffWords(sampleText, uploadedText);
  console.log(diff);

  return (
    <>
      <div className="bg-white shadow-md md:p-10 rounded-lg md:w-3/4 w-full mx-auto mt-10">
        <h1 className="md:text-3xl text-xl mb-4 pl-2 font-semibold">
          Comparison Result:
        </h1>
        
        <div className="flex flex-wrap">
          {diff.map((item, idx) => (
            <span
              className={`md:text-lg text-md pl-2 inline-block ${
                item.added ? "text-green-700" : "text-black"
              } ${item.removed ? "text-red-700 , line-through"  : "text-black"}`}
              key={idx}
            >
              {item.value}
            </span>
          ))}
        </div>
        <p className="pl-2 mt-10"> <span className="pr-2 underline">Note:</span>
          The red colored text indicate that the text is not matching to text
          present in uploaded document and green colored text indicate that it
          present in uploaded document but not in sample doc{" "}
        </p>
      </div>
    </>
  );
}

export default Compare;
