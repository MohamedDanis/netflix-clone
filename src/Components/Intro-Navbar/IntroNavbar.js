import React from 'react'
import {useHistory} from 'react-router-dom'
import './IntroNavbar.css'

function IntroNavbar() {
    console.log(process.env.FIREBASE_API_KEY);
    const histroy = useHistory()
    return (
        <div className="navbar-intro">
            <img className="logo-intro" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix-logo" />
            <div className="auth">
                <button className="nav-auth" onClick={()=> histroy.push('/signup')}>SignUp</button>
                <button className="nav-auth" onClick={()=> histroy.push('/signin')}>SignIn</button>
            </div>
        </div>
    )
}

export default IntroNavbar
