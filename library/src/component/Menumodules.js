import '../css/menuModules.css'
import React from 'react'
import addUserIcon from '../images/icons/addUser.png'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './Login'
import { useCookies } from 'react-cookie';
const Menumodules = (props) => {
    const [cookies, setCookie, removeCookie] = useCookies(['username', 'userImage','book']);
    const handleLogout = () => {
        removeCookie('username', { path: '/' })
        removeCookie('userImage', { path: '/' })
        removeCookie('book', { path: '/' })
    }
    let manuUserSeting;
    if (props.cookie.username) {
        const img = require(`../images/users_images/${props.cookie.userImage}`)
        manuUserSeting = <div style={{ display: props.changeProfileDisplay }} className='profile-dropdown'>
            <div className='profile-dropdown-contant'>
                <div className='profile-dropdown-info profile-items'>
                    <a className='profile-dropdown-info-img'><img src={img.default} /></a>
                    <a className='profile-dropdown-info-name'>{props.cookie.username}</a>
                </div>
                <div className='profile-dropdown-logout'><a href='/' onClick={handleLogout} className='profile-dropdown-logout-button'>LogOut</a></div>
            </div>
        </div>
    } else {
        manuUserSeting = <div style={{ display: props.changeProfileDisplay }} className='profile-dropdown'>
            <div className='profile-dropdown-contant'>
                <div className='navbar-loginButtonLink'>
                    <Link id='loginButtonLink' to="/login">Login</Link>
                </div>
                <div className='navbar-createAccountButtonLink'>
                    <span><img src={addUserIcon} /></span>
                    <a id='createAccountButtonLink'>Create New Account</a>
                </div>
            </div>
        </div>
    }
    return (
        <Router>
            {/* <div className='menu-modules'> */}
                {/* <div className='modules-container'> */}

                {/* </div> */}

                <Switch>
                    <Route path="/login" component={Login} />
                </Switch>
            {/* </div> */}
            {manuUserSeting}
        </Router>
    )
}

export default Menumodules

