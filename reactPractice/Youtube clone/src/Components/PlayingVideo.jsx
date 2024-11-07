import React, { useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../utils/Rapid_API'

function PlayingVideo() {

  const [video,setVideo]=useState()
  const [relatedVideo,setRelatedVideo]=useState()

  const {id}=useParams()

  useEffect(() => {
    fetchVideoDetail()
  }, [id])
  const fetchVideoDetail=()=>{
    fetchData(`video/details/?id=${id}`).then((res)=>{
      console.log(res)
      setVideo(res)
      
    })
  }
  

  return (
    <> 
      <div>
        {/*Left side */}
        <div>

        </div>
        {/*Right side */}
        <div>
          related videos
        </div>
      </div>
    </>
  )
}

export default PlayingVideo