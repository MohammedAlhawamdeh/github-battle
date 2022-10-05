import React from 'react'
import ThemeContext from '../context/theme'
import {darkIcon , lightIcon }  from '../icons/icon'
import { NavLink } from 'react-router-dom'


const NavBar = ({toggleTheme}) => {
    const theme = React.useContext(ThemeContext)

  return (
        <nav className="split">
            <NavLink to='/'
            className='nav-link active'
            >
                Github Battle
            </NavLink>
        <ul className='row'>
            <li>
                <NavLink
                to='/'
                className='nav-link active'
                exact='true'
                >
                    Popular
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/battle'
                className='nav-link'
                > 
                    Battle
                </NavLink>
            </li>
            <button onClick={toggleTheme} className='btn secondary icon'>{theme === 'light' ? darkIcon : lightIcon }</button>
        </ul>
        </nav>
  )
}

export default NavBar