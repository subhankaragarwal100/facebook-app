import React from 'react'
import "./css/login.css"
import { auth, provider,} from './firebase'
import{ signInWithPopup} from "firebase/auth";


function Login() {

  const signIn=()=>{
  signInWithPopup( auth,provider)
  .then(result => {
    // const user = result.user;
    console.log(result)
  }).catch(error => console.log(error))
 }
//     const signIn=()=>{
//     auth.signInWithPopup(provider).then(result=>{
//         console.log(result);
//     }).catch(error=>console.log(error))
// }

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
