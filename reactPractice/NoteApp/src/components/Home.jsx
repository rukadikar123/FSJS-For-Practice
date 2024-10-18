import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { addNote ,updateNote  } from "../feature/Notes/NoteSlice";
import { useSearchParams } from "react-router-dom";


function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [searchParams,setSearchParams]=useSearchParams()
  const noteId=searchParams.get("noteId")

  const notes = useSelector((state) => state.Notes.Notes);
  const dispatch = useDispatch();

  const handleClicked = () => {
    const AllNotes = {
      title: title,
      id: noteId || Date.now().toString(35),
      content: content,
    };

    if(noteId){
      dispatch(updateNote(AllNotes))
      
    }else{
      dispatch(addNote(AllNotes))

    }

    setTitle("");
    setContent("");
    setSearchParams({})
  };

  useEffect(() => {
    if(noteId){
      const Note=notes.find((item)=>item.id === noteId)
      if(Note){
        setTitle(Note.title)
        setContent(Note.content)
      }
    }
  }, [])
  

  return (
    <>
      <div className=" h-screen text-white bg-[#000000]">
        <Navbar />
        <div className="flex flex-col gap-8 items-start w-full mt-[40px] pl-[300px]  ">
          <div className=" flex gap-4 items-center w-full ">
            <input
              className="rounded-lg p-2 w-[500px] bg-[#0f0f0f]"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button
              onClick={handleClicked}
              className=" rounded-lg bg-[#6674cc] px-3 py-2 font-semibold"
            >
             {noteId ? "Update Note" : "Create Note"} 
            </button>
          </div>
          <div>
            <textarea
              className="rounded-lg p-2 bg-[#0f0f0f] w-[60vw]  h-[74vh] max-h-[75vh]"
              type="text"
              placeholder="Content here"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={25}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
