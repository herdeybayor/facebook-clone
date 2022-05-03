import React from "react";

const HeaderIcon = ({ Icon, active }) => {
  return (
    <div className="cursor-pointer md:px-7 sm:h-14 md:hover:bg-gray-100 flex items-center rounded-xl active:border-b-2 active:border-blue-500 group">
      <Icon
        className={`h-5 sm:h-7 w-5 sm:w-7 mx-auto group-hover:text-blue-500 ${
          active ? "text-blue-500" : "text-gray-500"
        }`}
      />
    </div>
  );
};

export default HeaderIcon;
