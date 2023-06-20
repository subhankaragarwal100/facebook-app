import React from 'react'
import "./css/header.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupIcon from '@mui/icons-material/Group';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Avatar, IconButton } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useStateValue} from './StateProvider';


export default function Header() {

 const[{user}, dispatch]=useStateValue()
  return (
    <div className='header'>
        <div className='header_left'>
            <img src='https://cdn-icons-png.flaticon.com/512/5968/5968764.png' alt='logo'/>
            <div className='header_search'>
            <SearchIcon/>
            <input type='text' placeholder='Search facebook'/>
            </div>
        </div>
        <div className='header_middle'>
            <div className='header_option header_option--active'>
                    <HomeIcon fontSize='large'/>
            </div>
            <div className='header_option'>
                    <OndemandVideoIcon fontSize='large'/>
            </div>
            <div className='header_option'>
                    <GroupIcon fontSize='large'/>
            </div>
            <div className='header_option'>
                    <SportsEsportsIcon fontSize='large'/>
            </div>
        </div>
        <div className='header_right'>
            <div className='header_info'>
                <Avatar src={user.photoURL}/>
                <h5>{user.displayName}</h5>
            </div>
            <IconButton>
                <AppsIcon/>
            </IconButton>
            <IconButton>
                <ForumIcon/>
            </IconButton>
            <IconButton>
                <NotificationsIcon/>
            </IconButton>
            <IconButton>
                <ArrowDropDownIcon/>
            </IconButton>
            
        </div>
    </div>
  )
}
