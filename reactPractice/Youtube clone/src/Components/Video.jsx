import React from "react";
import Time from "./Time";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";


function Video({ video }) {

  return (
    <>
      <Link to={`/video/${video?.videoId}`} className="flex flex-col gap-2 h-[45vh] w-[26vw]">
        <div className="relative">
          <img
            className="rounded-lg hover:rounded-none duration-200 h-[30vh] w-full"
            src={video?.thumbnails[0]?.url}
            alt="thumbnail"
          />
          {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
        </div>
        <div className="flex items-start gap-3 px-2">
          <img
            src={video?.author?.avatar[0]?.url}
            alt="Avatar"
            className="rounded-full h-9"
          />
          <div className="flex flex-col">
            <h2 className="line-clamp-2 text-[16px]">{video?.title}</h2>
            <p className="flex items-center text-[13px] gap-1">
              {video?.author?.title}
              <span className="pt-1 text-gray-500">
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" ? (
                  <BsFillCheckCircleFill />
                ) : (
                  ""
                )}
              </span>
            </p>
            <p className="flex gap-1 text-[13px] items-center">
              {`${abbreviateNumber(video?.stats?.views, 2)}`} <span>views</span>
              <span className="pb-1">.</span>
              {video?.publishedTimeText}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Video;
