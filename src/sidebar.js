import React from 'react'
import Sidebaroptions from './sidebaroptions'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./css/sidebar.css"
export default function sidebar() {
  return (
    <div className='sidebar'>
     <Sidebaroptions src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2020/12/01170355/73027505_2435523350041800_7197995791219918035_n.jpg" title="Subhankar Agarwal"/>
     <Sidebaroptions src="https://www.facebook.com/rsrc.php/v3/yR/r/tInzwsw2pVX.png" title="Covid 19 Information Center"/>
     <Sidebaroptions src="https://www.facebook.com/rsrc.php/v3/yx/r/-XF4FQcre_i.png" title="Friends"/>
     <Sidebaroptions src="https://www.facebook.com/rsrc.php/v3/yD/r/mk4dH3FK0jT.png" title="Groups"/>
     <Sidebaroptions src="https://www.facebook.com/rsrc.php/v3/yG/r/A1HlI2LVo58.png" title="Watch"/>
     <Sidebaroptions src="https://www.shutterstock.com/image-vector/events-calendar-menu-icon-vector-260nw-2034331094.jpg" title="Events"/>
     <Sidebaroptions Icon={ExpandMoreIcon}title="See More"/>
    </div>
  )
}
