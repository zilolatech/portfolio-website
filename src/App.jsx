import {Route, BrowserRouter, Routes} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  useEffect(() => {
      const selecredTheme = localStorage.getItem('theme')
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const initialTheme = selecredTheme ? selecredTheme == 'dark' : systemDark
  
      setIsDarkMode(initialTheme)
      document.documentElement.className = initialTheme ? 'dark' : 'light'
    }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        <Route path='/projects' element={<ProjectsPage isDarkMode={isDarkMode} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App