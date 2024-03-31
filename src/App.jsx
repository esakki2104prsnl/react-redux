import React, { useState } from "react";
import Header from "./components/HeaderComp/Header";
import SideBar from "./components/AppBody/SideBar";
import Feed from "./components/AppBody/Feed";
import Widgets from "./components/AppBody/Widgets";
import { PersonContext } from "./Context/personContext";

function App() {
  const [user, setUser] = useState({
    id: 1,
    name: "Esakki.M",
    mailId: "esakki2104prsnl@gmail.com",
  });
  return (
    <div className="">
      <Header />
      <PersonContext.Provider value={{ user, setUser }}>
        <div className=" bg-[#f4f2ee]">
          <div className="mx-20 pt-5 flex gap-10 min-h-screen">
            <div className="w-1/6">
              <SideBar />
            </div>
            <div className="w-3/6">
              <Feed />
            </div>
            <div className="w-2/6">
              <Widgets />
            </div>
          </div>
        </div>
      </PersonContext.Provider>
    </div>
  );
}

export default App;
