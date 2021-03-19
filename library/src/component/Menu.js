import '../css/menu.css'
import React, { useState } from 'react'
import logo from '../images/logo.png'
import Menumodules from './Menumodules'
import { useCookies } from 'react-cookie';


const Menu = () => {

    const [displayNone, setDisplay] = useState('none')
    const handleToggle = (e) => {
        if (displayNone === 'block') {
            setDisplay('none')
        } else {
            setDisplay('block')
        }

    }

    const [cookies] = useCookies(['username', 'userImage']);
    let manuUserSeting;
    if (cookies.username) {
        manuUserSeting = <a onClick={handleToggle} id='profile-items' className='profile-items-a'>{cookies.username} </a>
    } else {
        manuUserSeting = <a onClick={handleToggle} id='profile-items' className='profile-items-a' >My accaunt</a>
    }
    return (

      <>
            <div className='page-navigation'>
                <div className='page-container'>
                    <div className='navbar-mobile'></div>
                    <div className='navbar-desktop'>
                        <a className='navbar-desktop-a' href="/"><img src={logo} /></a>
                        
                        <div className='profile-items'>
                            {manuUserSeting}
                        </div>
                    </div>
                    
                </div>
                    
            </div>
            <Menumodules changeProfileDisplay={displayNone} cookie={cookies} />
        </>

    )
}


export default Menu