import React from 'react'
import './css/right.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';

export default function () {
  return (
    <div className='widget'>
      <div className='widget_header'>
        <div className='widget_headerleft'>
            <h4>Your Pages</h4>
        </div>
        <MoreHorizIcon/>
      </div>
      <div className='widget_body'>
        <div className='widget_bodyoptions'>
            <Avatar src='https://upload.wikimedia.org/wikipedia/commons/8/8c/ESPNCricinfo.png'/>
            <h4>ESPN</h4>
        </div>
        <div className='widget_bodyoptions'>
            <Avatar src='https://yt3.googleusercontent.com/wntqEtC54q6jAEzNt1sLuxzefxaXoewn9FkT8JUPoxyGUFCAD8SU7xp_0RnyY3QFFCHsEaNLIfk=s900-c-k-c0x00ffffff-no-rj'/>
            <h4>Cricbuzz</h4>
        </div>
        <div className='widget_bodyoptions ml10'>
            <NotificationsNoneIcon/>
            <p>1 Notification</p>
        </div>
        <div className='widget_bodyoptions ml10'>
           <VolumeUpIcon/>
            <p>create promotions</p>
        </div>
      </div>
      <hr/><br/>
      <div className='widget_header'>
        <div className='widget_headerleft'>
            <h4>Contact</h4>
        </div>
        <div className='widget_headerright'>
            <VideoCallIcon/>
            <SearchIcon/>
            <MoreHorizIcon/>
        </div>
        </div>
        <div className='widget_body'>
          <div className='widget_bodyoptions'>
            <Avatar src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/94.png'/>
            <h4>Faf Du Plessis</h4>
          </div>
        </div>
        <div className='widget_body'>
          <div className='widget_bodyoptions'>
            <Avatar src='https://staticg.sportskeeda.com/editor/2023/02/58d81-16760096896622-1920.jpg'/>
            <h4>Bhuveneswar Kumar</h4>
          </div>
        </div>
        <div className='widget_body'>
          <div className='widget_bodyoptions'>
            <Avatar src='https://w0.peakpx.com/wallpaper/104/666/HD-wallpaper-rohit-sharma-the-hitman-rohit-sharma-the-hitman.jpg'/>
            <h4>Rohit Sharma</h4>
          </div>
        </div>
        <div className='widget_body'>
          <div className='widget_bodyoptions'>
            <Avatar src='https://images.indianexpress.com/2020/04/sourav-ganguly-india.jpg'/>
            <h4>Sourav Ganguly</h4>
          </div>
        </div>
        <div className='widget_body'>
          <div className='widget_bodyoptions'>
            <Avatar src='https://static.toiimg.com/photo/msid-90271894/90271894.jpg'/>
            <h4>Sachin tendulkar</h4>
          </div>
        </div>
        {/* <div className='widget_body'>
          <div className='widget_bodyoptions'>
            <Avatar src='https://p.imgci.com/db/PICTURES/CMS/276800/276827.jpg'/>
            <h4>Shane Watson</h4>
          </div>
        </div> */}

    </div>
  )
}

