import React from "react";

const SelectCard = (props) => {
  return (
    <div className="relative hover:scale-105 duration-200 cursor-pointer">
      <img
        src={props.bg}
        alt="/"
        className="h-full rounded-lg w-full object-cover"
      />
      <div className="rounded-lg bg-gray-900/30 absolute top-0 left-0 w-full h-full">
        <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
          {props.name}
        </p>
      </div>
    </div>
  );
};

export default SelectCard;
