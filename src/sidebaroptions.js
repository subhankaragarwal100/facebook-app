import { Avatar } from '@mui/material'
import React from 'react'
import "./css/sidebarrow.css"

export default function sidebaroptions({src,Icon, title}) {
  return (
    <div className='sidebarRow'>
        {src && <Avatar src={src}/>}
        {Icon&& <Icon/>}
      <p>{title}</p>
    </div>
  )
}

