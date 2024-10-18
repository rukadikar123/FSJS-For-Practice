import React, { useState } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { removeNote, ResetNotes } from "../feature/Notes/NoteSlice";
import { Link } from "react-router-dom";

function Notes() {
  const [searchVal, setSearchVal]=useState("")

  const notes = useSelector((state) => state.Notes.Notes);
  console.log(notes);
  const dispatch = useDispatch();
  const HandleRemove = (id) => {
    dispatch(removeNote(id));
  };

  const filterdNotes=notes.filter((item)=> item.title.toLowerCase().includes(searchVal.toLowerCase()))
  
  return (
    <>
      <div className="h-screen text-white bg-[#000000]">
        <Navbar />
        <div className="flex justify-center my-4 "><input className="bg-[#000000] text-white px-3 py-2" placeholder="Search Here" type="search" value={searchVal} 
        onChange={(e)=> setSearchVal(e.target.value)} /></div>
        <div className="text-white flex flex-col items-center gap-4 mt-8">
          {
            filterdNotes.length > 0 ? (
              filterdNotes.map((data) => (
                <div className="flex border p-2" key={data.id}>
                  <div className="flex flex-col items-start  gap-2  w-[38vw]">
                    <p>Title : {data.title}</p>
                    <div className="w-[18vw]  overflow-hidden">
                      Content : {data.content}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link to={`/notes/${data?.id}`}>
                      <button className="px-2 py-1 bg-[#0f0f0f] border">
                        👁
                      </button>
                    </Link>
                    <Link to={`/?noteId=${data?.id}`}><button className="px-2 py-1 bg-[#0f0f0f] border">🖊</button></Link>
                    <div>
                    <button
                      onClick={() => HandleRemove(data?.id)}
                      className="px-2 py-1 bg-[#0f0f0f] border"
                    >
                      ❌
                    </button>
                    </div>
                    <div>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(data?.content);
                      }}
                      className="px-2 py-1 bg-[#0f0f0f] border"
                    >
                      copy
                    </button>
                    </div>
                  </div>
                </div>
              ))
            ): <div>Data Not found</div>
          }
          
        </div>
        <button onClick={()=> dispatch(ResetNotes())} className="ml-[1200px] mt-6 bg-blue-400 text-black p-2 rounded-t">Reset Notes</button>
      </div>
    </>
  );
}

export default Notes;
