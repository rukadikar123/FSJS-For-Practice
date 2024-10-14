import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

function Sidebar() {
  const [dateAdded, setDateAdded] = useState(true);

  const handleToggle = () => {
    setDateAdded(!dateAdded);
  };

  const indianArtists = [
    {
      id: 1,
      name: "A.R. Rahman",
      dateAdded: "2022-01-01",
    },
    {
      id: 2,
      name: "Shreya Ghoshal",
      dateAdded: "2022-02-15",
    },
    {
      id: 3,
      name: "Kishore Kumar",
      dateAdded: "2022-03-20",
    },
    {
      id: 4,
      name: "Lata Mangeshkar",
      dateAdded: "2022-04-12",
    },
    {
      id: 5,
      name: "Sonu Nigam",
      dateAdded: "2022-05-01",
    },
    {
      id: 6,
      name: "Alka Yagnik",
      dateAdded: "2022-06-10",
    },
    {
      id: 7,
      name: "Udit Narayan",
      dateAdded: "2022-07-15",
    },
    {
      id: 8,
      name: "Kumar Sanu",
      dateAdded: "2022-08-20",
    },
    {
      id: 9,
      name: "Sunidhi Chauhan",
      dateAdded: "2022-09-01",
    },
    {
      id: 10,
      name: "Arijit Singh",
      dateAdded: "2022-10-12",
    },
    {
      id: 11,
      name: "Badshah",
      dateAdded: "2022-11-01",
    },
    {
      id: 12,
      name: "Honey Singh",
      dateAdded: "2022-12-05",
    },
  ];

  return (
    <>
      <div className={`bg-[#121212] h-[78vh] ${dateAdded? "w-[25vw]" :"w-[35vw]"} max-w-[36vw] rounded-xl overflow-hidden ml-2 p-4`}>
        <div className="nav flex items-center justify-between">
          <div className="flex gap-4">
            <i className="fas fa-bars text-2xl text-[#b3b3b3]"></i>
            <p className="text-lg font-semibold text-[#b3b3b3]">Your Library</p>
          </div>
          <div className="flex gap-4">
            <FaPlus className="text-[#b3b3b3]" />
            <div onClick={handleToggle}>
              {dateAdded ? (
                <FaArrowRight className="text-[#b3b3b3]" />
              ) : (
                <FaArrowLeft className="text-[#b3b3b3]" />
              )}
            </div>
          </div>
        </div>
        <button className="bg-[#2a2a2a] text-white text-sm font-semibold my-6 ml-[-10px] px-3 py-1 rounded-xl">
          Artists
        </button>

        <table className="text-white my-2 ">
          <thead>
            <tr className="flex items-center my-4 justify-between gap-14 w-full">
              {dateAdded ? (
                <th>
                  <CiSearch className="text-[#b3b3b3] text-2xl" />
                </th>
              ) : (
                <th>Title</th>
              )}
              {dateAdded?"":<th>Date Added</th>}
            </tr>
          </thead>
          <tbody
            id="scroll"
            className="flex flex-col gap-4 overflow-y-scroll h-[44vh]"
          >
            {indianArtists.map((obj) => (
              <tr
                key={obj.id}
                className="flex items-center justify-between gap-[140px] "
              >
                <td>
                  {obj.name} <br />
                  <p className="text-[#5a5a5a]">Artist</p>
                </td>
                {dateAdded ? "" : <td>{obj.dateAdded}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Sidebar;
