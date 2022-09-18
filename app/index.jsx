import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import NavBar from './components/NavBar'
import {ThemeProvider} from './context/theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Battle from './components/Battle'
import Popular from './components/Popular'

const App = () => {
  const [theme , setTheme] = React.useState('light')
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <Router>
      <ThemeProvider value={theme}>
        <div className={theme}>
          <div className='container'>
              <NavBar toggleTheme={toggleTheme} />
              <Routes>
                <Route exact path='/' element={<Popular/>}/>
                <Route exact path='/battle' element={<Battle/>}/>
              </Routes>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  )
}


const rootElement = document.getElementById('app')
const root = ReactDOM.createRoot(rootElement)
root.render(<App />)