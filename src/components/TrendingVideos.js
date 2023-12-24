import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/consts";
import VideoCard from "./VideoCard";

const TrendingVideos = () => {
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
          <div >
            {data.map((video) => (
              <VideoCard key={video.id} info={video} />
            ))}
          </div>
        );
      
}

export default TrendingVideos


