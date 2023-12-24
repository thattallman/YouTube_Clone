import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
    
  

  return (
   <>
    <Link to={"/watch?v="+info.id}>
    <div className=" mx-2 w-96 shadow-lg hover:bg-gray-300  hover:cursor-pointer">
      <img  className="rounded-lg" alt="thumb" src={  info.snippet.thumbnails.maxres.url}></img>
      <ul>
        <li className="font-bold p-1">{info.snippet.title}</li>
        <li className="px-1">{info.snippet.channelTitle}</li>
        <li className="px-1">{info.statistics.viewCount}</li>
      </ul>
    </div>
    </Link>
    </>
  );
};

export default VideoCard;
