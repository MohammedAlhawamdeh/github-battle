import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import NavBar from './components/NavBar'
import {ThemeProvider} from './context/theme';
import Popular from './components/Popular';



const App = () => {
  const [theme , setTheme] = React.useState('light')
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <ThemeProvider value={theme}>
      <div className={theme}>
        <div className='container'>
            <NavBar toggleTheme={toggleTheme} />
            <Popular />
        </div>
      </div>
    </ThemeProvider>
  )
}



const rootElement = document.getElementById('app')
const root = ReactDOM.createRoot(rootElement)
root.render(<App />)