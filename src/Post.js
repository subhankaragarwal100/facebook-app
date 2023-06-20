import React from 'react'
import "./css/post.css"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material'
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';

export default function Post({photoURL,image,username,timestamp,message}) {
  return (
    <div className='post'>
      <div className='post_top'>
      <div className='post_topleft'>
            <Avatar src={photoURL}/>
            <div className='postInfo'>
                <h4>{username}</h4>
                <p>{timestamp}<PublicIcon/></p>

            </div>
        </div>
        <MoreHorizIcon/>
      </div>
      <div className='post_middle'>
            <p>
                {message}
            </p>
            {image && <img src={image}/>}
      </div>
      <div className='post_bottom'>
        <div className='post_bottomoption'>
            <ThumbUpIcon/> <p>Like</p>
        </div>
        <div className='post_bottomoption'>
            <ChatBubbleOutlineIcon/> <p>Comment</p>
        </div>
        <div className='post_bottomoption'>
            <ShareIcon/> <p>Share</p>
        </div>
      </div>
    </div>
  )
}
