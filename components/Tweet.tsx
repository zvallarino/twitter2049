import React, { useState, useEffect} from 'react'
import { Comment, Tweet } from "../typings"
import TimeAgo from "react-time-ago"
import { time } from 'console'

import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from '@heroicons/react/outline'
import { fetchComments } from '../utils/fetchComments'

interface Props {
  tweet: Tweet
}

function Tweet({tweet}: Props) {

   const [comments, setComments] = useState<Comment[]>([])

  const refreshComments =async () => {
    const comments: Comment[] = await fetchComments(tweet._id)
    setComments(comments);
  }

useEffect(() => {
  refreshComments()
  
  }, [])
  // console.log(comments)
  return (
    <div className = "flex flex-col space-x-3- border-y p-5 border-gray-100">
      <div className ="flex space-x-3">
        <img className = "h-10 w-10 rounded-full object-cover" src ={tweet.profileImg}  alt="" />
        <div>
          <div> 
            <div className ='flex items-center space-x-1'>
              <p className = "mr-1 font-bold">{tweet.username}</p>
              <p className = 'gidden text-sm text-gray-500 sm:inline'>@{tweet.username.replace(/\s+/g, '').toLowerCase()} · </p>

              <TimeAgo 
              className ="text-sm text-gray-500"
              date = {tweet._createdAt}
              />

            </div>
            <p className = "pt-1">{tweet.text}</p>

            {tweet.image && <img src={tweet.image} alt="" className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm"/>}
          </div>
        </div>
      </div>

       <div class ="mt-5 flex justify-between">
      
        <div className = "flex cursor-pointer items-center space-x-3 text-gray-400">
          <ChatAlt2Icon className="h-5 w-5"/>
          <p>6</p>
        </div> 

        <div className = "flex cursor-pointer items-center space-x-3 text-gray-400">
          <SwitchHorizontalIcon className="h-5 w-5"/> 
          </div> 

        <div className = "flex cursor-pointer items-center space-x-3 text-gray-400"> 
          <HeartIcon className = "h-5 w-5" />
        </div> 

        <div className = "flex cursor-pointer items-center space-x-3 text-gray-400">
          <UploadIcon className = "h-5 w-5" />
        </div> 
          
      </div>
    </div>
  )
}

export default Tweet