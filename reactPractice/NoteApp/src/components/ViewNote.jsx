import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'
function ViewNote() {

  const {id}=useParams()

  const notes=useSelector((state)=> state.Notes.Notes) 

  const Note=notes.filter((note)=> note.id===id)[0]  

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
              value={Note.title}
              disabled
            />
            
          </div>
          <div>
            <textarea
              className="rounded-lg p-4 bg-[#0f0f0f] w-[60vw]  h-[74vh] max-h-[75vh]"
              type="text"
              placeholder="Content here"
              value={Note.content}
              disabled
              rows={25}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewNote