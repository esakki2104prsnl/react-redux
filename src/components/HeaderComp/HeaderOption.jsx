import React from "react";

const HeaderOption = ({ avatar, Icon, title }) => {
  return (
    <div className=" text-gray-600 hover:text-black hover:cursor-pointer">
      {avatar && (
        <img
          src={avatar}
          alt={title}
          className="w-5 h-5 object-fill mx-auto rounded-full"
        />
      )}
      {Icon && <Icon className="w-5 h-5 mx-auto" />}
      <h2 className="text-center">{title}</h2>
    </div>
  );
};

export default HeaderOption;
