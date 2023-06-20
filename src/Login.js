import React from 'react'
import "./css/login.css"
import { auth, provider,} from './firebase'
import {useStateValue} from "./StateProvider"



function Login() {

    const[{},dispatch] = useStateValue();
    const signIn=()=>{
    auth.signInWithPopup(provider).then(result=>{
        var credential = result.credential;

        const photoURL = `${result.user.photoURL}?access_token=${credential.accessToken}`;
        
        dispatch({
          type:"SET_USER",
          user:{
            displayName:result.user.displayName,
            photoURL:photoURL
          }
        })
    }).catch(error=>console.log(error))
}

  return (
    <div className='login_wrapper'>
        <div className='login'>
            <img src='https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png' alt='fb'/>
            <h2>Sign in with facebook</h2>
            <button onClick={signIn}>Login with facebook</button>
        </div>
      
    </div>
  )
}
export default Login
