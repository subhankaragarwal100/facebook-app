import React from 'react'
import "./css/feed.css"
import Storyfeed from './Storyfeed'
import MessageSender from './MessageSender'
import Post from './Post'

export default function Feed() {
  return (
    <div className='feed'>
      <Storyfeed/>
      <MessageSender/>
      <Post photoURL="https://imgk.timesnownews.com/73027505_2435523350041800_7197995791219918035_n_1578044206__rend_1_1.jpg?tr=w-360" image="" username="Subhankar Agarwal" timestamp="12:40 PM" message="Hey,Kohli Here"/>
      <Post photoURL="https://c.ndtvimg.com/2023-06/bmk9mf2o_dhoni_625x300_02_June_23.jpg?im=FaceCrop,algorithm=dnn,width=806,height=605" image="https://www.livemint.com/lm-img/img/2023/04/12/1600x900/CRICKET-IND-IPL-T20-LUCKNOW-CHENNAI-32_16812994209_1681299446316_1681299446638_1681299446638.jpg" username="MS Dhoni" timestamp="01:34 PM" message="5th Time"/>
      <Post photoURL="" image="" username="Unkonown" timestamp="03:40 PM" message=""/>
    </div>
  )
}
