import React,{useEffect,useContext} from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home'
import Intro from './Pages/Intro'
import SignupPage from './Pages/SignupPage';
import SigninPage from './Pages/SigninPage';
import {FirebaseContext,AuthContext} from './store/FirebaseContext'

function App() {
  const{user,setUser}=useContext(AuthContext)
  const{firebase}=useContext(FirebaseContext)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
    
  })

  return (
    <div className="App">
      <Router>
        <Route path='/browse'><Home/></Route>
        <Route exact path='/'><Intro/></Route>
        <Route path='/signup'><SignupPage/></Route>
        <Route path='/signin'><SigninPage/></Route>
      </Router>
    </div>
  );
}

export default App;
