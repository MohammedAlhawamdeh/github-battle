import React from 'react'
import ThemeContext from '../context/theme'
import {darkIcon , lightIcon }  from '../icons/icon'

const NavBar = ({toggleTheme}) => {
    const theme = React.useContext(ThemeContext)

  return (
        <nav className="split">
            <a to='/' className='nav-link active' href="/">Github Battle</a>
        <ul className='row'>
            <li><a exact='true' to='/' className='nav-link active' href="/">Popular</a></li>
            <li><a to='/battle' className='nav-link' href="">Battle</a></li>
            <button onClick={toggleTheme} className='btn secondary icon'>{theme === 'light' ? darkIcon : lightIcon }</button>
        </ul>
        </nav>
  )
}

export default NavBar