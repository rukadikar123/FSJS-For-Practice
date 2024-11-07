import React from "react";
import Sidebar from "./SideBar";
import Video from "./Video";
import { useAuth } from "../Context_api/AuthProvider";
import List_Items from "./List_Items";

function Home() {
  const { data , loading } = useAuth();
  console.log(data);

  return (
    <>
      <div className="mt-8 h-[86vh]  flex w-full gap-10 justify-start">
        <Sidebar />
        <div className="flex flex-col gap-2 ">
          <div><List_Items/></div>
          <div className="overflow-y-auto">
            <div className="grid  grid-cols-3 gap-4">
              {!loading && data?.map((item) => {
                if (item?.type !== "video") return false;
                return <Video key={item?.id} video={item?.video} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
