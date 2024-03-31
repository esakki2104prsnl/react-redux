import React from "react";
import EsakkiProfile from "../../images/Esakki.jpg";
import { FaPen } from "react-icons/fa6";
import { TbPhoto } from "react-icons/tb";
import { PiSuitcaseSimpleFill, PiArticleMediumBold } from "react-icons/pi";

const NewPost = () => {
  return (
    <>
      <div className="flex items-center mx-3">
        <div className="pr-3">
          <img
            src={EsakkiProfile}
            alt="multicolor-cover pic"
            className="rounded-full w-11 h-11 object-cover"
          />
        </div>
        <div className="flex-1 border flex items-center hover:bg-gray-200 border-gray-300 p-2 rounded-full cursor-pointer ">
          <FaPen className="text-gray-500" />
          <p className="pl-2 text-gray-500">
            Start a post, try writing with AI
          </p>
        </div>
      </div>
      <div className="flex items-center justify-evenly text-black mt-2">
        <div className="flex items-center rounded-lg p-2 hover:bg-gray-200 cursor-pointer">
          <TbPhoto className="text-blue-500 w-8 h-6" />
          <p className="text-gray-500 hover:text-gray-600">Media</p>
        </div>
        <div className="flex items-center rounded-lg p-2 hover:bg-gray-200 cursor-pointer">
          <PiSuitcaseSimpleFill className="text-purple-500 w-8 h-6" />
          <p className="text-gray-500 hover:text-gray-600">Job</p>
        </div>
        <div className="flex items-center rounded-lg p-2 hover:bg-gray-200 cursor-pointer">
          <PiArticleMediumBold className="text-orange-500 w-8 h-6" />
          <p className="text-gray-500 hover:text-gray-600">Write article</p>
        </div>
      </div>
    </>
  );
};

export default NewPost;
