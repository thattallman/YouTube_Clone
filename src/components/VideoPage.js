import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/consts";
import CommentSection from "./CommentSection";
import TrendingVideos from "./TrendingVideos";

const VideoPage = () => {
  const [videoInfo, setVideoInfo] = useState();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  useEffect(() => {
    getVideoData();
  }, [id]);
  const getVideoData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();
    setVideoInfo(json.items[0]);
  };
  const { snippet } = videoInfo || {};
  const { title, channelTitle, description, publishedAt } = snippet || {};

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3">
        <iframe
          className="rounded-lg m-4 w-11/12 h-[40rem]"
         
          src={"https://www.youtube.com/embed/" + id}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h1 className="text-4xl font-bold  mx-4">{title}</h1>
        <h1 className="text-2xl font-semibold mx-4">{channelTitle}</h1>
        <h1 className="text-xl font-semibold mx-4">
          {videoInfo?.statistics?.viewCount + " Premiered at " + publishedAt}
        </h1>
        <p className="text-xl font-semibold m-4">{description}</p>

        <CommentSection />
      </div>
      <div className="col-span-1 justify-stretch">
        <TrendingVideos/>
      </div>
    </div>
  );
};

export default VideoPage;
