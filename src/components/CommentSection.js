import React, { useState,useEffect } from 'react'
import {  useSearchParams } from 'react-router-dom';
import { GOOGLE_API_KEY } from '../utils/consts';
import CommentCard from './CommentCard';

const CommentSection = () => {
    const [params] =  useSearchParams();
    const vidId = params.get("v")
    const [commentData,setCommentData] = useState();
    useEffect(()=>{
        getCommentData();
    },[vidId])
   
  
    
    const getCommentData = async()=>{
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${vidId}&key=${GOOGLE_API_KEY}`);
        const json =  await data.json();
        setCommentData(json)
      
        
    }
    const { pageInfo} = commentData || {}
    const obj = commentData?.items || [];
 
  return (
    <div>
        <h1 className='text-3xl font-bold m-3'>{pageInfo?.totalResults} Comments  </h1>
       {  obj.map((comment)=>(<CommentCard  key={comment?.id} commentInfo={comment}/>))}
        
    </div>
  )
}

export default CommentSection