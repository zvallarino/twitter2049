import React from 'react'
import { Tweet } from "../typings"
import TimeAgo from "react-time-ago"
import { time } from 'console'

interface Props {
  tweet: Tweet
}

function Tweet({tweet}: Props) {
  console.log(tweet._createdAt)
  return (
    <div>
      <div>
        <img src ={tweet.profileImg}  alt="" />
        <div>
          <div> 
            <div>
              <p>{tweet.username}</p>
              <p>@{tweet.username.replace(/\s+/g, '').toLowerCase()}</p>

              <TimeAgo 
              className ="text-sm text-gray-500"
              date = {tweet._createdAt}
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tweet