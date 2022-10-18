import React , {useEffect, useState} from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import NavBar from './components/NavBar'
import {ThemeProvider} from './context/theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Battle from './components/Battle';
import Popular from './components/Popular';
import Results from './components/Results';

const App = () => {
  const [theme , setTheme] = React.useState('light' && window.localStorage.getItem('theme'));
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
  const [firstPlayer , setFirstPlayer] = useState(null)
  const [secondPlayer , setSecondPlayer] = useState(null)

  useEffect(() =>{
    window.localStorage.setItem('theme', theme);
  },[theme])

  return (
    <Router>
      <ThemeProvider value={theme}>
        <div className={theme}>
          <div className='container'>
              <NavBar toggleTheme={toggleTheme} />
              <Routes>
                <Route exact path='/' element={<Popular/>}/>
                <Route path='/battle' element={<Battle firstPlayer={firstPlayer} setFirstPlayer={setFirstPlayer} secondPlayer={secondPlayer} setSecondPlayer={setSecondPlayer}/>}/>
                <Route path='/results' element={<Results firstPlayer={firstPlayer} secondPlayer={secondPlayer} setFirstPlayer={setFirstPlayer} setSecondPlayer={setSecondPlayer}/>}/>
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