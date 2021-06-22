import React,{useState,useContext,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {FirebaseContext} from '../../store/FirebaseContext'

import './SignIn.css'

function SignIn() {
    
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const{firebase}=useContext(FirebaseContext)
    const history = useHistory()
    const handleSubmit = (e)=>{
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
          history.push('/browse')
        }).catch((error)=>{
          alert(error.message)
        })

    }
    return (
      
        <div className="bg-signin">
        <div className="parent">
            <div className="form">
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button className="signup-btn">SignIn</button>
        </form>
            </div>
        </div>
        </div>
      
    )
}

export default SignIn
