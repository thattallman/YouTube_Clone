import React from "react";
import { useSelector } from "react-redux";
import { IoHomeSharp } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import { FaMusic } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { FaNewspaper } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const bool = useSelector((store) => store.menu.isMenuOpen);
  if (!bool) return null;
  return (
    <div className="shadow-lg p-2 my-2 w-72">
      <h1 className="text-2xl font-bold p-2">Home</h1>
      <ul><Link to={"/"}>
        <li className="px-2 flex text-lg  hover:bg-gray-300  hover:cursor-pointer ">
          <IoHomeSharp className="text-sm mx-2 my-1" />
          Home
        </li></Link>
        <li className="px-2 flex text-lg hover:bg-gray-300  hover:cursor-pointer">
          <SiYoutubeshorts className="text-sm mx-2 my-1 " /> Shorts
        </li>
        <li className="px-2 flex text-lg hover:bg-gray-300  hover:cursor-pointer">
          <MdSubscriptions className="text-sm mx-2 my-1 " /> Subcription
        </li>
      </ul>
      <h1 className="text-2xl font-bold p-2">You</h1>
      <ul>
        <li className="px-2 flex text-lg hover:bg-gray-300  hover:cursor-pointer">
          <FaRegCircleUser className="text-sm mx-2 my-1 " /> Your Channel
        </li>
        <li className="px-2 flex text-lg hover:bg-gray-300  hover:cursor-pointer">
          <FaClockRotateLeft className="text-sm mx-2 my-1 " /> History
        </li>
        <li className="px-2 flex text-lg hover:bg-gray-300  hover:cursor-pointer">
          <FaPlay className="text-sm mx-2 my-1 " /> Your Videos
        </li>
        <li className="px-2 flex text-lg hover:bg-gray-300  hover:cursor-pointer">
          <GoClockFill className="text-sm mx-2 my-1 " /> Watch Later
        </li>
      </ul>
      <h1 className="text-2xl font-bold p-2">Subscriptions</h1>
      <ul>
        <li className="px-2  flex text-lg hover:bg-gray-300  hover:cursor-pointer">
          <FaMusic className="text-sm mx-2 my-1 " /> Music
        </li>
        <li className="px-2  flex text-lg hover:bg-gray-300  hover:cursor-pointer">
          <FaTrophy className="text-sm mx-2 my-1 " /> Sports
        </li>
        <li className="px-2  flex text-lg hover:bg-gray-300  hover:cursor-pointer">
          <IoGameController className="text-sm mx-2 my-1 " /> Gaming
        </li>
        <li className="px-2  flex text-lg hover:bg-gray-300  hover:cursor-pointer">
          <BiSolidMoviePlay className="text-sm mx-2 my-1 " /> Movies
        </li>
      </ul>
      <h1 className="text-2xl font-bold p-2">Explore</h1>
      <ul>
        <li className="px-2 flex text-lg hover:bg-gray-300  hover:cursor-pointer">
          <FaMoneyBillTrendUp className="text-sm mx-2 my-1 " /> Trending
        </li>
        <li className="px-2 flex text-lg hover:bg-gray-300  hover:cursor-pointer">
          <RiShoppingBag2Fill className="text-sm mx-2 my-1 " /> Shopping
        </li>
        <li className="px-2  flex text-lg hover:bg-gray-300  hover:cursor-pointer">
          <FaMusic className="text-sm mx-2 my-1 " /> Music
        </li>
        <li className="px-2  flex text-lg hover:bg-gray-300  hover:cursor-pointer">
          <BiSolidMoviePlay className="text-sm mx-2 my-1" /> Movies
        </li>
        <li className="px-2 flex text-lg hover:bg-gray-300  hover:cursor-pointer">
          <FaNewspaper className="text-sm mx-2 my-1 " /> News
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
