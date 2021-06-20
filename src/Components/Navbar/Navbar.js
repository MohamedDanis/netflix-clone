import React,{useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {FirebaseContext,AuthContext} from '../../store/FirebaseContext'
import "./Navbar.css"

function Navbar() {
    const history = useHistory()
    const{firebase}=useContext(FirebaseContext)
    const{user}=useContext(AuthContext)
    window.addEventListener("scroll", function () {
        let header = document.querySelector(".navbar");
        let windowPosition = window.scrollY > 0;
        header.classList.toggle("scrolling-active", windowPosition);
      });

      
      
    return (
        <div className="navbar">
             <div class="hamburger" id="toggler" onClick={()=>{
                 let menu = document.querySelector(".collapse-menu")
                 menu.classList.toggle("show")
             }}>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix-logo" />
            <div className="nav-items">
                <ul>
                    <li><a href="#" className="nav-link">Home</a></li>
                    <li><a href="#" className="nav-link">TV Shows</a></li>
                    <li><a href="#" className="nav-link">Movies</a></li>
                    <li><a href="#" className="nav-link">New & Popular</a></li>
                    <li><a href="#" className="nav-link">My List</a></li>
                </ul>
            </div>

            <div className="popover-wrapper">
            <img className="avatar" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEUNfoD///8Ae30AeHoAdXcAdnl6q6z2+/vo8vLx+Ph1sbIAdHfu9PQHfH8AgYPl8vI7kJKRvr+hx8jO4+PJ3d4eioxppqja6eni7OxdoqRSnqC42dqXxsaw09Ntra8ph4l/uLmGtrdapqeozc02lZdMmZuuzM3A2NnU4+SRvL2fy8xSmZpEkZO+1NV1qaqNxlfBAAAEIElEQVR4nO3bXXeiOhQGYNgJg6AiiIiggtbP0U7//8+beJzjoCYtSAQ7630uetVmvZuEEOnWMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvjNi3Ii8rkWtpuiLGCyKxA/dOchIZ3FPmGc5tVckGf4iPMUIA9/QGYNoEZr/c4Y+0zh2FSydX2KY00RfDDJ2ZlEnbadEa+EUYziBrlkkPzav2W4rJc5vYphzTQPTbYGixBZmkc/uYphDPTG29yObHb/p7YYSSQxzqSEGJbZs6FX9kavJQ1mMQV6/RDaVjWzaDU8i/ZDGMBf116knH1nH0FUoLrQ5qR2D3hQVhl0dwUvjihh2VHctsZVqaC3By6K1IoaZ1a2Qj5QXr68leznKpWQu6y5Tfv8wbKXC7HkV7hQjN1xh+rQKmeQkca6w0acFRaoKa9+HyosXci3Ry7Kk5w4de6lhKCps+nl4d+w+q/88VD0uHA3HpSpoLJ/ErH6FdHRkIw+b3GdOPOljK841DE2yvWaiYflXjLGWTKLtaolB9w8Me938uxq+uC8x0LMZUHRboqNh9T+QY3lb4ErXrUL92dXli6N23tPwt04xRsfV+MCi5O+Hl8Gy4W20EMMvXOrhRut1Jsrd+WQy2c82Wt9TVo7hpatY5FhlhvbXtsQsLmh/11w9x0vEAAAAAAAAAAAAAAAAgH8KMc/4l/8HRXyz3e2GLf07uqD/nO+fkLHZ2eeWgnZnkVi0ifSvJOLJpUXKTtoskfxdp9fZb7TWSETprtA50XCD3RWW/Qky19dUQCx3b7r2PV1jV+dd+sU6M88iDc0v1I2Cu5bextuzLqyrdrGgdhOHmL6xrGM/0hP3EfurIM42YY/fkMRYOpR2ZDvt3Yfe/iaLPVn4j7TBiL0l9xexooe24UbXIkvWL7n7uSGryh1JjEfjofQrQefV/7T8X2OuNFIvnq3FmisxlyR+zYoWo4Fi9oRB1kAhapbyytvT4OM9OpUpr1PUZhnR8SOYqosT4sxq99AmHvifxBuEo2G2iXiXc1bEeddYp8vtaN/55K9P9bntH0qJZV+kFHrh9HAI3P8sDodVqL7nCuzwrc0Wwr9YFEjbxGuy5+MWv1F+jcgPPr2XHtAL3l9j/v4Qny+CUguvHGfnvt7n3r44LSu+IFnVIDgarW8vUsSjmepQUnr24iB65dZZYt54NXi8vtEw9V64vDOx/fmHuPre6vSmWa6/r/s5xDls7W7D8lU64fZn6vFvUt4ZMcrfk2D69VnAmQbj95xefm3KiHMn73prN/g1CuO441zm1HacQRyHo19Btva6vMz5/JWd6jQ83z8mx48fZ8kx2fi5R9++tiKiPl1rOxEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALy43/ipMgzSotaqAAAAAElFTkSuQmCC" alt="avatar" />
            <div className="popover-content">
                <p style={{fontWeight: 700}}>{user? user.displayName : ""}</p>
                <p className="pop-msg">Account</p>
                <p className="pop-msg">Help Centre</p>
                <p className="pop-msg" onClick={()=>{
                    firebase.auth().signOut();
                    history.push('/signin')
                }}>Sign out of Netflix</p>
            </div>
            </div>
            <div className="collapse-menu none">
                <p>{user ? user.displayName : ""}</p>
                <p>Account</p>
                <p>Help Center</p>
                <p onClick={()=>{
                    firebase.auth().signOut();
                    history.push('/signin')
                }}>Sign out of Netflix</p>
            </div>
        </div>
    )
}

export default Navbar
