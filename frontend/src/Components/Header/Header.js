import React from 'react'
import './Header.css';
import logo from '../../logo.svg';
import ThemePicker from './ThemePicker/ThemePicker';
import Search from './Search/Search';
const Header = ({changeTheme}) => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="LOGO"/>
            </div>
            <div className="rightpart">
                <Search/>
                <ThemePicker changeTheme={changeTheme}/>
                <div>About</div>
            </div>
        </div>
    )
}

export default Header
