import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { toogleMenu } from "../utils/menuSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();
  const toogleMenuHandler = () => {
    dispatch(toogleMenu());
  };

  return (
    <div className=" grid grid-cols-6 p-2 m-2 shadow-l ">
      <div className="flex col-span-1">
        <RxHamburgerMenu
          onClick={() => {
            toogleMenuHandler();
          }}
          className="text-4xl cursor-pointer"
        />
          <img
            className="h-10 mx-3 hover:cursor-pointer"
            alt="youtube-icon"
            src="https://www.shutterstock.com/image-vector/youtube-logo-social-media-icon-260nw-2310134969.jpg"
          />
      
      </div>
      <div className="flex justify-center col-span-4">
        <input
          className="w-7/12 border border-black p-3 rounded-l-full"
          type="text"
        ></input>
        <button className=" bg-slate-300 p-3  rounded-r-full ">
          <CiSearch className="text-2xl" />
        </button>
      </div>
      <div className="flex justify-end px-4 col-span-1">
        <FaUser />
      </div>
    </div>
  );
};

export default Head;
