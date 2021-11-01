import React from 'react'
import './ThemePicker.css';
const ThemePicker = ({changeTheme}) => {
    //function to change theme
    function selectChanged(theme) {
        changeTheme(theme);
    }
    return (
        <div className="theme-picker">
            <label htmlFor="themeSelect">Theme</label>
            <select name="Theme" id="themeSelect" onChange={(e) => selectChanged(e.target.value)}>
                <option value="White">Light</option>
                <option value="Black">Dark</option>
                <option value="Green">Green</option>
                <option value="Yellow">Warm</option>
                <option value="Gray">Gray</option>
                <option value="Brown">Brown</option>
            </select>
        </div>
    )
}

export default ThemePicker
