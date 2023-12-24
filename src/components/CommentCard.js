import React from "react";

import { BiLike } from "react-icons/bi";

import { BiDislike } from "react-icons/bi";

import { FcLike } from "react-icons/fc";

const CommentCard = ({ commentInfo }) => {
  return (
    <div className="m-3  flex ">
        <div>
            <img alt="userImage" src={commentInfo?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} className="rounded-full my-4 w-16"/>
        </div>
        <div>
      <ul>
        <li className="text-3xl m-2 font-bold ">
        
          {commentInfo?.snippet?.topLevelComment?.snippet?.authorDisplayName}
        </li>
        <li className="text-2xl m-2"> {commentInfo?.snippet?.topLevelComment?.snippet?.textOriginal}</li>
        <li className="flex">
          <BiLike className="mx-1 my-4 text-2xl hover:bg-gray-200 hover:cursor-pointer rounded-full"/> <p  className="mx-2  hover:bg-gray-200 hover:cursor-pointer rounded-full my-4 text-2xl font-bold">{commentInfo?.snippet?.topLevelComment?.snippet?.likeCount} </p>  <BiDislike className="mx-1 my-4 text-2xl hover:bg-gray-200 hover:cursor-pointer rounded-full"/> <FcLike className="mx-1 my-4 text-2xl hover:bg-gray-200 hover:cursor-pointer rounded-full"/> <p className="mx-4  hover:bg-gray-200 hover:cursor-pointer rounded-full my-4 text-2xl font-bold">reply</p>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default CommentCard;
