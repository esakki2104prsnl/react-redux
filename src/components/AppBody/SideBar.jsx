import React, { useContext } from "react";
import CoverPic from "../../images/linked-cover.jpg";
import EsakkiProfile from "../../images/Esakki.jpg";
import { PersonContext } from "../../Context/personContext";

function SideBar() {
  const user = useContext(PersonContext);
  return (
    <div className="w-fit">
      <img
        src={CoverPic}
        alt="multicolor-cover pic"
        className="w-52 h-20 absolute rounded-t-lg"
      />
      <div className="relative top-[68px]">
        <img
          src={EsakkiProfile}
          alt="multicolor-cover pic"
          className="rounded-full mx-auto w-11 h-11 object-cover"
        />
      </div>
      <div className="mt-14 text-center w-52 pb-2">
        <div className="bg-white rounded-b-lg">
          <div className="pb-1">
            <h1 className="font-bold pt-4">{user.name}</h1>
            <a href="mailto:esakki2104prsnl@gmail.com" className="font-thin">
              {user.mailId}
            </a>
          </div>

          <hr />
          <div className="my-2 px-1">
            <div className="flex justify-between items-center p-1 hover:bg-gray-200 hover:cursor-pointer duration-100">
              <p>Profile viewers</p>
              <span className=" text-blue-600 font-bold">2500</span>
            </div>
            <div className="flex justify-between items-center p-1 hover:bg-gray-200 hover:cursor-pointer  duration-100">
              <p>Post impression</p>
              <span className="text-blue-600 font-bold">1483</span>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
