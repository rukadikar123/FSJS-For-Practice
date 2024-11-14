import React from "react";
import { Categories } from "../assets/MockData/MockData";
import heroImg from '../assets/hero-page.png'
function Home() {
  return (
    <>
      <div className="mt-10 w-full flex justify-center gap-6">
        <div className="flex flex-col w-1/5 h-full bg-gray-100 gap-6">
            <h1 className="text-xl bg-red-600 p-2 text-white font-semibold ">SHOP BY CATEGORIES</h1>
            <ul className="flex flex-col gap-2 pb-2">
                {
                    Categories.map((category,idx)=>(
                        <li className="flex text-md items-center gap-2 cursor-pointer" key={idx}><div className="rounded-full h-2 w-2 ml-2 border  border-red-500"></div>{category}</li>
                    ))
                }
            </ul>
        </div>
        <div className="relative w-[67vw] h-[65vh]">
            <img src={heroImg} className="w-full h-full" alt="" />
            <div className="flex flex-col absolute  top-[80px] left-10">
                <p className="text-md pb-3 text-black/65">Siddharth | e-Shop</p>
                <h1 className="text-3xl  pb-3 font-bold text-black/75">Welcome To E-Shop</h1>
                <p className="text-xl  pb-3 font-semibold text-black/70">Million + products</p>
                <div><button className="text-md px-6 py-1 text-white bg-red-500">SHOP NOW</button></div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Home;
