// import React, { useContext } from "react";
// import { PersonContext } from "../../Context/personContext";
import NewPost from "../pages/NewPost";
import NewFeeds from "../pages/NewFeeds";

const Feed = () => {
  // const { user, setUser } = useContext(PersonContext);

  // const inputHandle = (event) => {
  //   event.preventDefault();
  //   setUser({ ...user, name: event.target[0].value });
  //   console.log(event, event.target[0].value);
  // };
  return (
    <div className="">
      <div className="max-w-6xl bg-white p-3 border border-gray-300 rounded-md ">
        <NewPost />
      </div>
      <div className="my-2 flex items-center">
        <div className="bg-gray-600 w-3/4 h-[0.5px] flex-1 mx-2"></div>
        <p className="text-gray-700 text-xs">Sort by:</p>
        <span className="font-semibold">Top</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="m7 10l5 5l5-5z"></path>
        </svg>
      </div>
      <div className="max-w-6xl bg-white p-3 border border-gray-300 rounded-md ">
        <NewFeeds />
      </div>
    </div>
  );
};

export default Feed;
