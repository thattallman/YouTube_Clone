import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/consts";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setData(json.items);
  };
  return (
    <div className="flex flex-wrap my-2">
      {data.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
