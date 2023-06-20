import React, { useEffect, useState } from 'react'
import "./css/feed.css"
import Storyfeed from './Storyfeed'
import MessageSender from './MessageSender'
import Post from './Post'
import {db} from './firebase'

export default function Feed() {
  const[posts,setPosts] = useState([]);

  useEffect(()=>{
    db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{
      setPosts(snapshot.docs.map(doc=>({
        id:doc.id,
        data:doc.data(),
      })))
    })
  },[])


  return (
    <div className='feed'>
      <Storyfeed/>
      <MessageSender/>
      {
        posts.map(post=>{
        return <Post photoURL={post.data.photoURL} image={post.data.image} username={post.data.username} timestamp="12:40 PM" message={post.data.message}/>
      //  <Post photoURL={post.data.photoURL}image={post.data.image} username={post.data.username} timestamp="01:34 PM" message={post.data.message}/>
      // <Post photoURL="" image="" username="Unkonown" timestamp="03:40 PM" message=""/>     
        })
         
      }     
      

    </div>
  )
}
