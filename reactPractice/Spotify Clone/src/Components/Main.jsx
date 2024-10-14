import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Main() {
  const [reqData, setReqdata] = useState([]);
  const [tracks, setTracks] = useState([]);

  const options = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/albums/",
    params: {
      ids: "3IBcauSj5M2A6lTeffJzdv",
    },
    headers: {
      "x-rapidapi-key": "98730dced7mshcc426dfc941f6e3p12f443jsn816025f920cd",
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  async function getData() {
    try {
      const response = await axios.request(options);
      setReqdata(response.data.albums);
      setTracks(response.data.albums[0].tracks.items);
      console.log(response.data.albums);
      console.log(response.data.albums[0].tracks.items);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(33, 33, 33, 1) 0%, rgba(33, 33, 33, 0.2) 100%)",
        }}
        className="main w-full h-[78vh] rounded-lg "
      >
        <div className="flex text-white text-md gap-4 px-6 py-4">
          <button className="bg-white text-black rounded-2xl px-3 py-1">
            All
          </button>
          <button className="bg-[#373737] rounded-2xl px-3 py-2">Music</button>
        </div>
        <div>
          <h1 className="text-white m-4 text-[20px] cursor-pointer hover:underline">
            Albums
          </h1>
        </div>
        <div id="scrollbar" className="overflow-y-scroll">
          <div className="album h-[41vh] hover:bg-[#5a5a5a81] bg-[#101010] rounded-lg w-[15vw]">
            {reqData.map((data, idx) => (
              <div
                key={idx}
                className="m-2 py-2 text-white text-[17px] gap-1 flex flex-col "
              >
                <img
                  className="h-[30vh] rounded-lg"
                  src={data.images[1].url}
                  alt=""
                />
                <p className=" hover:underline cursor-pointer">{data.name}</p>
                <p className="text-[#6e6e6e] hover:underline cursor-pointer">
                  {data.label}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Main;
// {
//   tracks.map((tracks,idx)=>(
//     <div key={idx}>
//       <p>{tracks.name}</p>
//     </div>
//   ))
// }
