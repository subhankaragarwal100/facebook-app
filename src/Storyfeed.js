import React from 'react'
import "./css/story.css"
import { Avatar} from '@mui/material';


export default function Storyfeed() {
  return (
    <div className='storyfeed'>
      <div className='story' style={{backgroundImage:`url("https://img.etimg.com/thumb/msid-98912259,width-650,height-488,imgsize-67876,,resizemode-75/virat-kohli.jpg")`}}>
            <Avatar src='https://images.lifestyleasia.com/wp-content/uploads/sites/7/2020/12/01170355/73027505_2435523350041800_7197995791219918035_n.jpg'/>
            <h4>Subhankar Agarwal</h4>
      </div>
      <div className='story' style={{backgroundImage:`url(https://resources.pulse.icc-cricket.com/photo-resources/2019/07/20/3f86257b-ea3e-43bc-9269-f5ed1ad876fe/Dhoni-registered-his-first-ever-ODI-century-against-Pakistan-in-2005.jpg?width=845&height=543)`}}>
            <Avatar src='https://c.ndtvimg.com/2023-06/bmk9mf2o_dhoni_625x300_02_June_23.jpg?im=FaceCrop,algorithm=dnn,width=806,height=605'/>
            <h4>MS Dhoni</h4>
      </div>
      <div className='story' style={{backgroundImage:`url("https://images.indianexpress.com/2023/06/raina-csk.jpg")`}}>
            <Avatar src='https://m.cricbuzz.com/a/img/v1/192x192/i1/c148324/suresh-raina.jpg'/>
            <h4>Suresh Raina</h4>
      </div>
      <div className='story' style={{backgroundImage:`url("https://static.toiimg.com/photo/msid-91489095/91489095.jpg")`}}>
            <Avatar src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/46.png'/>
            <h4>Ravindra Jadeja</h4>
      </div>
      <div className='story' style={{backgroundImage:`url("https://resources.pulse.icc-cricket.com/photo-resources/2023/06/01/ddf24409-f230-4206-b7fc-ac23c1250e77/Ben-Stokes-of-England-celebrates-hitting-the-winning-runs-to-win-the-3rd-Specsavers-Ashes-Test-match-between-England-and-Australia-1920x1080.png?width=640&height=360")`}}>
            <Avatar src='https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2022/1/13/emghne9hfad7rphhzfvy/ben-stokes-cricket-portrait'/>
            <h4>Ben Stokes</h4>
      </div>
    </div>
  )
}
