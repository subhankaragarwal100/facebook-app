import React, { useState } from 'react'
import { Avatar, IconButton, Modal } from '@mui/material'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import "./css/messagesender.css"
import CloseIcon from '@mui/icons-material/Close';

export default function MessageSender() {
    const [open,setOpen]= useState(false);
    const handleClose=()=>{
        setOpen(false)
    }
    const handleOpen=()=>{
        setOpen(true)
    }
    return (
        <>
       <Modal open={open} onClose={handleClose}>
            <div className='modal_pop'>
                <form>
                    <div className='modalHeading'>
                        <h3>Create Post</h3>
                        <IconButton onClick={handleClose}>
                            <CloseIcon/>
                        </IconButton>
                    </div>
                    <div className='modalheader_top'>
                        <Avatar/>
                        <h5>Subhankar Agarwal</h5>
                    </div>
                    <div className='modalbody'>
                        <textarea rows="5" placeholder="what's on your mind Subhankar?" ></textarea>
                    </div>
                    <div className='modalfooter'>
                        <div className='modalfooterleft'>
                            <h4>Add to your post </h4>
                        </div>
                        <div className='modalfooterRight'>
                            <IconButton>
                            <PhotoLibraryIcon style={{color:'lightgreen'}} fontSize='large'/>
                            </IconButton>
                            <IconButton>
                            <VideoCallIcon style={{color:'red'}} fontSize='large'/>
                            </IconButton>
                            <IconButton>
                            <InsertEmoticonIcon style={{color:'#ffb100'}} fontSize='large'/>
                            </IconButton>
                        </div>

                    </div>
                   <input type='submit' className='post_submit' value="Post"/> 
                </form>
            </div>
       </Modal>
        <div className='messagesender'>
            <div className='messagesender_top'>
                <Avatar src='https://imgk.timesnownews.com/73027505_2435523350041800_7197995791219918035_n_1578044206__rend_1_1.jpg?tr=w-360'/>

                <form>
                    <input type='text' placeholder="What's on your mind?" onClick={handleOpen} />
                </form>
            </div>

            <div className='messagesender_bottom'>
                <div className='massengeroptions'>
                    <VideoCallIcon style={{color:'red'}} fontSize='large'/>
                    <p>Live Video</p>
                </div>
                <div className='massengeroptions'>
                    <PhotoLibraryIcon style={{color:'lightgreen'}} fontSize='large'/>
                    <p>Photo/Video</p>
                </div>
                <div className='massengeroptions'>
                    <InsertEmoticonIcon style={{color:'#ffb100'}} fontSize='large'/>
                    <p>Feeling/Activity</p>
                </div>
            </div>
        </div>
        </>
    )
}
