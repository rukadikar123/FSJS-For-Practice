import React from "react";
import { diffWords } from "diff";

function Compare({ sampleText, uploadedText }) {
  const diff = diffWords(sampleText, uploadedText);
  console.log(diff);

  return (
    <>
      <div className="w-full">
        <div className="pl-10 flex flex-col gap-6 mt-20 w-full">
          <h1 className="text-[30px]">Comparison Result:</h1>
          <div className="w-full">
            {diff.map((item, idx) => (
              <div
                className={`text-[20px]  w-full ${
                  item.added ? "text-green-700" : "text-black"
                } ${item.removed ? "text-red-700" : "text-black"} ${
                  item.removed ? "line-through" : "text-black"
                } `}
                key={idx}
              >
                {item.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Compare;
