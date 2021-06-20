import React,{useContext,useEffect} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import Rowpost from '../Components/Rowpost/Rowpost'
import {originals,action,comedy,horror} from '../urls'
import './Home.css'
import { FirebaseContext,AuthContext } from '../store/FirebaseContext'

function Home() {
    const {firebase}=useContext(FirebaseContext)
    const{user,setUser}=useContext(AuthContext)
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user)=>{
          setUser(user)
        })
        
      })
    return (
        <div className="home">
            <Navbar/>
            <Banner/>
            <Rowpost title='Netflix Originals' url={originals}/>
            <Rowpost title='Action' isSmall url={action}/>
            <Rowpost title='Comedy' isSmall url={comedy}/>
            <Rowpost title='Horror' isSmall url={horror}/>
        </div>
    )
}

export default Home
