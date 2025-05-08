import {Route, BrowserRouter, Routes} from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/projects' element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App