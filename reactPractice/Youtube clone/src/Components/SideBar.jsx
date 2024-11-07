import React from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { IoIosTrendingUp } from "react-icons/io";
import { RiShoppingBag4Line } from "react-icons/ri";
import { CiMusicNote1 } from "react-icons/ci";
import { PiFilmSlateDuotone } from "react-icons/pi";
import { CiStreamOn } from "react-icons/ci";
import { SiYoutubegaming } from "react-icons/si";
import { PiNewspaperBold } from "react-icons/pi";
import { IoTrophyOutline } from "react-icons/io5";
import { MdOutlinePodcasts } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubestudio } from "react-icons/si";
import { CiSettings } from "react-icons/ci";
import { MdOutlinedFlag } from "react-icons/md";
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";

function Sidebar() {
  const sidebarItem1 = [
    {
      name: "Home",
      icon: <IoMdHome size={26} />,
    },
    {
      name: "Shorts",
      icon: <SiYoutubeshorts size={24} />,
    },
    {
      name: "Subscriptions",
      icon: <MdOutlineSubscriptions size={24} />,
    },
  ];

  const sidebarItem2 = [
    {
      name: "history",
      icon: <FaHistory size={24} />,
    },
    {
      name: "Playlists",
      icon: <MdOutlinePlaylistPlay size={25} />,
    },
    {
      name: "Your Videos",
      icon: <BiSolidVideos size={24} />,
    },
    {
      name: "Watch Later",
      icon: <MdOutlineWatchLater size={25} />,
    },
    {
      name: "Liked Videos",
      icon: <AiOutlineLike size={25} />,
    },
  ];

  const sidebarItem3 = [
    {
      name: "Trending",
      icon: <IoIosTrendingUp size={24} />,
    },
    {
      name: "Shopping",
      icon: <RiShoppingBag4Line size={24} />,
    },
    {
      name: "Music",
      icon: <CiMusicNote1 size={24} />,
    },
    {
      name: "Movies",
      icon: <PiFilmSlateDuotone size={24} />,
    },
    {
      name: "Lives",
      icon: <CiStreamOn size={24} />,
    },
    {
      name: "Gaming",
      icon: <SiYoutubegaming size={24} />,
    },
    {
      name: "News",
      icon: <PiNewspaperBold size={24} />,
    },
    {
      name: "Sports",
      icon: <IoTrophyOutline size={24} />,
    },
    {
      name: "Podcasts",
      icon: <MdOutlinePodcasts size={24} />,
    },
  ];

  const sidebarItem4 = [
    {
      name: "Youtube Premium",
      icon: <FaYoutube size={24} />,
    },
    {
      name: "Youtube Studio",
      icon: <SiYoutubestudio size={25} />,
    },
    {
      name: "Youtube Music",
      icon: <SiYoutubemusic size={24} />,
    },
    {
      name: "Youtube Kids",
      icon: <SiYoutubekids size={24} />,
    },
    {
      name: "Settings",
      icon: <CiSettings size={24} />,
    },
    {
      name: "Report history",
      icon: <MdOutlinedFlag size={24} />,
    },
    {
      name: "Help",
      icon: <IoHelpCircleOutline size={24} />,
    },
    {
      name: "Send Feedback",
      icon: <MdOutlineFeedback size={24} />,
    },
  ];

  return (
    <>
      <div className="overflow-y-scroll w-[15%]  h-full pl-4">
        <div className=" flex flex-col gap-2  ">
          {sidebarItem1.map((item, idx) => {
            return (
              <div
                className="flex items-center w-full p-1 rounded-lg gap-4 hover:bg-slate-300 cursor-pointer"
                key={idx}
              >
                <div>{item.icon}</div>
                <p className="text-[16px] font-normal">{item.name}</p>
              </div>
            );
          })}
        </div>
        <br />
        <hr className="w-1/2" />
        <div className=" flex flex-col gap-2 mt-4 ">
          {sidebarItem2.map((item, idx) => {
            return (
              <div
                className="flex items-center w-full p-1 rounded-lg gap-4 hover:bg-slate-300 cursor-pointer"
                key={idx}
              >
                <div>{item.icon}</div>
                <p className="text-[16px] font-normal">{item.name}</p>
              </div>
            );
          })}
        </div>
        <br />
        <hr className="w-1/2" />
        <div className=" flex flex-col gap-2 mt-4 ">
          {sidebarItem3.map((item, idx) => {
            return (
              <div
                className="flex items-center w-full p-1 rounded-lg gap-4 hover:bg-slate-300 cursor-pointer"
                key={idx}
              >
                <div>{item.icon}</div>
                <p className="text-[16px] font-normal">{item.name}</p>
              </div>
            );
          })}
        </div>
        <br />
        <hr className="w-1/2" />
        <div className=" flex flex-col gap-2 mt-4 ">
          {sidebarItem4.map((item, idx) => {
            return (
              <div
                className="flex items-center w-full p-1 rounded-lg gap-4 hover:bg-slate-300 cursor-pointer"
                key={idx}
              >
                <div>{item.icon}</div>
                <p className="text-[16px] font-normal">{item.name}</p>
              </div>
            );
          })}
        </div>
        <br />
        <hr className="w-1/2" />
        <br />
        <div className="text-xs pb-2 text-gray-500">
          <span>
            About Press Copyright
            <br />
            Contact Us Creators
            <br />
            Advertise Developers
            <br />
            <br />
            <p>
              Terms Privacy Policy & safety <br />
              How Youtube works <br />
              Test new features
            </p>
          </span>
        </div>
        <p>© 2024</p>
      </div>
    </>
  );
}

export default Sidebar;

{
  /* 



    */
}
