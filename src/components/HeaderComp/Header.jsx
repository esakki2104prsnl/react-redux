import React from "react";
import { IoMdSearch, IoIosNotifications } from "react-icons/io";
import { FaLinkedin, FaHome, FaToolbox } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import EsakkiProfile from "../../images/Esakki.jpg";
import HeaderOption from "./HeaderOption";

const Header = () => {
  return (
    <div className="p-2 border border-b sticky top-0 z-20 bg-white">
      <div className="flex items-center w-fit mx-auto justify-between">
        <FaLinkedin className="w-10 h-10 text-[#0A66C2]" />
        <div className="flex items-center bg-gray-200 m-1 p-2 rounded">
          <IoMdSearch className="w-5 h-5" />
          <input
            type="text"
            className="outline-none border-none bg-none bg-gray-200"
          />
        </div>
        <div className="grid grid-cols-6 items-center">
          <HeaderOption Icon={FaHome} title={"Home"} />
          <HeaderOption Icon={FaUserGroup} title={"My Network"} />
          <HeaderOption Icon={FaToolbox} title={"Jobs"} />
          <HeaderOption Icon={MdMessage} title={"Message"} />
          <HeaderOption Icon={IoIosNotifications} title={"Notifaction"} />
          <HeaderOption avatar={EsakkiProfile} title={"Me"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
