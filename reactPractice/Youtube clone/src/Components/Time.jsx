import React from 'react'
import moment from 'moment'

function Time({time}) {

    const VideoTime=moment()?.startOf("day")?.seconds(time)?.format("HH:mm:ss")
  return (
    <>
      <span className="bg-black/40 px-1 rounded-md absolute bottom-2 right-2 text-white">{VideoTime}</span>
    </>
  )
}

export default Time