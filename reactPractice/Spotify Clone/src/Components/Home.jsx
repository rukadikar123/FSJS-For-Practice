import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";
import AudioBar from "./AudioBar";


function Home() {
  return (
    <>
      <div className="bg-black w-[100%]">
        <Header />
        <div className="flex gap-2">
          <Sidebar />
          <Main/>
        </div>
        <AudioBar/>
      </div>
    </>
  );
}

export default Home;
